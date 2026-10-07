import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center p-0.5">
            <Image
              src="/images/brand/logo.png"
              alt="ShreyX Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-100">
              ShreyX
            </span>
            <span className="text-xs text-zinc-500 font-mono">
              Independent technology studio.
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs text-zinc-500 font-mono">
          <a
            href="https://www.linkedin.com/in/shreyash-patil-33654a329"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0a66c2] transition-colors flex items-center gap-1.5"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ShreyashPatil123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:patilshreyash303030@gmail.com"
            className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
          <span>© 2026 ShreyX</span>
        </div>
      </div>
    </footer>
  );
}
