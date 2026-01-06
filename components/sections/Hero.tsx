export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Ajinkya Thakur
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl">
        Full-Stack Developer & DevOps Engineer building
        production-ready web applications with clean architecture
        and automated deployments.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
