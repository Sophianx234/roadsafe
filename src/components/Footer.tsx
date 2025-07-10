import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Destinations", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
];

const socialLinks = [
  { name: "Facebook", icon: "/globe.svg", href: "#" },
  { name: "Twitter", icon: "/globe.svg", href: "#" },
  { name: "Instagram", icon: "/globe.svg", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-white py-10 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-between">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/file.svg" alt="Logo" width={36} height={36} />
            <span className="font-bold text-lg">Global Express</span>
          </div>
          <p className="text-blue-200 text-sm max-w-xs">
            Regular trips and parcel delivery from Moldova to Europe. Safe,
            fast, and affordable.
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          <span className="font-semibold mb-1">Navigation</span>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-blue-200 hover:text-white transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-1">Contact</span>
          <span className="text-blue-200 text-sm">+373 779 799 93</span>
          <span className="text-blue-200 text-sm">info@globalexpress.md</span>
          <span className="text-blue-200 text-sm">
            M. Chisinau, str. Renasterii 32
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-1">Follow us</span>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="hover:opacity-80 transition-opacity"
              >
                <Image src={s.icon} alt={s.name} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-blue-300 text-xs mt-8">
        © {new Date().getFullYear()} Global Express. All rights reserved.
      </div>
    </footer>
  );
}
