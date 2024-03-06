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

  console.log(data, "data");

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Container large>
        {loading && <BlogDetails loading={loading} />}
        {!loading && data && (
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
            <BlogDetails post={data.post} />
          </>
        )}
      </Container>
    </>
  );
};

export default BlogDetailPage;
