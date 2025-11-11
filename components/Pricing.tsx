'use client';

import { Check, Star, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Unlimited access to all programs',
    'Personal trainer consultations',
    'Customized workout plans',
    'Nutrition guidance & meal plans',
    'Progress tracking & analytics',
    'Group fitness classes',
    'Mobile app access',
    '24/7 community support',
    'Monthly body composition analysis',
    'Guest passes for friends',
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent <span className="text-red-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            One plan with everything you need to transform your fitness journey. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-bl-2xl font-bold flex items-center gap-2">
              <Star size={20} className="fill-white" />
              MOST POPULAR
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Pricing */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white p-12">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">Complete Access</h3>
                  <p className="text-red-100">Everything you need to succeed</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-6xl font-bold">$29</span>
                    <span className="text-2xl text-red-100 mb-2">/month</span>
                  </div>
                  <p className="text-red-100">Cancel anytime, no commitment</p>
                </div>

                <a
                  href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-red-600 text-center px-8 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl mb-6"
                >
                  Start Your Transformation
                </a>

                {/* Trust Indicators */}
                <div className="space-y-3 text-sm text-red-100">
                  <div className="flex items-center gap-2">
                    <Check size={18} />
                    <span>7-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={18} />
                    <span>No long-term contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={18} />
                    <span>Secure payment processing</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Features */}
              <div className="p-12">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">What's Included</h4>
                  <p className="text-gray-600">Full access to all premium features</p>
                </div>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check size={16} className="text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Instant Access</h5>
              <p className="text-gray-600 text-sm">Start working out immediately after signup</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600" size={24} />
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Flexible Plans</h5>
              <p className="text-gray-600 text-sm">Pause or cancel anytime with no penalties</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-purple-600" size={24} />
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Premium Support</h5>
              <p className="text-gray-600 text-sm">Dedicated support team available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}