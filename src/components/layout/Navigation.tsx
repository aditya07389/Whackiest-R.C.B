import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/map", label: "Energy Map" },
  { href: "/#impact", label: "Impact" },
  { href: "/#contact", label: "Contact" }
];

export default function Navigation() {
  const location = useLocation();
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      if (location.pathname === '/') {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={(e) => scrollToSection(e, item.href)}
          className="hover:text-green-200 transition duration-300"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}