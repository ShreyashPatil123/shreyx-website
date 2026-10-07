import React from "react";
import { Mail, MessageSquare, Terminal, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-b border-zinc-800/60 bg-zinc-950 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-400">
            <Mail className="w-3.5 h-3.5 text-zinc-300" />
            <span>Connect & Collaborate</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Get in touch with ShreyX
          </h2>

          <p className="text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Have feedback on our media engines, interested in collaborating, or exploring experimental builds?
            Connect directly with founder Shreyash Patil.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/shreyash-patil-33654a329"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-[#0a66c2]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#0a66c2]/10 border border-[#0a66c2]/20 flex items-center justify-center text-[#0a66c2] mb-3 group-hover:scale-105 transition-transform">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Connect professionally with Shreyash
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#0a66c2] mt-4 block truncate">
                in/shreyash-patil-33654a329
              </span>
            </a>

            {/* Direct Email Card */}
            <a
              href="mailto:patilshreyash303030@gmail.com"
              className="group p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
                  Direct Email
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  For inquiries and testing feedback
                </p>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 mt-4 block truncate">
                patilshreyash303030@gmail.com
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/ShreyashPatil123"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-200 mb-3 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
                  GitHub
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Explore source code and builds
                </p>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 mt-4 block truncate">
                github.com/ShreyashPatil123
              </span>
            </a>
          </div>

          <p className="pt-4 text-xs font-mono text-zinc-500">
            Independent Studio · Mumbai, India
          </p>
        </div>
      </div>
    </section>
  );
}
