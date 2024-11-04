import React from 'react';
import { Shield, Lock, Eye, Bell } from 'lucide-react';

export default function Security() {
  return (
    <div id="security" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Security First Approach
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Your security is our top priority. Our products are built with multiple layers of protection.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 left-6">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="pt-12">
                <h3 className="text-xl font-medium text-gray-900">End-to-End Encryption</h3>
                <p className="mt-2 text-gray-500">All data is encrypted in transit and at rest</p>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 left-6">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <div className="pt-12">
                <h3 className="text-xl font-medium text-gray-900">Secure Authentication</h3>
                <p className="mt-2 text-gray-500">Multi-factor authentication for all accounts</p>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 left-6">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <div className="pt-12">
                <h3 className="text-xl font-medium text-gray-900">Privacy Controls</h3>
                <p className="mt-2 text-gray-500">Granular privacy settings for all devices</p>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 left-6">
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <div className="pt-12">
                <h3 className="text-xl font-medium text-gray-900">Real-time Alerts</h3>
                <p className="mt-2 text-gray-500">Instant notifications for security events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}