import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";

function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBlogs = blogData.filter((blog) => {
    return (
      (category === "All" || blog.category === category) &&
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="pt-24 px-6 min-h-screen bg-gray-100">

      {/* Search + Filter */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Search blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option>All</option>
          <option>Web</option>
          <option>Design</option>
          <option>Programming</option>
        </select>

      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{blog.category}</p>
            <Link
              to={`/blog/${blog.id}`}
              className="mt-4 inline-block text-[#39FF14] font-semibold"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
