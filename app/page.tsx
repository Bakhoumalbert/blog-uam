import { Header } from "@/components/Header";
import { MainSection } from "@/components/mainSection";
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <MainSection />
      </section>
    </div>
  );
}
