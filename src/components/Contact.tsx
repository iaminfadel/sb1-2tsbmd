import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-gray-500">support@kanan.tech</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
            <p className="mt-2 text-gray-500">+1 (555) 123-4567</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Office</h3>
            <p className="mt-2 text-gray-500">123 Smart Street<br />Tech City, TC 12345</p>
          </div>
        </div>

        <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <form className="p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}