'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Lost 45 lbs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'FitCore completely changed my life. The trainers are incredible, and the community support kept me motivated every single day. I never thought I could achieve these results!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Gained 20 lbs Muscle',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'The strength training program is phenomenal. My trainer understood my goals and created a plan that actually works. Best investment I\'ve ever made in myself.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marathon Finisher',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'From couch to marathon in 6 months! The conditioning programs and nutrition guidance gave me the endurance I needed. I\'m so grateful for this journey.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Transformed at 50',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote: 'I thought I was too old to get in shape. FitCore proved me wrong. The personalized approach and constant support helped me feel 20 years younger.',
      rating: 5,
    },
    {
      name: 'Jessica Martinez',
      role: 'Postpartum Recovery',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      quote: 'After having two kids, I didn\'t think I\'d ever feel strong again. The trainers created a safe, effective program that helped me regain my confidence and strength.',
      rating: 5,
    },
    {
      name: 'Alex Kumar',
      role: 'Athlete Performance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'As a competitive athlete, I needed expert guidance to reach the next level. FitCore\'s advanced training methods took my performance to heights I never imagined.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Real People, Real <span className="text-red-600">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of members who have transformed their lives with FitCore. Your success story starts here.
          </p>
        </div>

        {/* Testimonials Carousel-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-red-600/10">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-red-100"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-red-600 font-semibold">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-red-100 font-medium">Lives Transformed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500K+</div>
              <div className="text-red-100 font-medium">Pounds Lost</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-red-100 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-red-100 font-medium">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}