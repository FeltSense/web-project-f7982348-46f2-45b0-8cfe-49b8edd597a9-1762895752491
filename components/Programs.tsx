'use client';

import { Dumbbell, Users, Target, Zap, Heart, TrendingUp } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build lean muscle and increase your strength with our progressive resistance programs designed by certified trainers.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Zap,
      title: 'HIIT & Conditioning',
      description: 'High-intensity interval training that burns fat, boosts metabolism, and improves cardiovascular endurance.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Target,
      title: 'Personal Coaching',
      description: 'One-on-one guidance with expert trainers who create customized workout plans tailored to your specific goals.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join energetic group sessions that combine accountability, motivation, and the power of community support.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Heart,
      title: 'Nutrition Guidance',
      description: 'Comprehensive meal planning and nutrition coaching to fuel your workouts and optimize your results.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Advanced analytics and regular assessments to monitor your progress and adjust your program for maximum results.',
      color: 'bg-indigo-100 text-indigo-600',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive fitness solutions designed to help you reach your goals, no matter your starting point or fitness level.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            View Pricing Plans
          </a>
        </div>
      </div>
    </section>
  );
}