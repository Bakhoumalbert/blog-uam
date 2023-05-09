import { Sidebar } from "../../components/sidebar";
import { SinglePost } from "../../components/singlePost";
import { Header } from "../../components/Header";
const HomePage = () => {
  return (
    <div className="col-span-8 h-full w-full p-12">
      <SinglePost />
    </div>
  );
};

export default HomePage;
