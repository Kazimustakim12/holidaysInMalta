import { cx } from "../../utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container lg:px-8 md:px-3 mx-auto xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-5 lg:py-10",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
