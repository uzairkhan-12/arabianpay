import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function HowItWorksSection() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView1) controls1.start({ opacity: 1, scale: 1 });
    if (inView2) controls2.start({ opacity: 1, scale: 1 });
    if (inView3) controls3.start({ opacity: 1, scale: 1 });
    if (inView4) controls4.start({ opacity: 1, scale: 1 });
  }, [controls1, controls2, controls3, controls4, inView1, inView2, inView3, inView4]);

  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>
      <div className="max-w-4xl mx-auto">

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls1}
          transition={{ duration: 0.6 }}
          className="flex gap-x-10 flex-col md:flex-row items-center justify-between mb-12"
        >
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
              className="w-full max-w-[256px] md:max-w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls2}
          transition={{ duration: 0.6 }}
          className="flex gap-x-10 flex-col md:flex-row items-center justify-between mb-12"
        >
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
        </motion.div>

        <motion.div
          ref={ref3}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls3}
          transition={{ duration: 0.6 }}
          className="flex gap-x-10 flex-col md:flex-row items-center justify-between mb-12"
        >
          <div className="md:w-1/2 md:pr-8 text-left">
            <h3 className="text-2xl font-semibold mb-4">3. Shop Now & Pay Later</h3>
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
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls4}
          transition={{ duration: 0.6 }}
          className="flex gap-x-10 flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 md:order-last md:pl-8 text-left">
            <h3 className="text-2xl font-semibold mb-4">4. Grow Your Business</h3>
            <p className="text-gray-600">
              Focus on growing your business with flexible payment options and no hidden fees.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/growbusiness.jpg"
              alt="Grow Your Business"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}