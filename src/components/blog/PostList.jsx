/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { cx } from "../../utils/all";
import { parseISO, format } from "date-fns";
import CategoryLabel from "./CategoryLabel";
import { ImagePlaceHolder } from "../Ui/ImagePlaceHolder";

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
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
          <Link className={"relative"} href="/">
            {imageProps ? (
              <img src={imageProps} className="object-cover transition-all " />
            ) : (
              <span className="relative  h-56 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <ImagePlaceHolder />
              </span>
            )}
          </Link>
        </div>

        <div className={cx("flex items-center")}>
          <div>
            <CategoryLabel categories={post?.categories?.nodes} />
            <h2
              className={
                "normal mt-2 dark:text-white line-clamp-2 font-medium  tracking-normal text-black"
              }
            >
              <Link href={""}>
                <span className="font-bold text-xl bg-gradient-to-r from-primary-400 to-primary-500 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  {post.title}
                </span>
              </Link>
            </h2>

            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <Link href={`/author/${post?.author?.slug?.current}`}>
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    {post?.author?.node?.avatar && (
                      <img src={post.author.node.avatar.url} />
                    )}
                  </div>
                  <span className="truncate text-sm">
                    {post?.author?.node?.name}
                  </span>
                </div>
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                &bull;
              </span>
              <time className="truncate text-sm" dateTime={post?.date}>
                {format(parseISO(post?.date), "MMMM dd, yyyy")}
              </time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
