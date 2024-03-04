import React from "react";

const formatViewCount = (count) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M views`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K views`;
  } else {
    return `${count} views`;
  }
};


const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-semibold">{channelTitle}</li>
        <li className="font-light">{formatViewCount(statistics.viewCount)}</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-900 p-1 m-1 cursor-pointer rounded-md">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
