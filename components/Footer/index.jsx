"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { config } from "@/config";
import {
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaLinkedin,
  FaRedditAlien,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer className="relative border-t border-secondary/20" style={{ backgroundColor: '#0a0a0a' }}>
      {/* ===================== */}
      {/* MOVING CARDS SECTION */}
      {/* ===================== */}
      {isHomePage && (
        <section className="py-12 space-y-10" style={{ backgroundColor: '#0a0a0a' }}>
          {/* Row 1 — Socials */}
          <div className="relative w-full overflow-hidden">
            <InfiniteMovingCards
              items={socialCards}
              direction="right"
              speed="slow"
            />
          </div>

          {/* Row 2 — Community */}
          <div className="relative w-full overflow-hidden">
            <InfiniteMovingCards
              items={communityCards}
              direction="left"
              speed="slow"
            />
          </div>
        </section>
      )}

      {/* ===================== */}
      {/* COPYRIGHT */}
      {/* ===================== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-4 sm:py-6 flex items-center justify-center"
      >
        <div className="text-center px-4 w-full max-w-4xl mx-auto">
          <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-2 leading-tight">
            <span>© {new Date().getFullYear()} {config.developer.name}</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved</span>
            <span className="hidden sm:inline">•</span>
            <span>Made with {config.developer.name}</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;


const socialCards = [
  // {
  //   title: "Codeforces",
  //   headline: "Competitive Programming Focus",
  //   body: "Algorithm-heavy problem solving with an emphasis on speed, correctness, and edge cases.",
  //   cta: "View contest history and ratings",
  //   icon: "/icons/codeforces.png",
  //   link: "https://codeforces.com/profile/AkZcH",
  //   ariaLabel: "View Codeforces profile",
  //   handle: "AkZcH",
  // },
  {
    title: "GitHub",
    headline: "Real Projects, Real Code",
    body: "Repositories showcasing backend systems and tooling.",
    cta: "Explore repositories",
    icon: "/icons/github-mark-white.png",
    link: "https://github.com/AkZcH",
    ariaLabel: "View GitHub profile",
    handle: "AkZcH",
  },
  {
    title: "Instagram",
    headline: "Life Beyond Code",
    body: "Occasional snapshots, moments, and personal side — no tech, no noise.",
    cta: "Follow for glimpses",
    icon: "/icons/instalogo-nobg.png",
    link: "https://instagram.com/one._autumnleaf",
    ariaLabel: "View Instagram profile",
    handle: "one._autumnleaf",
  },
  {
    title: "LeetCode",
    headline: "Interview-Grade DSA Practice",
    body: "Problem-solving focused on patterns, optimization, and interview-style constraints.",
    // cta: "See problem history",
    icon: "/icons/leetcode.png",
    link: "https://leetcode.com/u/AkZcH",
    ariaLabel: "View LeetCode profile",
    handle: "AkZcH",
  },
  {
    title: "LinkedIn",
    headline: "Professional Profile",
    body: "Experience, skills, and career trajectory — internships, roles, and technical interests.",
    cta: "Connect professionally",
    icon: "/icons/linkedin.webp",
    link: "https://linkedin.com/in/akshat-chauhan-ai",
    ariaLabel: "View LinkedIn profile",
    handle: "akshat-chauhan-ai",
  },
  {
    title: "Spotify",
    headline: "Soundtrack While Building",
    body: "Playlists I code, think, and unwind to; nothing algorithmic here.",
    cta: "Listen along",
    icon: "/icons/spotify.webp",
    link: "https://open.spotify.com/user/akzcH",
    ariaLabel: "View Spotify profile",
    handle: "akzcH",
  },
];

const communityCards = [
  {
    title: "Hugging Face",
    headline: "ML & NLP Experiments",
    body: "Experiments on models exploring practical machine learning workflows.",
    cta: "Browse models and spaces",
    icon: "/icons/hf-logo.svg",
    link: "https://huggingface.co/AkZcH",
    ariaLabel: "View Hugging Face profile",
    handle: "AkZcH",
  },
  {
    title: "X",
    headline: "Thinking in Public",
    body: "Thoughts on tech news.",
    cta: "Follow the feed",
    icon: "/icons/x.png",
    link: "https://x.com/AkZcH",
    ariaLabel: "View X profile",
    handle: "@akshatcore",
  },
  {
    title: "Medium",
    headline: "Technical Writing & Thinking",
    body: "Stories of concepts and engineering insights written honestly.",
    cta: "Read articles",
    icon: "/icons/medium.png",
    link: "https://medium.com/@akzcH",
    ariaLabel: "View Medium profile",
    handle: "@akzcH",
  },
  {
    title: "Reddit",
    headline: "Technical Discussions",
    body: "Join deep technical discussions and community threads.",
    cta: "Explore threads",
    icon: <FaRedditAlien className="text-[#FF4500]" />,
    link: "https://reddit.com/",
    ariaLabel: "View Reddit profile",
    handle: "Reddit",
  },
];
