import { Inter } from "next/font/google";
import { Sidebar } from "../../components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "blog-post",
  description: "Generated by create next app",
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="fr">{children}</html>;
}
