import About from "./about/page";
import Navbar from "./components/navbar";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "./components/footer";
import Blog from "./components/blog";
import BlogHeader from "./components/blog-header";

function Portfolio() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <BlogHeader />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default Portfolio;
