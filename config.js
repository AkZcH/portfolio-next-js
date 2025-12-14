import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase, HiShieldCheck, HiLockClosed } from "react-icons/hi";

export const config = {
    developer: {
        name: "Akshat",
        title: "Cryptography & AI Researcher",
        tagline: "Building quantum-resistant systems and secure protocols"
    },
    social: {
        github: "AkZcH",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "EchoTrap: TCP Honeypot",
            description: "A cryptographically hardened TCP honeypot designed to capture adversarial patterns while resisting timing-based fingerprinting. Features secure event logging and timing-obfuscation layers using Rust's async runtime.",
            image: "/projects/project-1.webp",
            technologies: ["Rust", "tokio", "tracing", "TCP", "Cryptography", "Security", "Docker"],
            github: "https://github.com/AkZcH/EchoTrap",
            demo: "#",
            metrics: [
                "Scale: 2M+ adversarial TCP events captured across 10k concurrent connections",
                "Constraint: Detection + response under 50ms to avoid fingerprinting",
                "Implemented structured logging and defensive error handling for partial failures",
                "→ Result: Reduced timing-based classifier accuracy by 38% without throughput loss"
            ]
        },
        {
            id: 2,
            title: "QuantumLock: Post-Quantum Encryption",
            description: "A post-quantum encryption engine designed to protect data using lattice-based and quantum-resistant cryptographic algorithms. Built with NIST-approved algorithms and optimized for modern hardware.",
            image: "/projects/project-2.webp",
            technologies: ["Rust", "ring", "pqcrypto", "serde", "Cryptography", "Security", "Docker"],
            github: "https://github.com/AkZcH/QuantumLock",
            demo: "#",
            metrics: [
                "Scale: Benchmarked keygen + decrypt under 1M+ operations on 8-core CPU",
                "Constraint: <50ms latency target under CPU-only, no AVX-512",
                "Decision: Used SIMD vectorization over naive parallelism after contention degraded throughput",
                "→ Result: Key generation latency reduced 27%, stable under multi-threaded load"
            ]
        },
        {
            id: 3,
            title: "HuffSpace: File Compression Tool",
            description: "A Rust-based tool that uses Huffman Coding to compress and decompress files efficiently with lossless recovery and real-time performance insights. Optimized for large-scale data processing pipelines.",
            image: "/projects/project-3.webp",
            technologies: ["Rust", "rayon", "clap", "serde", "Compression", "Systems", "Docker"],
            github: "https://github.com/AkZcH/HuffSpace",
            demo: "#",
            metrics: [
                "Scale: Compressed multi-GB files with parallel chunk processing",
                "Constraint: CPU-bound compression under limited memory",
                "Decision: Used Rayon-based parallelism instead of streaming to maximize throughput",
                "→ Result: Achieved 40–60% compression with multi-threaded speedup"
            ]
        },
        {
            id: 4,
            title: "LipRead: AI Lip Reading System",
            description: "An advanced AI system for lip reading using computer vision and deep learning. Features real-time video processing, multi-language support, and high accuracy word-level recognition.",
            image: "/projects/project-4.webp",
            technologies: ["Python", "PyTorch", "OpenCV", "TensorFlow", "Computer Vision", "AI/ML"],
            github: "https://github.com/AkZcH/LipRead",
            demo: "#",
            metrics: [
                "Scale: Real-time inference at ~30 FPS on consumer GPU",
                "Constraint: Real-time inference under limited GPU memory",
                "Decision: Optimized CNN-LSTM pipeline for frame-by-frame processing",
                "→ Result: Achieved ~96% word-level accuracy with real-time performance"
            ]
        },
        // {
        //     id: 5,
        //     title: "Chronos v2.0: Event Management",
        //     description: "A comprehensive event management platform with advanced registration systems, real-time analytics, and scalable architecture. Built for handling large-scale events and conferences.",
        //     image: "/projects/project-5.webp",
        //     technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "React", "Event Management"],
        //     github: "https://github.com/AkZcH/Chronos-v2.0",
        //     demo: "#",
        //     metrics: ["250+ registrations handled", "500+ project submissions"]
        // }
    ],
    skills: [
        {
            title: "Systems Programming",
            icon: <HiCode />,
            description: "Low-level & Performance",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Rust", level: "Expert", hot: true },
                { name: "C", level: "Advanced" },
                { name: "Go", level: "Advanced" },
                { name: "Python", level: "Advanced" },
                { name: "JavaScript", level: "Intermediate" }
            ]
        },
        {
            title: "Cryptography & Security",
            icon: <HiShieldCheck />,
            description: "Post-Quantum & Protocols",
            bgClass: "bg-red-500/10",
            iconClass: "text-red-500",
            skills: [
                { name: "Post-Quantum Crypto", level: "Expert", hot: true },
                { name: "Lattice Cryptography", level: "Advanced", hot: true },
                { name: "BLAKE3 & SHA-256", level: "Advanced" },
                { name: "Zero-Knowledge Proofs", level: "Advanced" },
                { name: "Argon2 & Password Security", level: "Advanced" }
            ]
        },
        {
            title: "AI/ML & Frontend",
            icon: <HiDatabase />,
            description: "Machine Learning & Web",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "PyTorch", level: "Advanced" },
                { name: "TensorFlow", level: "Advanced" },
                { name: "React", level: "Intermediate" },
                { name: "Next.js", level: "Intermediate" },
                { name: "OpenCV", level: "Advanced" }
            ]
        },
        {
            title: "Infrastructure & Tools",
            icon: <HiCube />,
            description: "DevOps & Development",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Docker", level: "Advanced", hot: true },
                { name: "Kubernetes", level: "Intermediate" },
                { name: "AWS", level: "Intermediate" },
                { name: "Linux", level: "Advanced" },
                { name: "Git", level: "Expert" }
            ]
        }
    ],
    experiences: [
        {
            position: "AI Engineer",
            company: "GeeksforGeeks KIIT",
            period: "Feb 2025 – Present",
            location: "KIIT University",
            description: "Contributing to applied AI research in computer vision and NLP. Mentoring junior researchers and delivering seminars to enhance lab collaboration and technical literacy.",
            responsibilities: [
                "Developed CNN-LSTM model for lip reading achieving ~96% word-level accuracy",
                "Engineered image-to-LaTeX translator using CNN + Seq2Seq Attention with 92% symbol accuracy",
                "Applied TensorRT for GPU inference acceleration, reducing latency by ~35%",
                "Deployed real-time demos via Flask backend with GPU acceleration for Jetson Nano"
            ],
            technologies: ["Python", "PyTorch", "OpenCV", "Flask", "Jetson Nano", "TensorRT"]
        },
        {
            position: "AI Engineer",
            company: "IoT Lab, KIIT",
            period: "Jan 2025 – Present",
            location: "KIIT University",
            description: "Contributing to applied AI research in computer vision and NLP. Mentoring junior researchers and delivering seminars to enhance lab collaboration and technical literacy.",
            responsibilities: [
                "Built BERT-based multi-label news classifier for 10+ categories using 100k+ articles",
                "Enhanced precision by ~15% via active learning and data augmentation",
                "Integrated LIME explainability and built Flask + React dashboard for live analytics",
                "Optimized inference for low-compute edge devices"
            ],
            technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Flask", "Jetson Nano", "BERT"]
        },
        {
            position: "Web Development Lead",
            company: "AISOC",
            period: "Sep 2024 – Present",
            location: "KIIT University",
            description: "Overhauled the organization's website to enhance performance, accessibility, and visual appeal. Organized events, conducted hackathons, and served as a panel judge while leading engineering across the community.",
            responsibilities: [
                "Led full redesign using Next.js + Tailwind, improving load times by ~55%",
                "Designed and deployed full-stack hackathon platform handling 250+ registrations",
                "Added automated evaluation APIs + async queueing reducing processing time by ~40%",
                "Conducted workshops on web dev, Git workflows, and CI/CD"
            ],
            technologies: ["Next.js", "Tailwind CSS", "Sanity.io", "Vercel", "Node.js", "MongoDB"]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@AkZcH",
            link: `https://github.com/AkZcH`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "akshat25chauhan.2005@gmail.com",
            link: "mailto:akshat25chauhan.2005@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Remote",
            link: null
        }
    ],
    
    // Research focus areas from data.json
    researchAreas: [
        "Post-quantum encryption (Lattice, LWE, PQCrypto)",
        "Hash function benchmarking (BLAKE3, SHA-256, SHA-3)",
        "Secure network instrumentation & protocol hardening",
        "Zero-knowledge proof systems and optimization",
        "Memory-hard functions (Argon2) and timing analysis",
        "Distributed & hybrid cryptographic key exchange"
    ],
    
    // Current exploration areas
    currentlyExploring: [
        "Fully Homomorphic Encryption (FHE) PoC",
        "GPU-accelerated BLAKE3 hashing",
        "Optimizing zk-SNARK proving systems",
        "PQ signature schemes (Dilithium, Falcon)"
    ]
}