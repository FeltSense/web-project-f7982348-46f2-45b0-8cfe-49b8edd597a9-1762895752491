'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Fitness training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="max-w-4xl">
          <div className="inline-block bg-red-600/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            🔥 Over 10,000 Success Stories
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="text-red-600"> Body</span>,<br />
            Transform Your Life
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            Professional coaching, personalized programs, and a supportive community to help you achieve your fitness goals faster than ever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="group bg-red-600 text-white px-8 py-5 rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>
            
            <a
              href="#programs"
              className="group bg-white/10 backdrop-blur-md text-white px-8 py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 flex items-center justify-center gap-2"
            >
              <Play size={24} className="fill-white" />
              Watch Our Story
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-300 font-medium">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 font-medium">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}