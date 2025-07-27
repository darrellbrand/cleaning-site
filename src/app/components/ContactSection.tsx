

export default function ContactSection() {
  return (
    <section className="bg-blue-300 px-6 marker-font -mt-1 pt-2 " id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">Get in Touch</h2>
        <p className="text-lg text-blue-900 mb-12">
          Have questions or ready to book a cleaning? Fill out the form below and our team will get back to you shortly.
        </p>

        <form className="grid gap-6 text-left">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-blue-900 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-blue-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 placeholder-slate-500 "
              placeholder="Jane Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-blue-900  font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-blue-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 placeholder-slate-500"
              placeholder="jane@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-blue-900 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-blue-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 placeholder-slate-500"
              placeholder="(805) 555-1234"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-blue-900 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full border border-blue-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500text-blue-900 placeholder-slate-500"
              placeholder="Let us know how we can help..."
              required
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg md:text-2xl py-3 px-8 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Optional contact info */}
        <div className="mt-12 text-blue-900 text-lg">
          Or reach us directly at <a href="tel:+18055551234" className="text-blue-600">+1 (805) 555-1234</a> or <a href="mailto:info@805cleaningcrew.com" className="text-blue-600">info@805cleaningcrew.com</a>
        </div>
      </div>
    </section>
  );
}
