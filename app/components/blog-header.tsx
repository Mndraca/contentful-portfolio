import Link from "next/link";

const BlogHeader = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-center mt-16 mb-16 md:mb-12">
      <h1 className="font-bold text-3xl">
        <Link href="/" target="_blank" id="blog">
          Codify by <span className="text-pink-400"> Mndraca</span>
        </Link>
      </h1>
    </section>
  );
};

export default BlogHeader;
