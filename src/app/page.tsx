import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-slate-900">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Felxible
                </span>
                <span className="text-slate-700"> TECHNOLOGY</span>
              </Link>
            </div>
            <div className="hidden items-center space-x-8 md:flex">
              <Link
                href="#about"
                className="text-slate-600 transition-colors hover:text-slate-900"
              >
                About
              </Link>
              <Link
                href="#mission"
                className="text-slate-600 transition-colors hover:text-slate-900"
              >
                Mission
              </Link>
              <Link
                href="#contact"
                className="text-slate-600 transition-colors hover:text-slate-900"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
        <div className="relative z-10 container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Established with the mission to help Nepali businesses grow with
              data
            </div>
            <h1 className="mb-6 text-5xl leading-tight font-extrabold text-slate-900 sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Felxible TECHNOLOGY
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-600 sm:text-2xl">
              Transforming Nepal&apos;s business landscape through innovative
              data-driven solutions
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#about"
                className="transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              >
                Learn More
              </Link>
              <Link
                href="#contact"
                className="rounded-lg border-2 border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-md transition-all hover:border-slate-400 hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="animate-blob absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute top-40 right-10 h-72 w-72 rounded-full bg-purple-200 opacity-20 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-1/2 h-72 w-72 rounded-full bg-pink-200 opacity-20 mix-blend-multiply blur-xl filter"></div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
              About Us
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600">
                Felxible Technology is a vibrant startup rooted in Nepal,
                committed to transforming the local business landscape. We blend
                our understanding of local needs with our technological
                expertise to create problem-solving softwares that elevate
                business operations.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                We aim to make digital technology accessible and beneficial for
                all businesses, large and small. In today&apos;s fast-paced and
                constantly evolving digital world, data is the cornerstone of
                any successful enterprise.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-slate-900">
                        Innovation
                      </h3>
                      <p className="text-slate-600">
                        Cutting-edge solutions tailored for Nepali businesses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-slate-900">
                        Data-Driven
                      </h3>
                      <p className="text-slate-600">
                        Empowering decisions through actionable insights
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-red-500">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-slate-900">
                        Local Expertise
                      </h3>
                      <p className="text-slate-600">
                        Deep understanding of Nepal&apos;s business ecosystem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
              Our Mission
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-6 rounded-2xl bg-white p-8 shadow-xl md:p-12">
              <p className="text-lg leading-relaxed text-slate-700">
                The ability to access, analyze, and apply insights from data is
                no longer a luxury—it&apos;s a necessity. We understand that
                this digital transition can be complex and challenging,
                especially for local businesses that have traditionally operated
                offline.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Our aim is to simplify this process, providing the tools,
                guidance, and support necessary to bridge the gap between
                traditional operations and modern, data-driven practices.
              </p>
              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <p className="text-slate-600 italic">
                    Making digital technology accessible and beneficial for all
                    businesses, large and small.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Accessibility
              </h3>
              <p className="text-slate-600">
                Making advanced technology accessible to businesses of all
                sizes, ensuring no one is left behind in the digital
                transformation.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Innovation
              </h3>
              <p className="text-slate-600">
                Continuously evolving our solutions to meet the changing needs
                of businesses in Nepal&apos;s dynamic market.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-pink-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Support</h3>
              <p className="text-slate-600">
                Providing comprehensive guidance and support to help businesses
                successfully navigate their digital journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-slate-900 px-4 py-12 text-white sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Felxible
                </span>
                <span> TECHNOLOGY</span>
              </h3>
              <p className="text-slate-400">
                Helping Nepali businesses grow with data-driven solutions.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    href="#about"
                    className="transition-colors hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#mission"
                    className="transition-colors hover:text-white"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Get in Touch</h4>
              <p className="text-slate-400">
                Ready to transform your business with data? Let&apos;s connect
                and explore how we can help you grow.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Felxible Technology. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
