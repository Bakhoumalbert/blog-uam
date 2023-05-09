import { Header } from "@/components/Header";
import { MainSection } from "@/components/mainSection";
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="col-span-8 h-full w-full p-10">
      <MainSection />
    </section>
  );
}
