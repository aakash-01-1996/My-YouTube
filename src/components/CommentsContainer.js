import React from "react";

const commentsData = [
  {
    name: "Aakash Ambodkar",
    text: "lorem ipsum- 1 ",
    replies: [
      {
        name: "Aakash A",
        text: "Reply -1",
      },
    ],
  },
  {
    name: "Aakash Ambodkar",
    text: "lorem ipsum -2 ",
    replies: [{}],
  },
  {
    name: "Aakash Ambodkar",
    text: "lorem ipsum- 3 ",
    replies: [{}],
  },
  {
    name: "Aakash Ambodkar",
    text: "lorem ipsum- 4 ",
    replies: [{}],
  },
  {
    name: "Aakash Ambodkar",
    text: "lorem ipsum- 5 ",
    replies: [{}],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-current bg-gray-50 p-2 rounded-lg my-2">
      <img
        className="h-9 w-9"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="commentImg"
      />
      <div className="px-2">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <Comment data={comment} />
        <Comment data={comment} />
        <Comment data={comment} />
        {/* <CommentsList comments ={comment.replies}/> */}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-semibold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
