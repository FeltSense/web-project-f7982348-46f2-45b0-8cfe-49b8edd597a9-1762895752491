'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-red-50"
          >
            <ChevronLeft size={24} className="text-red-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-red-50"
          >
            <ChevronRight size={24} className="text-red-600" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 shadow-lg border border-gray-100 max-w-3xl mx-auto">
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 text-red-600/10">
                      <Quote size={64} fill="currentColor" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-8 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed mb-10 relative z-10 text-lg text-center">
                      "{testimonial.quote}"
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-6 justify-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-red-100"
                      />
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                        <div className="text-red-600 font-semibold">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-red-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
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