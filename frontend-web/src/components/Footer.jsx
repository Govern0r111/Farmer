import React from 'react';

const links = [
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Terms', href: '#' },
  { name: 'FAQ', href: '#' },
];

const socials = [
  { name: 'LinkedIn', icon: '🔗', href: '#' },
  { name: 'Twitter/X', icon: '🐦', href: '#' },
];

const Footer = () => (
  <footer className="bg-gray-100 py-6 mt-12 border-t">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
      <nav className="mb-2 sm:mb-0 flex flex-wrap gap-x-4 text-gray-600 text-sm">
        {links.map(link => (
          <a key={link.name} href={link.href} className="hover:underline">{link.name}</a>
        ))}
      </nav>
      <div className="flex gap-x-4">
        {socials.map(social => (
          <a key={social.name} href={social.href} className="text-xl" aria-label={social.name}>{social.icon}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
