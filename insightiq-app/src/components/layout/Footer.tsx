import React from 'react';

interface FooterLink {
  text: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { text: "Privacy Policy", href: "#" },
  { text: "Terms of Service", href: "#" },
  { text: "Contact Us", href: "#" }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <span className="text-xl font-bold">InsightIQ</span>
          </div>
          
          <div className="flex space-x-8 mb-4 md:mb-0">
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-300 hover:text-white">
                {link.text}
              </a>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2023 InsightIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}