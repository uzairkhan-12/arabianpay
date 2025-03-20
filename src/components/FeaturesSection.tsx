import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section
      className="py-20 px-6 text-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "start",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Why Choose Arabian Pay?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="Flexible Payments"
            description="Split your purchases into 3 easy installments."
            svgCode="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <FeatureCard
            title="Instant Approval"
            description="Get approved in less than a minute."
            svgCode="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <FeatureCard
            title="Exclusive for Businesses"
            description="Tailored solutions for small and micro-enterprises."
            svgCode="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </div>
      </div>
    </section>
  );
}
