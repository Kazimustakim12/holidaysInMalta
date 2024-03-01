import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../lib/querys";
import Container from "../components/Ui/Container";
import { Link } from "react-router-dom";
import PostList from "../components/blog/PostList";
import Loading from "../components/Ui/Loading";

const Blog = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  // if (loading) return;
  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      {loading ? (
        <Container>
          <Loading />
        </Container>
      ) : (
        data && (
          <div className="">
            <Container>
              <h1 className="text-7xl text-center mb-8 font-bold text-primary-600 ">
                Blogs
              </h1>
              <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
                {data.posts.nodes.slice(0, 2).map((post) => (
                  <PostList
                    key={post.id}
                    post={post}
                    aspect="landscape"
                    preloadImage={true}
                  />
                ))}
              </div>
              <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
                {data.posts.nodes.slice(2, 14).map((post) => (
                  <PostList key={post.id} post={post} />
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/archive"
                  className="relative inline-flex items-center gap-1 rounded-md border border-orange-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-orange-500 hover:bg-orange-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
                >
                  <span>View all Posts</span>
                </Link>
              </div>
            </Container>
          </div>
        )
      )}
    </>
  );
};

export default Blog;
