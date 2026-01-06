import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-gray-950/80 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          ajinkya.codes
        </Link>

        <div className="hidden md:flex space-x-6 text-gray-400">
          <Link href="#projects" className="hover:text-white">Projects</Link>
          <Link href="#skills" className="hover:text-white">Skills</Link>
          <Link href="#devops" className="hover:text-white">DevOps</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
