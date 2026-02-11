import React, { useState } from "react";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, category, content });
    alert("Blog added (frontend only)");
  };

  return (
    <section className="pt-24 px-6 min-h-screen bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-6">Add Blog</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />

          <textarea
            placeholder="Content"
            rows="5"
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />

          <button className="bg-[#39FF14] px-4 py-2 rounded font-semibold">
            Publish
          </button>
        </form>

      </div>
    </section>
  );
}

export default AddBlog;
