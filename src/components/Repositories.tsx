import React from "react";
import { ArrowUpRight, Code, Terminal, CheckCircle2, GitBranch } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Repositories() {
  const repos = [
    {
      name: "ShreyashPatil123/shreyx-music",
      description:
        "Autonomous, 100% standalone high-fidelity music player for Android & iOS. Direct on-device stream extraction via youtube_explode_dart, true background audio, grouped offline .m4a downloads, synced LRCLIB lyrics, and real-time collaborative Vibe Rooms over Go WebSockets.",
      tech: ["Flutter", "Dart", "just_audio", "audio_service", "Go 1.22", "WebSockets"],
      url: "https://github.com/ShreyashPatil123/shreyx-music",
      status: "Android Beta • iOS Testing",
      badgeColor: "emerald",
    },
    {
      name: "ShreyashPatil123/shreyx-tube",
      description:
        "Autonomous high-performance, privacy-focused YouTube video client for Android. Features AndroidX Media3 / ExoPlayer hardware decoding, adaptive 1080p/4K MergingMediaSource pipeline, ephemeral URL auto-recovery, and gesture HUD. Tested on Samsung Galaxy S24.",
      tech: ["Flutter", "Kotlin", "AndroidX Media3 1.4.1", "NewPipeExtractor", "sqflite"],
      url: "https://github.com/ShreyashPatil123/shreyx-tube",
      status: "Android Beta • Active Development",
      badgeColor: "sky",
    },
    {
      name: "ShreyashPatil123/ShreyX",
      description:
        "Privacy-first, offline-first local AI assistant for Android. Connects a mobile Flutter client over low-latency local Wi-Fi to a FastAPI desktop backend orchestrating local open-weight LLMs (Gemma 4 12B, Qwen 3.5 9B, DeepSeek R1) with real-time reasoning inspection.",
      tech: ["Flutter", "Dart", "Python", "FastAPI", "Ollama", "SQLite"],
      url: "https://github.com/ShreyashPatil123/ShreyX",
      status: "Upcoming • In Development",
      badgeColor: "indigo",
    },
  ];

  return (
    <section id="open-source" className="py-20 md:py-28 border-b border-zinc-800/60 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-400 mb-4">
            <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
            <span>Open Source & Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Repositories & Engineering
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            All codebases engineered by ShreyX are maintained directly under the founder's GitHub account.
            Every link below points directly to an active public repository.
          </p>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 flex flex-col justify-between hover:border-zinc-700/80 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-zinc-400" />
                    <h3 className="text-sm font-semibold text-zinc-100 font-mono break-all">
                      {repo.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {repo.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {repo.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between">
                <span
                  className={`text-[11px] font-mono flex items-center gap-1.5 ${
                    repo.badgeColor === "emerald"
                      ? "text-emerald-400"
                      : repo.badgeColor === "sky"
                      ? "text-sky-400"
                      : "text-indigo-400"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      repo.badgeColor === "emerald"
                        ? "bg-emerald-500"
                        : repo.badgeColor === "sky"
                        ? "bg-sky-500"
                        : "bg-indigo-500"
                    }`}
                  />
                  {repo.status}
                </span>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-200 hover:text-white transition-colors"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
