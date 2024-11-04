import React from 'react';
import { Lightbulb, Lock, Thermometer, Video, Wifi, Battery } from 'lucide-react';

const solutions = [
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    description: 'Automated lighting systems that adapt to your schedule and preferences.'
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Advanced security systems with real-time monitoring and alerts.'
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Intelligent temperature management for optimal comfort and efficiency.'
  },
  {
    icon: Video,
    title: 'Video Surveillance',
    description: 'HD cameras with motion detection and night vision capabilities.'
  },
  {
    icon: Wifi,
    title: 'Home Network',
    description: 'Robust networking solutions for seamless device connectivity.'
  },
  {
    icon: Battery,
    title: 'Energy Management',
    description: 'Smart power monitoring and optimization systems.'
  }
];

export default function Solutions() {
  return (
    <div id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive smart home solutions designed for modern living
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <solution.icon className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{solution.title}</h3>
              <p className="mt-2 text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}