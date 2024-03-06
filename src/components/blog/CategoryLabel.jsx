/* eslint-disable react/prop-types */
import { cx } from "../../utils/all";

export default function CategoryLabel({ categories, className }) {
  return (
    <div className="flex gap-3">
      {categories &&
        categories.slice().map((category, index) => (
          <label
            key={index}
            className={cx(
              "inline-block text-sm  tracking-wider uppercase  text-primary-600 font-semibold bg-primary-300 py-[4px] px-[8px] rounded-sm",
              className
            )}
          >
            {category.name}
          </label>
        ))}
    </div>
  );
}
