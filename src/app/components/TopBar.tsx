
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-2xl z-50 overflow-x-hidden p-1 marker-font">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row  justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="md:text-2xl text-sm font-bold flex items-center text-blue-600">
            <Image
              src="/bucket.png"
              alt="805 Cleaning Crew Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <ul className=" flex space-x-4 text-blue-600  font-bold text-lg md:text-2xl">
            <li>
              <a href="#home" className="hover:text-blue-900 transition ">home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-900 transition ">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-900 transition">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-900 transition">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
