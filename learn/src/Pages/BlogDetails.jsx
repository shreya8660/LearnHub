import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../data/blogData";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <section className="pt-24 px-6 min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

        <h2 className="text-3xl font-bold">{blog.title}</h2>
        <p className="mt-4 text-gray-600">{blog.content}</p>

        {/* Comment Section */}
        <div className="mt-8">
          <h3 className="font-semibold mb-4">Comments</h3>

          <div className="space-y-2">
            {comments.map((c, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded">
                {c}
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add comment..."
              className="flex-1 px-3 py-2 border rounded"
            />
            <button
              onClick={addComment}
              className="bg-[#39FF14] px-4 py-2 rounded font-semibold"
            >
              Post
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BlogDetails;
