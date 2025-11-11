'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Exercises for Building Core Strength",
      excerpt: "Discover the fundamental movements that will transform your core stability and overall fitness performance.",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "The Science Behind High-Intensity Interval Training",
      excerpt: "Learn why HIIT workouts are so effective for fat loss and cardiovascular health, backed by scientific research.",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Nutrition Timing: When to Eat for Optimal Performance",
      excerpt: "Master the art of meal timing to fuel your workouts and accelerate recovery for maximum results.",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
    },
    {
      id: 4,
      title: "Recovery Strategies for Busy Professionals",
      excerpt: "Practical tips for optimizing recovery when you have limited time but maximum fitness goals.",
      date: "March 8, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
    },
    {
      id: 5,
      title: "Building Mental Resilience Through Fitness",
      excerpt: "Explore how physical training can strengthen your mental toughness and improve overall life performance.",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      title: "Home Workout Equipment: What You Actually Need",
      excerpt: "Cut through the marketing hype and discover the essential equipment for effective home workouts.",
      date: "March 3, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              FIT<span className="text-red-600">CORE</span> Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights, training tips, and science-backed strategies to help you achieve your fitness goals and unlock your potential.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">{post.date}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center group">
                    Read More 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stay Updated with Our Latest Tips
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get weekly fitness insights, workout plans, and nutrition advice delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}