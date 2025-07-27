'use client';

import { Home, Building2 } from 'lucide-react'; // Icons for services

export default function ServicesSection() {
  return (
    <section className="bg-blue-400   px-6 marker-font" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-100 mb-12">
          Our Cleaning Services
        </h2>

        <div className="grid gap-10 md:grid-cols-2 text-left">
          {/* Basic House Cleaning */}
          <div className="bg-blue-200 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-6 h-6 text-blue-700" />
              <h3 className="text-2xl font-semibold text-blue-700">Basic House Cleaning</h3>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>Dusting all surfaces</li>
              <li>Vacuuming & mopping floors</li>
              <li>Bathroom & kitchen sanitization</li>
              <li>Trash removal</li>
              <li>Interior window cleaning</li>
            </ul>
            <p className="text-blue-700 font-bold text-lg">
              Starting at <span className="text-blue-700">$120</span> per session
            </p>
          </div>

          {/* Commercial Cleaning */}
          <div className="bg-blue-200 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-blue-700" />
              <h3 className="text-2xl font-semibold text-blue-700">Commercial Cleaning</h3>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>Office spaces, retail stores, and restaurants</li>
              <li>Surface disinfection & floor care</li>
              <li>Restroom sanitization</li>
              <li>Nightly/weekly contracts available</li>
              <li>Flexible scheduling</li>
            </ul>
            <p className="text-blue-700 font-bold text-lg">
              Starting at <span className="text-blue-700">$200</span> per visit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
