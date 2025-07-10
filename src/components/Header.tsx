import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Destinations", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  return (
    <header className="w-full bg-white backdrop-blur sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-blue-900 font-bold text-xl tracking-wide">
            Road Safe
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-blue-900 hover:text-blue-700 transition-colors font-medium text-base"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="ml-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-5 py-2 rounded-full shadow transition-colors"
          >
            Book Now
          </a>
        </nav>
        {/* Hamburger for mobile (no logic yet) */}
        <button className="md:hidden flex flex-col gap-1 group">
          <span className="w-6 h-0.5 bg-blue-900 block"></span>
          <span className="w-6 h-0.5 bg-blue-900 block"></span>
          <span className="w-6 h-0.5 bg-blue-900 block"></span>
        </button>
      </div>
    </header>
  );
}
