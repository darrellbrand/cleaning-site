

export default function ServicesSection() {
  return (
    <section className="bg-blue-400 py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900  mb-12">
          Our Cleaning Services
        </h2>

        <div className="grid gap-10 md:grid-cols-2 text-left">
          {/* Basic House Cleaning */}
          <div className="bg-blue-200 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Basic House Cleaning</h3>
            <ul className="list-disc list-inside text-blue-900 space-y-2 mb-4">
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
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Commercial Cleaning</h3>
            <ul className="list-disc list-inside text-blue-900 space-y-2 mb-4">
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
