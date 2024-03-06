import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_POST_BY_PAGINATION } from "../lib/querys";
import Container from "../components/Ui/Container";
import PostList from "../components/blog/PostList";
import Loading from "../components/Ui/Loading";
import CategoryLabel from "../components/blog/CategoryLabel";
import { Breadcrumb, Button } from "flowbite-react";
import { format, parseISO } from "date-fns";
import TagLabel from "../components/blog/TagLabel";

const Blog = () => {
  const BATCH_SIZE = 10;
  const { data, loading, error, fetchMore } = useQuery(GET_POST_BY_PAGINATION, {
    variables: { first: BATCH_SIZE, after: null },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return <p>Sorry, an error has occurred. Please reload the page.</p>;
  }

  if (!data && loading) {
    return (
      <Container large>
        <>
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center bg-white rounded-3xl p-4"
          >
            <div className="flex items-center justify-center w-full lg:h-64 h-48 bg-gray-300 rounded lg:w-full sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </>
        <Loading numberOfCardsPrelaoder={3} />
      </Container>
    );
  }

  if (!data?.posts.edges.length) {
    return <p>No posts have been published.</p>;
  }
  const posts = data.posts.edges.map((edge) => edge.node);

  const haveMorePosts = Boolean(data?.posts?.pageInfo?.hasNextPage);
  return (
    <>
      <Container className="" large>
        <Breadcrumb
          aria-label="Blog page Breadcrum "
          className="bg-primary-400 px-5 py-3 mb-10 rounded-xl sticky top-10 z-50"
        >
          <Breadcrumb.Item>
            <Link to="/">
              <span className="text-primary-600 text-xl">Home</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="text-black text-xl">Blogs</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex flex-col gap-7">
          {posts.length > 0 ? (
            <>
              {posts.slice(0, 1).map((post, index) => (
                <div
                  key={index + post.id}
                  className="w-full flex gap-5 md:flex-nowrap flex-wrap  bg-white  justify-center px-5 py-5 rounded-3xl"
                >
                  <div className="lg:w-1/2 md:w-1/2 sm:w-full xs:w-full w-full ">
                    {post?.featuredImage?.node?.sourceUrl ? (
                      <Link to={`/blog/${post.slug}`}>
                        <img
                          src={post?.featuredImage?.node?.sourceUrl}
                          className="rounded-2xl h-[380px] w-full object-cover  overflow-hidden  bg-gray-100 transition-all hover:scale-[1.02]"
                          alt=""
                          loading="lazy"
                        />
                      </Link>
                    ) : (
                      <div className="flex w-full md:h-full h-[280px] items-center justify-center  bg-gray-300 rounde">
                        <svg
                          className="w-10 h-auto text-gray-200 dark:text-gray-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 18"
                        >
                          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="lg:w-1/2 w-full md:w-1/2 sm:w-full xs:w-full   flex flex-col lg:gap-5 gap-2 justify-between">
                    <span className="text-xl">Latest Post </span>
                    <h1 className="xl:text-5xl lg:text-3xl font-bold text-primary-600">
                      {post.title}
                    </h1>
                    <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                      <CategoryLabel categories={post?.categories?.nodes} />
                      <TagLabel tags={post?.tags?.nodes} />
                    </div>
                    <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-3">
                        <div className="relative h-5 w-5 flex-shrink-0 rounded-full overflow-hidden">
                          <img
                            src={post?.author?.node?.avatar?.url}
                            loading="lazy"
                          />
                        </div>
                        <span className=" text-sm capitalize">
                          {post.author.node.name}
                        </span>
                      </div>
                      <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"></span>
                      <time className=" text-sm">
                        {format(parseISO(post?.date), "MMMM dd,  yyyy")}
                      </time>
                      <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"></span>
                      {/* <CategoryLabel categories={post?.categories?.nodes} /> */}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-center text-white px-4 py-2 rounded-full bg-primary-600 w-auto font-semibold text-lg hover:bg-primary-500 md:mt-0 sm:mt-2 hover:text-primary-600 enabled:hover:bg-primary-500"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
              <div className="grid gap-7 lg:grid-cols-3 md:grid-cols-2 lg:gap-7 xl:grid-cols-3 ">
                {posts.slice(1).map((post) => (
                  <PostList
                    key={post.id}
                    post={post}
                    aspect="landscape"
                    preloadImage={true}
                  />
                ))}
              </div>
              <div className="w-full flex justify-center mt-8 mb-3">
                {haveMorePosts ? (
                  <Button
                    disabled={loading}
                    onClick={(event) => {
                      event.preventDefault();
                      fetchMore({
                        variables: { after: data.posts.pageInfo.endCursor },
                      });
                    }}
                    className="text-center hover:border focus:ring-primary-500 text-xl hover:border-primary-600 border text-white px-4 py-2 rounded-full bg-primary-600 w-auto font-semibold  hover:bg-primary-500 md:mt-0 sm:mt-2 hover:text-primary-600 enabled:hover:bg-white"
                  >
                    {loading ? "Loading..." : "Load more"}
                  </Button>
                ) : (
                  <p>✅ All posts loaded. 🥳</p>
                )}
              </div>
            </>
          ) : (
            <p className="text-2xl h-96 text-center">No Post are Created 😞 </p>
          )}
        </div>
      </Container>
    </>
  );
};

export default Blog;
