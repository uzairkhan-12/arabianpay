export default function FeaturesSection() {
  return (
    <section
      className="py-20 px-6 text-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg.jpg')", // Add the background image
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "start", // Center the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Arabian Pay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="p-6 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Payments</h3>
            <p className="text-gray-600">Split your purchases into 3 easy installments.</p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Approval</h3>
            <p className="text-gray-600">Get approved in less than a minute.</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Exclusive for Businesses</h3>
            <p className="text-gray-600">Tailored solutions for small and micro-enterprises.</p>
          </div>
        </div>
      </div>
    </section>
  );
}