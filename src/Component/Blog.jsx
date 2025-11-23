import React from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import about from "../assets/about.jpg";
export default function Blog() {
  const posts = [
    {
      title: "Optimizing Supply Chains for Efficiency",
      excerpt:
        "Learn how modern logistics solutions can streamline your supply chain and boost productivity.",
      image: blog1,
    },
    {
      title: "Technology in Logistics",
      excerpt:
        "Discover how advanced tracking and AI are transforming the logistics industry.",
      image: blog2,
    },
    {
      title: "Sustainable Transport Solutions",
      excerpt:
        "Explore eco-friendly methods and strategies for reducing carbon footprint in logistics.",
      image: blog3,
    },
    {
      title: "Tips for Warehousing Success",
      excerpt:
        "Maximize space, efficiency, and safety in your warehouse operations.",
      image: blog4,
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${about})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Blog
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
            Insights, tips, and updates from the world of logistics.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-black-300 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 mb-4">{post.excerpt}</p>
                  </div>
                  <button className="mt-auto px-4 py-2 bg-green-400 text-gray-900 font-semibold rounded-full hover:bg-green-500 transition w-full">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest news, tips, and industry
            updates.
          </p>
          <button className="px-8 py-4 bg-green-400 text-gray-900 font-bold rounded-full hover:bg-green-500 transition">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
}
