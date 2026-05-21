export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold">
          Stefan Formentano
        </h1>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">Creations</a>
          <a href="#">Maker Projects</a>
          <a href="#">Events & Commissions</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gray-100">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 max-w-5xl">
          LEGO Creations, Interactive Builds, and Maker Projects
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10">
          Custom LEGO displays, electronics projects, and event experiences built by Stefan Formentano.
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl text-lg transition">
            View Creations
          </button>

          <button className="border border-gray-400 hover:bg-gray-200 px-6 py-3 rounded-xl text-lg transition">
            Contact Me
          </button>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-center mb-16">
          Featured Work
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-2xl p-8 shadow-sm">
            <h4 className="text-2xl font-semibold mb-4">
              LEGO Builds
            </h4>

            <p className="text-gray-600">
              Custom creations, detailed displays, and original brick-built designs.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 shadow-sm">
            <h4 className="text-2xl font-semibold mb-4">
              Maker Projects
            </h4>

            <p className="text-gray-600">
              Interactive electronics using ESP32, Arduino, TFT displays, and more.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 shadow-sm">
            <h4 className="text-2xl font-semibold mb-4">
              Events & Commissions
            </h4>

            <p className="text-gray-600">
              Available for custom builds, conventions, STEM events, and workshops.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}