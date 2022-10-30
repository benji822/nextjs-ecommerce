import React from "react";

type IProps = {
  image: string;
  title: string;
  body: string;
};

const assetsurl = process.env.NEXT_PUBLIC_ASSETS_URL;

const PostCard = ({ image, title, body }: IProps) => {
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg my-2'>
      <img className='w-full' src={`${assetsurl}/${image}`} alt={title} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-grey-darker text-base'>{body}</p>
      </div>
    </div>
  );
};

export default PostCard;
