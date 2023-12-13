import type { MetaFunction } from "@remix-run/cloudflare";
import About from "~/components/Layout/About";
import Contact from "~/components/Layout/Contact";
import Footer from "~/components/Layout/Footer";
import Header from "~/components/Layout/Header";
import Main from "~/components/Layout/Main";
import Product from "~/components/Layout/Product";
import Topic from "~/components/Layout/Topic";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Product />
      <Topic />
      <Contact />
      <Footer />
    </>
  );
}
