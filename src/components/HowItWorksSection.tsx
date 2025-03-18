export default function HowItWorksSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>
      <div className="max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 md:pr-8 text-left">
            <h3 className="text-2xl font-semibold mb-4">1. Download the App</h3>
            <p className="text-gray-600">
              Get started by downloading the Arabian Pay app from the Google Play Store or Apple App Store.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/download1.jpg"
              alt="Download the App"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 md:order-last md:pl-8 text-left">
            <h3 className="text-2xl font-semibold mb-4">2. Sign Up</h3>
            <p className="text-gray-600">
              Create an account in minutes. All you need is your business details and a valid ID.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/createaccount.jpg"
              alt="Sign Up"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 md:pr-8 text-left">
            <h3 className="text-2xl font-semibold mb-4">3. Shop & Pay Later</h3>
            <p className="text-gray-600">
              Browse our marketplace, make purchases, and split your payments into 3 easy installments.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/paylater.jpg"
              alt="Shop & Pay Later"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:order-last md:pl-8 text-left">
            <h3 className="text-2xl font-semibold mb-4">4. Grow Your Business</h3>
            <p className="text-gray-600">
              Focus on growing your business with flexible payment options and no hidden fees.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/about.jpg"
              alt="Grow Your Business"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}