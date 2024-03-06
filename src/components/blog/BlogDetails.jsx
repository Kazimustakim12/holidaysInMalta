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
                  <img src={userUrl} alt="user" />
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
            <div className="flex w-full h-full items-center justify-center  bg-gray-300 rounded  dark:bg-gray-700 my-11 h-[420px] object-cover">
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
            />
          )}

          <div className="max-w-[770px] mx-auto">
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>

            {/* <div className="mt-10 flex rounded-md border border-gray-3">
              <button className="group p-4 sm:p-7.5 ease-in duration-200 hover:bg-gray rounded-l-md text-left border-r border-gray-3">
                <span className="flex items-center gap-4 group-hover:text-primary">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 11.175H4.98748L11.3625 4.6875C11.7 4.35 11.7 3.825 11.3625 3.4875C11.025 3.15 10.5 3.15 10.1625 3.4875L2.39998 11.3625C2.06248 11.7 2.06248 12.225 2.39998 12.5625L10.1625 20.4375C10.3125 20.5875 10.5375 20.7 10.7625 20.7C10.9875 20.7 11.175 20.625 11.3625 20.475C11.7 20.1375 11.7 19.6125 11.3625 19.275L5.02498 12.8625H21C21.45 12.8625 21.825 12.4875 21.825 12.0375C21.825 11.55 21.45 11.175 21 11.175Z"
                      fill=""
                    ></path>
                  </svg>
                  PREVIOUS POST
                </span>
                <p className="hidden sm:block text-custom-sm mt-4 text-body">
                  At vero eos et accusamus et iusto dignissimos ducimus qui
                  blanditiis praesentium.
                </p>
              </button>
              <button className="group p-4 sm:p-7.5 ease-in duration-200 hover:bg-gray rounded-r-md text-right">
                <span className="flex items-center justify-end gap-4 group-hover:text-primary">
                  NEXT POST
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6 11.4L13.8375 3.52498C13.5 3.18748 12.975 3.18748 12.6375 3.52498C12.3 3.86248 12.3 4.38748 12.6375 4.72498L18.9375 11.1375H3.00005C2.55005 11.1375 2.17505 11.5125 2.17505 11.9625C2.17505 12.4125 2.55005 12.825 3.00005 12.825H19.0125L12.6375 19.3125C12.3 19.65 12.3 20.175 12.6375 20.5125C12.7875 20.6625 13.0125 20.7375 13.2375 20.7375C13.4625 20.7375 13.6875 20.6625 13.8375 20.475L21.6 12.6C21.9375 12.2625 21.9375 11.7375 21.6 11.4Z"
                      fill=""
                    ></path>
                  </svg>
                </span>
                <p className="hidden sm:block text-custom-sm mt-4 text-body">
                  Dignissimos ducimus qui blanditiis praesentiu deleniti atque
                  corrupti quos dolores
                </p>
              </button>
            </div> */}
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
