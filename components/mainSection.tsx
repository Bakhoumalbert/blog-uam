import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
import { Post } from "./post";
import Link from "next/link";

export const MainSection = () => {
  return (
    <main className="col-span-8  h-full w-full border-r border-gray-300 px-12">
      <div className="flex w-full flex-col space-y-4 py-10">
        <div className="flex w-full flex-col items-center justify-center space-x-4 md:flex-row">
          <label
            htmlFor="search"
            className="relative w-full rounded-3xl border border-gray-800"
          >
            <div className="absolute left-2 flex h-full items-center">
              <CiSearch />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className=" w-full rounded-3xl px-4 py-1 pl-7 text-sm outline-none placeholder:text-xs placeholder:text-gray-300"
              placeholder="search..."
            />
          </label>
          <div className="flex w-full items-center justify-end space-x-4 pt-2 md:pt-0">
            <div>My topics:</div>
            <div className="flex items-center space-x-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-3xl bg-gray-200/50 px-4 py-3">
                  tag {i}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between border-b border-gray-300 pb-8">
          <div>Articles</div>
          <div>
            <button className="px- flex items-center space-x-2 rounded-3xl border border-gray-800 px-4 py-1.5 font-semibold">
              <div>following</div>
              <div>
                <HiChevronDown className="text-xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center space-y-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <Post key={i} />
        ))}
      </div>
    </main>
  );
};
