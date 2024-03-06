/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { cx } from "../../utils/all";
import { parseISO, format } from "date-fns";
import CategoryLabel from "./CategoryLabel";
import { ImagePlaceHolder } from "../Ui/ImagePlaceHolder";
import TagLabel from "./TagLabel";

export default function PostList({ post }) {
  const imageProps = post?.featuredImage
    ? post?.featuredImage?.node?.sourceUrl
    : null;
  //   const AuthorimageProps = post?.author?.image
  //     ? urlForImage(post.author.image)
  //     : null;
  return (
    <>
      <div className="group cursor-pointer bg-white p-5 rounded-3xl">
        <div
          className={cx(
            " overflow-hidden rounded-2xl bg-gray-100 transition-all hover:scale-[1.02] dark:bg-gray-800",
            imageProps ? "h-auto" : "h-56"
          )}
        >
          <Link className={"relative"} to={`/blog/${post.slug}`}>
            {imageProps ? (
              <img
                src={imageProps}
                className="object-cover transition-all h-[280px] w-full"
              />
            ) : (
              <ImagePlaceHolder />
            )}
          </Link>
        </div>

        <div className={cx("flex items-center")}>
          <div>
            <div className="flex items-center justify-between mt-4 gap-3 flex-wrap gap-2">
              <CategoryLabel categories={post?.categories?.nodes} />
              <TagLabel tags={post?.tags?.nodes} />
            </div>
            <h2
              className={
                "normal mt-2 dark:text-white line-clamp-2 font-medium  tracking-normal text-black"
              }
            >
              <Link to={`/blog/${post.slug}`}>
                <span className="font-bold text-xl bg-gradient-to-r from-primary-400 to-primary-500 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  {post.title}
                </span>
              </Link>
            </h2>

            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <Link>
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0 rounded-full overflow-hidden">
                    {post?.author?.node?.avatar && (
                      <img src={post.author.node.avatar.url} />
                    )}
                  </div>
                  <span className=" text-sm capitalize">
                    {post?.author?.node?.name}
                  </span>
                </div>
              </Link>
              <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"></span>
              <time className=" text-sm" dateTime={post?.date}>
                {format(parseISO(post?.date), "MMMM dd,  yyyy")}
              </time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
