"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Music,
  Video,
  Download,
  Shield,
  Layers,
  Sparkles,
  Maximize2,
  CheckCircle2,
  Apple,
  Bot,
  Terminal,
  Cpu,
  Wifi,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeMusicTab, setActiveMusicTab] = useState<"player" | "home">("player");
  const [activeTubeTab, setActiveTubeTab] = useState<"player" | "home" | "feed">("player");

  const musicScreenshots = {
    player: {
      src: "/images/music/shreyx_music_deck.png",
      title: "Active Deck & Now Playing View",
      desc: "Live duration tracking, 160 KBPS Opus resolution, -14 LUFS volume normalization, vocal EQ, and synced lyrics.",
    },
    home: {
      src: "/images/music/shreyx_music_discover.png",
      title: "Discover Feed & Docked Mini-Player",
      desc: "Autonomous flow, trending charts, one-tap flow playback, and persistent mini-player.",
    },
  };

  const tubeScreenshots = {
    player: {
      src: "/images/tube/shreyx_tube_watch.png",
      title: "Media3 Hardware Video Surface",
      desc: "ExoPlayer direct decoding, gesture HUD, quality selector, and docked queue list.",
    },
    home: {
      src: "/images/tube/shreyx_tube_trending.png",
      title: "Ad-Free AMOLED Feed",
      desc: "Distraction-free browsing with category pills (Trending, Music, Gaming) and zero tracking.",
    },
    feed: {
      src: "/images/tube/shreyx_tube_category.png",
      title: "Content Discovery Feed",
      desc: "Direct stream resolution, channel browsing, and lightweight thumbnail caching.",
    },
  };

  return (
    <section id="products" className="py-20 md:py-28 border-b border-zinc-800/60 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-400 mb-4">
            <Layers className="w-3.5 h-3.5 text-zinc-300" />
            <span>Studio Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Real software built for real devices.
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Every product below has been architected, written, and tested on physical hardware.
            No vaporware, no mockups without source code, no invented metrics.
          </p>
        </div>

        {/* =========================================================================
            PRODUCT 1: SHREYX MUSIC
           ========================================================================= */}
        <div
          id="music"
          className="rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/40 via-zinc-950 to-zinc-950 p-6 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-zinc-100 shadow-sm">
                  <Music className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 flex items-center gap-3">
                    ShreyX Music
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-800/50">
                      Android Beta • iOS Testing
                    </span>
                    <span className="text-xs font-mono text-zinc-500">v1.1.3 Build</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                An autonomous, 100% standalone audio player designed to stream, search, and download music
                without requiring a computer proxy or local server. Operates completely on-device with true
                background playback, lock-screen transport, synchronized LRCLIB lyrics, and real-time
                collaborative Vibe Rooms.
              </p>

              {/* Verified Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero PC Hosting:</strong> On-device stream extraction via Dart; zero middleman servers.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>True Background Audio:</strong> Powered by <code>just_audio</code> and <code>audio_service</code> with lock-screen media controls.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Grouped Offline Downloads:</strong> Stores <code>.m4a</code> files on device storage, grouped by playlist or standalone tracks.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Synced LRCLIB Lyrics:</strong> Timestamp-synced scrolling lyrics; tap any line to seek instantly.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Cross-Platform Vibe Rooms:</strong> Group synchronized listening with Go WebSocket backend (<code>wss://shreyx-vibe.onrender.com/ws</code>).
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>High-Precision Scrubber:</strong> Clean seeker with millisecond duration tracking and no accidental volume conflicts.
                  </span>
                </div>
              </div>

              {/* Architecture & Tech Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">Flutter 3</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">Dart</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">just_audio</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">audio_service</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">Go 1.22 WebSockets</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">LRCLIB API</span>
              </div>

              {/* Action Buttons: Android Download & GitHub */}
              <div className="pt-3 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/ShreyashPatil123/shreyx-music/releases/download/v1.1.3/app-release.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white transition-all shadow-sm active:scale-98"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Beta APK</span>
                  </a>

                  <a
                    href="https://github.com/ShreyashPatil123/shreyx-music"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all active:scale-98"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                </div>

                <p className="text-[11px] font-mono text-zinc-500">
                  Early testing build. Features may change. Target: Android 8.0+ (ARM64).
                </p>

                {/* Apple / iOS testing status card */}
                <div className="mt-4 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-3 text-xs text-zinc-400">
                  <Apple className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-zinc-200">Apple iOS Status: </span>
                    <span>
                      iOS build is currently in testing. The <code>.ipa</code> package is available through GitHub releases for users who want to test it via AltStore / Sideloadly.
                    </span>
                    <div className="mt-1">
                      <a
                        href="https://github.com/ShreyashPatil123/shreyx-music/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-300 hover:text-white underline inline-flex items-center gap-1 font-mono text-[11px]"
                      >
                        <span>View iOS .ipa on GitHub Releases</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual / Interactive Screenshot Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Tab Selector */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 mb-4 text-xs font-mono text-zinc-400">
                <button
                  type="button"
                  onClick={() => setActiveMusicTab("player")}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeMusicTab === "player"
                      ? "bg-zinc-800 text-zinc-100 font-semibold"
                      : "hover:text-zinc-200"
                  }`}
                >
                  Now Playing
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMusicTab("home")}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeMusicTab === "home"
                      ? "bg-zinc-800 text-zinc-100 font-semibold"
                      : "hover:text-zinc-200"
                  }`}
                >
                  Discover Feed
                </button>
              </div>

              {/* Phone Frame Mockup Container */}
              <div
                onClick={() => setSelectedImage(musicScreenshots[activeMusicTab].src)}
                className="group relative w-full max-w-[280px] sm:max-w-[300px] aspect-[9/18.5] rounded-[2.5rem] p-2.5 bg-zinc-900 border-2 border-zinc-700/70 shadow-2xl shadow-emerald-950/20 cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Camera notch cutout */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 z-20 border border-zinc-800" />

                {/* Inner screen container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
                  <Image
                    key={musicScreenshots[activeMusicTab].src}
                    src={musicScreenshots[activeMusicTab].src}
                    alt={musicScreenshots[activeMusicTab].title}
                    fill
                    className="object-cover"
                    sizes="300px"
                    priority
                    unoptimized
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-xs text-white font-medium backdrop-blur-[2px]">
                    <Maximize2 className="w-4 h-4" />
                    <span>Expand Screenshot</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="mt-3 text-xs text-zinc-400 text-center max-w-xs font-mono">
                {musicScreenshots[activeMusicTab].desc}
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PRODUCT 2: SHREYX TUBE
           ========================================================================= */}
        <div
          id="tube"
          className="rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/40 via-zinc-950 to-zinc-950 p-6 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Visual / Interactive Screenshot Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center order-2 lg:order-1">
              {/* Tab Selector */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 mb-4 text-xs font-mono text-zinc-400">
                <button
                  type="button"
                  onClick={() => setActiveTubeTab("player")}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeTubeTab === "player"
                      ? "bg-zinc-800 text-zinc-100 font-semibold"
                      : "hover:text-zinc-200"
                  }`}
                >
                  Watch Surface
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTubeTab("home")}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeTubeTab === "home"
                      ? "bg-zinc-800 text-zinc-100 font-semibold"
                      : "hover:text-zinc-200"
                  }`}
                >
                  Trending Feed
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTubeTab("feed")}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeTubeTab === "feed"
                      ? "bg-zinc-800 text-zinc-100 font-semibold"
                      : "hover:text-zinc-200"
                  }`}
                >
                  Category View
                </button>
              </div>

              {/* Phone Frame Mockup Container */}
              <div
                onClick={() => setSelectedImage(tubeScreenshots[activeTubeTab].src)}
                className="group relative w-full max-w-[280px] sm:max-w-[300px] aspect-[9/18.5] rounded-[2.5rem] p-2.5 bg-zinc-900 border-2 border-zinc-700/70 shadow-2xl shadow-sky-950/20 cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Camera notch cutout */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 z-20 border border-zinc-800" />

                {/* Inner screen container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
                  <Image
                    key={tubeScreenshots[activeTubeTab].src}
                    src={tubeScreenshots[activeTubeTab].src}
                    alt={tubeScreenshots[activeTubeTab].title}
                    fill
                    className="object-cover"
                    sizes="300px"
                    priority
                    unoptimized
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-xs text-white font-medium backdrop-blur-[2px]">
                    <Maximize2 className="w-4 h-4" />
                    <span>Expand Screenshot</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="mt-3 text-xs text-zinc-400 text-center max-w-xs font-mono">
                {tubeScreenshots[activeTubeTab].desc}
              </p>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-zinc-100 shadow-sm">
                  <Video className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 flex items-center gap-3">
                    ShreyX Tube
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-sky-950/70 text-sky-400 border border-sky-800/50">
                      Android Beta • Active Development
                    </span>
                    <span className="text-xs font-mono text-zinc-500">v1.0.0 Architecture</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                A lightweight, privacy-focused YouTube client built with Flutter and native AndroidX
                Media3 / ExoPlayer hardware decoding. Designed from the ground up for zero account tracking,
                zero ads, and direct adaptive stream multiplexing without restrictive web wrappers.
              </p>

              {/* Verified Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Native Media3 Hardware Decoding:</strong> Directly decodes video using ExoPlayer surfaces; never runs inside slow WebViews.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Adaptive 1080p, 1440p & 4K Merging:</strong> Real-time <code>MergingMediaSource</code> pairing video-only streams with Opus/AAC audio.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Account / Zero Tracking:</strong> Stream anonymously with zero Google login, no cookies, and no telemetry leaks.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Dynamic Ephemeral URL Recovery:</strong> Handles HTTP 403/410 expiration automatically and seamlessly resumes playback.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Hardware Gesture HUD:</strong> Smooth swipe controls for brightness & volume, plus double-tap seeking.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Local SQLite Database:</strong> Watch history, subscriptions, and bookmarks stay private on device via <code>sqflite</code>.
                  </span>
                </div>
              </div>

              {/* Architecture & Tech Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">Flutter</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">AndroidX Media3 1.4.1</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">Kotlin Coroutines</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">NewPipeExtractor</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">sqflite</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">AMOLED UI</span>
              </div>

              {/* Action Buttons: Android Download & GitHub */}
              <div className="pt-3 space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/ShreyashPatil123/shreyx-tube/releases/download/v0.1.0-preview/shreyx-tube-preview.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white transition-all shadow-sm active:scale-98"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Preview APK</span>
                  </a>

                  <a
                    href="https://github.com/ShreyashPatil123/shreyx-tube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all active:scale-98"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                </div>

                <p className="text-[11px] font-mono text-zinc-500">
                  Early testing build. Features may change. Target: Samsung Galaxy S24 & Android 8.0+.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PRODUCT 3: UPCOMING AI PROJECT
           ========================================================================= */}
        <div
          id="ai"
          className="rounded-3xl border border-zinc-800/60 bg-gradient-to-b from-zinc-900/20 to-zinc-950 p-6 sm:p-10 relative overflow-hidden"
        >
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                <Bot className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                    ShreyX AI Assistant
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-950/70 text-indigo-400 border border-indigo-800/50">
                    Upcoming • In Development
                  </span>
                </div>
                <p className="text-xs font-mono text-zinc-500 mt-0.5">
                  Local Intelligence & System Interaction Engine
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              An upcoming personal AI assistant focused on local intelligence, privacy, and deeper system interaction.
              Built to connect an Android mobile client directly to an offline-first desktop backend over your private local area network (LAN)—eliminating subscriptions, cloud logging, and data exposure.
            </p>

            {/* Verified Capabilities from Repository */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/70 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Local LLM Orchestration</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  Runs open-weight models (Gemma, Qwen, DeepSeek) through local Ollama servers without cloud APIs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/70 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Transparent Reasoning</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  Inspect the model's step-by-step thinking process in real-time before reading the final response.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/70 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                  <Wifi className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Private LAN Connection</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  Low-latency Wi-Fi sockets pipe inference directly from workstation GPU to phone with zero telemetry.
                </p>
              </div>
            </div>

            {/* Action / Repo Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
              <a
                href="https://github.com/ShreyashPatil123/ShreyX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Repository on GitHub</span>
              </a>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Early Development • Architecture & models active</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Screenshot Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-sm sm:max-w-md w-full max-h-[90vh] aspect-[9/19] rounded-2xl overflow-hidden border border-zinc-700 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-zinc-900/90 text-white text-xs font-mono border border-zinc-700 hover:bg-zinc-800 cursor-pointer"
            >
              Close [ESC]
            </button>
            <Image
              src={selectedImage}
              alt="High resolution device screenshot"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  );
}
