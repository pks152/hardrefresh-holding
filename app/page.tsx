export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-8 text-center text-white">
      <div className="max-w-2xl">

        {/* Main Heading with a Gradient Effect */}
        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Hard Refresh
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="mt-4 text-lg text-gray-300 md:text-xl">
          Something Excellent is Coming Soon.
        </p>

        {/* "Coming Soon" Message */}
        <p className="mt-8 text-base text-gray-400">
          We're building something good.
        </p>

        {/* Call to Action (Email Link) */}
        <div className="mt-10">
          <a 
            href="mailto:preet@hardrefresh.com.au" 
            className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </main>
  );
}