import Link from "next/link";
import DateComponent from "./date";
import Avatar from "./avatar";

interface HeroPostProps {
  title: string;
  coverImage?: {
    url: string;
  };
  date: string;
  excerpt?: string;
  author?: {
    name: string;
    picture?: string;
  };
  slug: string;
}

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: HeroPostProps) {
  return (
    <section className="hero-post">
      {coverImage && (
        <div className="mb-8 md:mb-16">
          <Link href={`/posts/${slug}`}>
            <img
              src={coverImage.url}
              alt={`Cover Image for ${title}`}
              className="w-full"
            />
          </Link>
        </div>
      )}
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 text-pink-600">
            {excerpt}
          </p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}
