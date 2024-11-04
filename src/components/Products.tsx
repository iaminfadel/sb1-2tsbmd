import React from 'react';
import { Home, Shield, Lightbulb, Thermometer, Camera, Lock } from 'lucide-react';

const products = [
  {
    icon: Lightbulb,
    name: 'Smart Lighting',
    description: 'Intelligent lighting solutions that adapt to your lifestyle and save energy.'
  },
  {
    icon: Lock,
    name: 'Smart Locks',
    description: 'Secure your home with advanced digital locks and remote access control.'
  },
  {
    icon: Thermometer,
    name: 'Climate Control',
    description: 'Automated temperature control for optimal comfort and efficiency.'
  },
  {
    icon: Camera,
    name: 'Security Cameras',
    description: 'HD surveillance with AI-powered motion detection and cloud storage.'
  },
  {
    icon: Home,
    name: 'Home Hub',
    description: 'Central control system for seamless device integration and automation.'
  },
  {
    icon: Shield,
    name: 'Security System',
    description: 'Comprehensive security solution with 24/7 monitoring and instant alerts.'
  }
];

export default function Products() {
  return (
    <div id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Smart Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our range of innovative IoT products designed to make your home smarter and life easier.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  <product.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}