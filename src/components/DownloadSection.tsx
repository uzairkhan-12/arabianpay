export default function DownloadSection() {
    return (
      <section className="py-20 px-6 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Download Arabian Pay Today</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Join thousands of businesses using Arabian Pay for seamless payments and financial flexibility.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/playstore.png"
              alt="Get it on Google Play"
              className="h-12 md:h-14"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/appStore.png"
              alt="Download on the App Store"
              className="h-12 md:h-14"
            />
          </a>
        </div>
      </section>
    );
  }