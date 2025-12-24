import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase, HiShieldCheck, HiLockClosed } from "react-icons/hi";
import {
    SiRust,
    SiC,
    SiGo,
    SiPython,
    SiJavascript,
    SiDocker,
    SiKubernetes,
    SiAmazon,
    SiLinux,
    SiGit,
    SiReact,
    SiNextdotjs,
    SiPytorch,
    SiTensorflow,
    SiOpencv
} from "react-icons/si";

export const config = {
    developer: {
        name: "Akshat",
        title: "Backend Systems Engineer",
        tagline: "Building scalable, fault-tolerant backend systems"
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
            description: "Designed a secure monitoring system where authentication, state management, and infrastructure choices directly impacted reliability and attack surface. Modeled system behavior assuming adversarial environments and timing-based attacks.",
            image: "/projects/echotrap.jpg",
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
            description: "Built cryptographic infrastructure balancing security guarantees with operational constraints. Designed for environments where performance, memory usage, and algorithm choice directly impact system viability.",
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
            description: "Engineered compression system for high-throughput environments where memory constraints, processing latency, and data integrity requirements shaped core architectural decisions.",
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
    title: "EchoTrap: Cryptographic Hardening Study",
    description: "Security-focused system study analyzing how timing behavior, logging integrity, and async runtime design affect honeypot survivability under adversarial observation.",
    image: "/projects/project-4.webp",
    technologies: ["Rust", "TCP", "Async Runtime", "Security", "Honeypots"],
    github: "https://github.com/AkZcH/EchoTrap",
    demo: "#",
    metrics: [
        "Scale: 2M+ adversarial TCP events across 10k concurrent connections",
        "Constraint: Detection + response under 50ms to avoid fingerprinting",
        "Decision: Implemented timing obfuscation at async runtime layer instead of network layer",
        "→ Result: Reduced timing-based classifier accuracy by 38% without throughput loss"
    ]
},
{
    id: 5,
    title: "BLAKE3 vs SHA-256 Performance Analysis",
    description: "Comparative systems analysis evaluating hashing algorithm behavior under contention, parallel workloads, and heterogeneous infrastructure constraints.",
    image: "/projects/project-5.webp",
    technologies: ["Rust", "Cryptography", "Hashing", "Benchmarks", "Systems"],
    github: "#",
    demo: "#",
    metrics: [
        "Scale: Benchmarked hashing throughput on 8-core CPU across 10GB datasets",
        "Constraint: Thread contention under shared-memory workloads",
        "Decision: Selected BLAKE3 for tree-hash parallelism after SHA-256 degraded under contention",
        "→ Result: BLAKE3 sustained ~1200 MB/s while SHA-256 degraded ~40%"
    ]
},
{
    id: 6,
    title: "Zero-Knowledge Proof System Implementation",
    description: "Designed and evaluated a practical ZKP system focusing on constraint optimization, prover latency, and verification efficiency under real-world limits.",
    image: "/projects/project-6.webp",
    technologies: ["Rust", "Cryptography", "ZK", "SNARKs", "Systems"],
    github: "#",
    demo: "#",
    metrics: [
        "Scale: Generated and verified proofs across variable constraint sizes",
        "Constraint: Prover time dominated by constraint count, not cryptographic primitives",
        "Decision: Reduced constraint system size prior to parallelizing prover execution",
        "→ Result: Proving time reduced 18%, batching improved throughput 32%"
    ]
}

        // {
        //     id: 4,
        //     title: "LipRead: AI Lip Reading System",
        //     description: "Built real-time inference system where model accuracy, processing latency, and resource constraints required careful tradeoffs between performance and operational complexity.",
        //     image: "/projects/project-4.webp",
        //     technologies: ["Python", "PyTorch", "OpenCV", "TensorFlow", "Computer Vision", "AI/ML"],
        //     github: "https://github.com/AkZcH/LipRead",
        //     demo: "#",
        //     metrics: [
        //         "Scale: Real-time inference at ~30 FPS on consumer GPU",
        //         "Constraint: Real-time inference under limited GPU memory",
        //         "Decision: Optimized CNN-LSTM pipeline for frame-by-frame processing",
        //         "→ Result: Achieved ~96% word-level accuracy with real-time performance"
        //     ]
        // },
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
            title: "Systems & Low-Level Programming",
            icon: <HiCode />,
            description: "Performance, memory, concurrency",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Go", icon: <SiGo />, note: "Low-level systems" },
                { name: "Rust", icon: <SiRust /> },
                { name: "C", icon: <SiC /> },
                { name: "Python", icon: <SiPython /> },
                { name: "JavaScript", icon: <SiJavascript /> }
            ]
        },
        {
            title: "Cryptography & Security",
            icon: <HiShieldCheck />,
            description: "Protocols & applied crypto",
            bgClass: "bg-red-500/10",
            iconClass: "text-red-500",
            skills: [
                { name: "Post-Quantum Cryptography" },
                { name: "Lattice Cryptography" },
                { name: "Zero-Knowledge Proofs" },
                { name: "BLAKE3 / SHA-256" },
                { name: "Argon2 & Password Security" }
            ]
        },
        {
            title: "AI / ML (Applied)",
            icon: <HiDatabase />,
            description: "Engineering-focused ML",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "PyTorch", icon: <SiPytorch /> },
                { name: "TensorFlow", icon: <SiTensorflow /> },
                { name: "OpenCV", icon: <SiOpencv /> },
                { name: "React", icon: <SiReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> }
            ]
        },
        {
            title: "Cloud, Infra & Tooling",
            icon: <HiCube />,
            description: "Deployment & operations",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Docker", icon: <SiDocker /> },
                { name: "Kubernetes", icon: <SiKubernetes /> },
                { name: "AWS", icon: <SiAmazon /> },
                { name: "Linux", icon: <SiLinux /> },
                { name: "Git", icon: <SiGit /> }
            ]
        }
    ],
experiences: [
    {
        position: "AI Engineer",
        company: "GeeksforGeeks KIIT",
        period: "Feb 2025 – Present",
        location: "KIIT University",
        description: "Operating inside applied ML systems where model accuracy, inference latency, and deployment constraints directly affected usability and system reliability.",
        responsibilities: [
            "Designed and iterated on a CNN–LSTM pipeline for lip-reading under real-time constraints, balancing accuracy against inference latency and GPU memory limits.",
            "Built an image-to-LaTeX translation system where sequence length, attention complexity, and decoding strategy impacted both correctness and runtime behavior.",
            "Optimized GPU inference paths using TensorRT, explicitly trading model flexibility for a ~35% latency reduction in production-style demos.",
            "Integrated ML pipelines into Flask-based serving layers, accounting for partial failures, cold starts, and constrained edge hardware (Jetson Nano)."
        ],
        technologies: ["Python", "PyTorch", "OpenCV", "Flask", "Jetson Nano", "TensorRT"]
    },
    {
        position: "AI Engineer",
        company: "IoT Lab, KIIT",
        period: "Jan 2025 – Present",
        location: "KIIT University",
        description: "Worked on applied NLP systems embedded in larger data and serving pipelines, where model behavior under noisy inputs and low-compute environments mattered more than offline metrics.",
        responsibilities: [
            "Developed a BERT-based multi-label classification system over 100k+ news articles, focusing on precision–recall tradeoffs across overlapping categories.",
            "Improved real-world model robustness via active learning and targeted data augmentation, increasing precision by ~15% without increasing model size.",
            "Integrated LIME-based explainability to expose model decisions, enabling safer downstream consumption rather than treating the model as a black box.",
            "Optimized inference paths for edge and low-compute deployments, evaluating tradeoffs between batch size, latency, and throughput."
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "Flask", "BERT", "LIME"]
    },
    {
        position: "Web Development Lead",
        company: "AISOC",
        period: "Sep 2024 – Present",
        location: "KIIT University",
        description: "Led and operated a production-facing web platform where frontend decisions, backend APIs, and infrastructure constraints directly impacted reliability under event-scale load.",
        responsibilities: [
            "Architected and led a full Next.js + Tailwind redesign with explicit focus on performance budgets, reducing load times by ~55%.",
            "Designed and deployed a full-stack hackathon platform handling 250+ registrations, where data consistency and failure recovery mattered under peak traffic.",
            "Implemented asynchronous evaluation workflows and queue-based processing to decouple user actions from long-running jobs, reducing processing time by ~40%.",
            "Conducted workshops on Git workflows, CI/CD, and deployment practices, emphasizing production hygiene over local-only development."
        ],
        technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Vercel", "CI/CD"]
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