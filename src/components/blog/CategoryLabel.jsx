/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CategoryLabel({ categories }) {
  return (
    <div className="flex gap-3">
      {categories &&
        categories.slice(0).map((category) => (
          <Link href="" key={category.id}>
            <label className="inline-block text-xs  tracking-wider uppercase mt-4 text-primary-600 font-semibold">
              {category.name}
            </label>
          </Link>
        ))}
    </div>
  );
}
