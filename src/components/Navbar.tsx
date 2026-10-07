"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Philosophy", href: "#why-shreyx" },
    { name: "Technology", href: "#technology" },
    { name: "About", href: "#about" },
    { name: "Open Source", href: "#open-source" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-zinc-950/75 border-b border-white/[0.06] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-lg">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/90 flex items-center justify-center p-1 group-hover:border-zinc-600 transition-colors shadow-sm">
            <Image
              src="/images/brand/logo.png"
              alt="ShreyX Logo"
              width={28}
              height={28}
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              ShreyX
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
              Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-lg hover:text-zinc-100 hover:bg-white/[0.04] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right Utilities & CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://github.com/ShreyashPatil123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ShreyX on GitHub"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-zinc-800 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/shreyash-patil-33654a329"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Founder Shreyash Patil on LinkedIn"
            className="p-2 rounded-lg text-zinc-400 hover:text-[#0a66c2] hover:bg-white/[0.06] border border-transparent hover:border-zinc-800 transition-all"
            title="Connect on LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href="#products"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg text-zinc-950 bg-zinc-100 hover:bg-white transition-all shadow-sm hover:shadow-white/10 active:scale-95 ml-1"
          >
            <span>Explore Products</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://www.linkedin.com/in/shreyash-patil-33654a329"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-zinc-400 hover:text-white"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4 space-y-1 bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/ShreyashPatil123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shreyash-patil-33654a329"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[#0a66c2]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 text-xs font-semibold rounded-lg bg-white text-zinc-950"
            >
              Explore Products
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
