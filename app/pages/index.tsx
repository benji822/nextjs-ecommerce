import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import Head from "next/head";
import PostCard from "../components/PostCard";
import { getHomepagePosts } from "../queries/queries";

const Home: NextPage = () => {
  const {
    status,
    data: posts,
    error,
    isFetching,
    isSuccess,
  } = useQuery(["posts"], getHomepagePosts);

  console.log(posts);

  return (
    <div className='flex flex-col items-center py-2 max-w-2xl mx-auto'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {isSuccess &&
        posts.map((post: any) => (
          <PostCard
            title={post.title}
            body={post.body}
            image={post.feature_image.id}
            key={post.id}
          />
        ))}
    </div>
  );
};

export default Home;
