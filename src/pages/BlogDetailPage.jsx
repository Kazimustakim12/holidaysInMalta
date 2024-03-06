import { Link, useParams } from "react-router-dom";
import Container from "../components/Ui/Container";
import BlogDetails from "../components/blog/BlogDetails";
import { useQuery } from "@apollo/client";
import { GET_POST_BY_ID } from "../lib/querys";
import { Breadcrumb } from "flowbite-react";
const BlogDetailPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: {
      slug: slug,
    },
  });

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Container large>
        {loading ? (
          <BlogDetails loading={loading} />
        ) : !loading && data?.post !== null ? (
          <>
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
                <Link to="/blog">
                  <span className="text-primary-600 text-xl">Blogs</span>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span className="text-black text-xl">{data.post.title}</span>
              </Breadcrumb.Item>
            </Breadcrumb>
            <BlogDetails post={data?.post} />
          </>
        ) : (
          <div className="h-96 text-center flex items-center justify-center flex-col gap-4">
            <p className="text-center text-2xl capitalize ">
              we dont have post of this type
            </p>
            <Link
              to="/blog"
              className="text-xl w-auto rounded-md bg-primary-600 px-3.5 py-2.5  font-semibold text-white shadow-sm hover:text-primary-600 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Check our Blogs
            </Link>
          </div>
        )}
      </Container>
    </>
  );
};

export default BlogDetailPage;
