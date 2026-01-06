import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
      <Link href="/" className="text-xl font-semibold">
        Ajinkya.codes
      </Link>
      <div className="space-x-6 text-gray-400">
        <Link href="/#projects">Projects</Link>
        <Link href="/#devops">DevOps</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
