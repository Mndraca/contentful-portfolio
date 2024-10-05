import HeroPost from "./heroPost";
import MoreStories from "./more-stories";
import { getAllPosts } from "@/lib/api";
import { draftMode } from "next/headers";

export default async function Blog() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div id="blog" className="w-3/4 mx-auto ">
      {heroPost ? (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      ) : (
        <p>No hero post available.</p>
      )}

      {morePosts && <MoreStories morePosts={morePosts} />}
    </div>
  );
}
