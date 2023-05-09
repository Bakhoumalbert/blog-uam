import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/Fi";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex h-20 w-full flex-row items-center justify-around border border-b-gray-200">
      <div>
        <IoReorderThreeOutline className="text-2xl text-gray-600" />
      </div>
      <div className="text-3xl font-thin">
        <Link href="/">Ultimate Blog App</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <BsBell className="text-2xl text-gray-600" />
        </div>
        <div>
          <div className="h-5 w-5 rounded-full bg-gray-600"></div>
        </div>
        <div className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900">
          <button>Write</button>
          <div>
            <FiEdit />
          </div>
        </div>
      </div>
    </header>
  );
};
