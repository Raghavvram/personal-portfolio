export const milestones = [
  // 2019
  {
    year: "2019",
    title: "Discovering Cybersecurity and Exploit Development",
    description:
      "Discovered cybersecurity while completing my 10th grade. At the beginning of the pandemic, with the worldwide lockdown, I had all the time in the world to explore. I started watching tutorials on the Metasploit Framework and creating Windows and Android exploits.",
    tags: ["Cybersecurity", "Metasploit", "Exploit Development", "Windows", "Android"],
    icon: "◈",
    status: "COMPLETED",
  },
  {
    year: "2019",
    title: "Exploring Kali Linux and Penetration Testing Tools",
    description:
      "Then found my way to Kali Linux, tried installing it on my desktop, and corrupted my hard drive. Discovered VirtualBox and started my Kali Linux journey. Some of the tools I used and explored were Aircrack-ng, Nmap, Burp Suite, Nessus, SQLmap, SET (Social Engineering Toolkit), Wireshark, Hydra, CeWL, WPA password cracking, and Evil Twin attacks.",
    tags: ["Kali Linux", "VirtualBox", "Penetration Testing", "Nmap", "Burp Suite", "Wireshark"],
    icon: "◎",
    status: "COMPLETED",
  },
  {
    year: "2019",
    title: "Linux Distributions and Virtual Networking",
    description:
      "Experiencing the power of Linux and the effectiveness of using it on VMs, I started exploring Linux distributions. I started with Ubuntu and found my way to Arch Linux. Leveraging VirtualBox, I explored multiple distributions, understood networking basics, and learned to create virtual networks between them.",
    tags: ["Linux", "Ubuntu", "Arch Linux", "VirtualBox", "Networking"],
    icon: "▣",
    status: "COMPLETED",
  },
  {
    year: "2019",
    title: "Building Custom Virtual Hacking Labs",
    description:
      "Then discovered VMware Workstation Player and created custom hacking labs with Windows 7, 8, 8.1, and 10, Kali Linux, and Ubuntu Server. Configured Active Directory, LDAP, SMB shares, etc.",
    tags: ["VMware Workstation Player", "Windows", "Kali Linux", "Ubuntu Server", "Active Directory", "LDAP", "SMB"],
    icon: "▤",
    status: "COMPLETED",
  },
  {
    year: "2019",
    title: "Exploring Network Security and Linux Servers",
    description:
      "Slowly started exploring other tools such as OPNsense, pfSense, OpenMediaVault, TrueNAS, and OpenBSD. Then started exploring servers running Ubuntu, RHEL, and CentOS. Moved into RHEL-based distributions such as Fedora, Rocky Linux, CentOS Stream, AlmaLinux, and Oracle Linux, and understood the concepts of upstream and downstream Linux.",
    tags: ["OPNsense", "pfSense", "TrueNAS", "OpenBSD", "Linux Servers", "RHEL", "Rocky Linux"],
    icon: "◉",
    status: "COMPLETED",
  },
  {
    year: "2019",
    title: "Exploring Creative Tools and Game Development",
    description:
      "In parallel, discovered and explored tools for video editing, visual effects, and game development. Some of the tools I explored were HitFilm Express, Adobe Suite (Photoshop, Premiere Pro, After Effects, and Media Encoder), DaVinci Resolve, ZBrush, Maya, Blender, Unity, and Unreal Engine.",
    tags: ["Video Editing", "Visual Effects", "3D Modeling", "Blender", "Unity", "Unreal Engine"],
    icon: "◇",
    status: "COMPLETED",
  },

  // 2020
  {
    year: "2020",
    title: "Virtualization and Hypervisor Technologies",
    description:
      "Graduated from VMs to dual-boot setups and Type 1 hypervisors (VMware ESXi and Proxmox VE), and explored other technologies such as Hyper-V, QEMU, KVM, LXC/LXD, and WSL.",
    tags: ["Proxmox VE", "VMware ESXi", "Hyper-V", "QEMU", "KVM", "LXC/LXD", "WSL"],
    icon: "▣",
    status: "COMPLETED",
  },
  {
    year: "2020",
    title: "Self-Hosting, Containers, and Infrastructure Automation",
    description:
      "After getting comfortable with servers, I got into self-hosting using Docker. From there, I learned about Docker, Docker Compose, Podman, OCI, and containerd. Started learning advanced concepts like Docker Swarm and Kubernetes. Got into IaC (Terraform) for managing infrastructure and Ansible for automation, with Vagrant for maintaining VMs.",
    tags: ["Docker", "Docker Compose", "Podman", "Kubernetes", "Terraform", "Ansible", "Vagrant"],
    icon: "◈",
    status: "COMPLETED",
  },
  {
    year: "2020",
    title: "Advanced Networking and Virtual Network Architectures",
    description:
      "All the while, I was trying different network architectures within my homelab and virtual networks. To explore this further, I explored tools such as Cisco Packet Tracer, GNS3, and EVE-NG. By leveraging these tools, I delved into advanced networking concepts.",
    tags: ["Networking", "Homelab", "Cisco Packet Tracer", "GNS3", "EVE-NG", "Virtual Networks"],
    icon: "◎",
    status: "COMPLETED",
  },
  {
    year: "2020",
    title: "System Administration and Homelab Management",
    description:
      "Spent the entire year managing school and exploring different technologies, switching between network administration, server administration, Linux administration, Windows administration, and system administration. Strengthened my knowledge of Docker, containers, self-hosting, data privacy, and distro hopping.",
    tags: ["System Administration", "Linux", "Windows", "Docker", "Self-Hosting", "Data Privacy"],
    icon: "▤",
    status: "COMPLETED",
  },

  // 2021
  {
    year: "2021",
    title: "Deep Dive into Linux Internals",
    description:
      "Took a break from the above and dug deep into Linux. Understood how the kernel is separate from userspace, what exactly an operating system does, and how different services work. Explored init systems (systemd, OpenRC), bootloaders (GRUB), display managers (SDDM, LightDM, ly), desktop environments (GNOME, KDE, XFCE, MATE), and finally, window managers such as Xmonad, Qtile, Openbox, bspwm, dwm, i3wm, and Sway, which led me to investigate how X11 works and what exactly Hyprland is.",
    tags: ["Linux Internals", "Kernel", "systemd", "GRUB", "GNOME", "KDE", "X11", "Hyprland"],
    icon: "▣",
    status: "COMPLETED",
  },
  {
    year: "2021",
    title: "Shell Scripting and Developer Productivity Tools",
    description:
      "Learned shell commands, Bash scripting, and different Bash tools. Discovered powerful tools like Neovim, Emacs, tmux, and other productivity tools. Then had to take a break to focus on competitive exams and my 12th-grade board exams.",
    tags: ["Bash", "Shell Scripting", "Neovim", "Emacs", "tmux", "Linux"],
    icon: "⌘",
    status: "COMPLETED",
  },

  // 2022
  {
    year: "2022",
    title: "Advanced Homelab Infrastructure and Self-Hosting",
    description:
      "With the time I had, my home setup evolved into something sophisticated. I had a DNS filtering server setup with a separate DHCP server wired to my pfSense firewall, and configured a separate DMZ in Proxmox on a different subnet from the other devices on my home LAN. I had network-level ad blocking and service filtering. With this, I could use domain names for all my self-hosted applications. I even had self-signed certificates for each application from Let's Encrypt using an Nginx reverse proxy. I also had Prometheus, Node Exporter, and Grafana for monitoring and dashboard visualization.",
    tags: ["Proxmox VE", "pfSense", "DNS", "DHCP", "DMZ", "Nginx", "Let's Encrypt", "Prometheus", "Grafana"],
    icon: "◉",
    status: "COMPLETED",
  },
  {
    year: "2022",
    title: "Beginning My B.Tech Journey in Cybersecurity",
    description:
      "Then started my four-year B.Tech journey in Computer Science and Engineering, with a specialization in Cyber Security and Digital Forensics.",
    tags: ["Computer Science", "Cybersecurity", "Digital Forensics", "B.Tech"],
    icon: "◇",
    status: "COMPLETED",
  },
  // 2024
  {
    year: "2024",
    title: "Proxmox VE Virtualization Infrastructure",
    description:
      "Designed, deployed, and managed a Proxmox VE virtualization environment, provisioning Linux and Windows VMs and configuring networking, storage, backups, and high availability.",
    tags: ["Proxmox VE", "Linux", "Windows", "Virtualization", "Infrastructure"],
    icon: "▣",
    status: "COMPLETED",
  },
  {
    year: "2024",
    title: "Unveiling Climate Change Dynamics",
    description:
      "Developed a deep-learning anomaly detection and forecasting model for historical Earth surface temperatures, reporting 95% accuracy and 70% faster response times through Flask deployment. Built an end-to-end data pipeline improving forecasting and behavioral analytics accuracy by 40% over classical methods.",
    tags: ["Python", "Deep Learning", "Flask", "Time Series", "Data Science"],
    icon: "◎",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/Unveiling-Climate-Change-Dynamics-through-Earth-Surface-Temperature-Analysis-",
  },
  // 2025
  {
    year: "2025",
    title: "Threat Intelligence Aggregator",
    description:
      "Built an automated security intelligence portal aggregating global RSS vulnerability feeds and generating NLP-powered summaries to accelerate threat analysis and response.",
    tags: ["Python", "NLP", "Threat Intelligence", "Cybersecurity"],
    icon: "◈",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/threat-intel-aggregator",
  },
  {
    year: "2025",
    title: "GitHub Readme MCP Server",
    description:
      "Built a custom Model Context Protocol server in TypeScript that enables AI assistants to dynamically retrieve and parse external GitHub repository documentation on demand.",
    tags: ["TypeScript", "MCP", "AI Tooling", "GitHub", "Automation"],
    icon: "</>",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/github-readme-mcp",
  },
  {
    year: "2025",
    title: "RIGA — Knowledge Graph Search Engine",
    description:
      "Built an advanced retrieval-augmented generation search engine leveraging PathRAG and relational knowledge graphs to improve contextual retrieval and reduce LLM hallucinations.",
    tags: ["RAG", "Knowledge Graphs", "LLMs", "PathRAG"],
    icon: "◈",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/RIGA",
  },
  {
    year: "2025",
    title: "Offline Peer-to-Peer Payment System",
    description:
      "Architected a secure Bluetooth-based offline P2P payment platform using a device-level distributed ledger, enabling real-time state reconciliation without internet connectivity.",
    tags: ["Bluetooth", "Distributed Systems", "Cryptography", "FinTech"],
    icon: "⬡",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/Offline-Peer-to-Peer-Payment-System",
  },
  {
    year: "2025",
    title: "Li-Fi Communication System",
    description:
      "Developed a short-range wireless communication system using Arduino and visible-light technology to transmit data through rapid LED light modulation.",
    tags: ["Arduino", "Embedded Systems", "Li-Fi", "IoT"],
    icon: "⚡",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/LiFi-project",
  },
  {
    year: "2025",
    title: "Dockerized Email Infrastructure on Azure",
    description:
      "Deployed a Docker-based mail server on Microsoft Azure, configuring SMTP, IMAP, TLS, DNS records, and containerized services for reliable email communication.",
    tags: ["Azure", "Docker", "SMTP", "IMAP", "DNS", "Linux"],
    icon: "✉",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/azure-docker-mail-server",
  },
  {
    year: "2025",
    title: "OpenSK Security-Key Firmware",
    description:
      "Deployed and extended Google's open-source OpenSK firmware on an nRF52840 hardware dongle, implementing FIDO2/WebAuthn workflows with ECDSA P-256 and Ed25519 signing, HMAC-SHA256, hardware-backed credential generation, secure key storage, attestation certificate handling, and fingerprint sensor integration.",
    tags: ["FIDO2", "WebAuthn", "Cryptography", "Embedded Security"],
    icon: "◈",
    status: "COMPLETED",
  },
  {
    year: "2025",
    title: "Firewall AAA Integration",
    description:
      "Designed and deployed enterprise 802.1X EAP-PEAP and MS-CHAPv2 authentication integrating FreeRADIUS, Windows Active Directory, Samba ntlm_auth, and OPNsense for secure, policy-based network access.",
    tags: ["FreeRADIUS", "Windows AD", "802.1X", "AAA", "Network Security"],
    icon: "◈",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/Integeration-of-FreeRADIUS-Authentication-Server-with-Pal-alto-NGFW-and-Windows-AD-for-AAA",
  },
  {
    year: "2025",
    title: "Vulnerability Patch Management System",
    description:
      "Enhanced a containerized vulnerability management platform integrating Nmap scanning, ML-driven patch prioritization, remediation tracking, golden image and AMI updates, Terraform, Ansible, PowerShell, and ELK monitoring. Reported 25% fewer false positives, 35% better patch accuracy, 50% faster hardening, and 60% faster alert triage.",
    tags: ["Python", "Nmap", "Terraform", "Ansible", "ELK", "DevSecOps"],
    icon: "⬡",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/vulnenerability-patch-management-system",
  },
  {
    year: "2025",
    title: "TRAC — Real-time Analytics Conduit",
    description:
      "Built a high-throughput TypeScript data-streaming conduit for telemetry ingestion and real-time metrics processing with sub-second latency.",
    tags: ["TypeScript", "Streaming", "Telemetry", "Real-time Systems"],
    icon: "⚡",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/TRAC",
  },
  {
    year: "2025",
    title: "AutoML Classification Pipeline",
    description:
      "Engineered an automated machine learning pipeline for data preprocessing, feature engineering, and hyperparameter tuning across multiclass tabular datasets.",
    tags: ["Python", "AutoML", "Machine Learning", "Data Engineering"],
    icon: "⬡",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/auto-ml-pipeline-for-classification",
  },
  {
    year: "2025",
    title: "Systematized Intrusion Detection and Prevention System",
    description:
      "Built an end-to-end ML-based IDPS pipeline using the CIC IoT 2023 dataset, automated anomaly detection and model selection, and deployed a Dockerized AWS service for TCP/IP traffic analysis, threat investigation, and automatic IP blacklisting, achieving 99.5%+ detection accuracy.",
    tags: ["Python", "TensorFlow", "scikit-learn", "Docker", "AWS", "Cybersecurity"],
    icon: "▷",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/IDPS-CICIOT2023",
  },
  // 2026
  {
    year: "2026",
    title: "Flow Studio",
    description:
      "Developed a high-performance web-based diagramming editor for interactive workflow creation, graph visualization, and node rendering at 60 FPS.",
    tags: ["TypeScript", "React", "Graph Visualization", "Performance"],
    icon: "◎",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/flow-studio",
  },
  {
    year: "2026",
    title: "SAGE — Synthetic Agent Generation Engine",
    description:
      "Developed a multi-agent framework that dynamically orchestrates synthetic AI agents to execute complex, multi-step workflows with zero manual intervention.",
    tags: ["AI Agents", "Multi-Agent Systems", "Orchestration", "Automation"],
    icon: "⬡",
    status: "COMPLETED",
    link: "https://github.com/Raghavvram/SAGE",
  },
  {
    year: "2026",
    title: "OmniDAST — Agentic Security Testing",
    description:
      "Architected a full-stack Dynamic Application Security Testing sandbox orchestrating OWASP ZAP, Nuclei, and Playwright with real-time noVNC browser observation and LangGraph-powered agentic exploration.",
    tags: ["DAST", "OWASP ZAP", "Nuclei", "Playwright", "LangGraph", "AI Agents"],
    icon: "⬢",
    status: "CURRENT",
    link: "https://github.com/Raghavvram/dast-agent-sandbox-env",
  },
];
