import PropsTypes from "prop-types";
import CategoryLabel from "./CategoryLabel";
import { format, parseISO } from "date-fns";
import TagLabel from "./TagLabel";

const BlogDetails = ({ post, loading }) => {
  if (loading) {
    return (
      <div className="bg-white py-8 rounded-3xl">
        <div
          role="status"
          className="max-w-[1030px] mx-auto px-4 sm:px-8 xl:px-0 animate-pulse"
        >
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-center mt-4">
            <svg
              className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-48 bg-gray-300  dark:bg-gray-700 my-5 animate-pulse">
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
          <div role="status" className="max-w-full animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  const {
    date,
    title,
    content,
    featuredImage,
    author: {
      node: {
        name: userName,
        avatar: { url: userUrl },
      },
    },
  } = post;
  return (
    <>
      {post && (
        <div className="max-w-[1030px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[770px] mx-auto">
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-custom-2 text-dark mb-6">
              {title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 mt-7.5">
              <div className="flex flex-wrap items-center gap-4">
                <div
                  href="author.html"
                  className="flex w-12 h-12 rounded-full overflow-hidden"
                >
                  <img src={userUrl} alt="user" loading="lazy" />
                </div>
                <div>
                  <h4 className="capitalize font-medium text-custom-lg text-dark">
                    <span>{userName}</span>
                  </h4>
                  <div className="flex gap-5 align-bottom">
                    <div className="flex items-center gap-2">
                      <span>{format(parseISO(date), "MMMM dd,  yyyy")}</span>
                      <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"></span>
                      <CategoryLabel categories={post?.categories?.nodes} />
                      <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"></span>
                      <TagLabel tags={post?.tags?.nodes} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {featuredImage?.node?.sourceUrl == null ? (
            <div className="flex w-full  items-center justify-center  bg-gray-300 rounded  dark:bg-gray-700 my-11 h-[420px] object-cover">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"></path>
              </svg>
            </div>
          ) : (
            <img
              src={featuredImage?.node?.sourceUrl}
              alt="blog"
              className="m-auto w-full rounded-3xl my-11 h-[420px] object-cover"
              loading="lazy"
            />
          )}

          <div className="max-w-[770px] mx-auto">
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
BlogDetails.propTypes = {
  post: PropsTypes.shape({
    date: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    content: PropsTypes.string.isRequired,
    featuredImage: PropsTypes.shape({
      node: PropsTypes.shape({
        sourceUrl: PropsTypes.string.isRequired,
      }),
    }),
    categories: PropsTypes.shape({
      nodes: PropsTypes.arrayOf(
        PropsTypes.shape({
          name: PropsTypes.string.isRequired,
        })
      ),
    }),
    tags: PropsTypes.shape({
      nodes: PropsTypes.arrayOf(
        PropsTypes.shape({
          name: PropsTypes.string.isRequired,
        })
      ),
    }),
    author: PropsTypes.shape({
      node: PropsTypes.shape({
        name: PropsTypes.string.isRequired,
        avatar: PropsTypes.shape({
          url: PropsTypes.string.isRequired,
        }),
      }),
    }),
  }),
  loading: PropsTypes.bool,
};
