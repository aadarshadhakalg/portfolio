import React from 'react';
import Section from '../components/Section';
import AnimationWrapper from '../components/AnimationWrapper';

const ProjectsPage = () => {
    const projects = [
        {
            title: "Dart Playground",
            description: "Dart code editor and compiler for mobile phones. Developed using Flutter and integrated with custom highlighters.",
            tech: ["Flutter", "Dart", "Codemagic"],
            link: "#"
        },
        {
            title: "Himalayan Roadies Audition App",
            description: "The official audition app for the popular reality TV show in Nepal. Handled video uploads and secure judge voting.",
            tech: ["Flutter", "Firebase", "Node.js"],
            link: "#"
        },
        {
            title: "The Voice of Nepal Audition App",
            description: "Real-time audition platform for the international singing franchise's Nepal chapter.",
            tech: ["Flutter", "REST APIs", "AWS"],
            link: "#"
        },
        {
            title: "Code Editor Flutter Plugin",
            description: "Open-source plugin to add code editing capabilities with syntax highlighting to any Flutter app.",
            tech: ["Dart", "Open Source"],
            link: "https://github.com/aadarshadhakalg"
        },
        {
            title: "EatWell Toolkit",
            description: "Comprehensive calorie tracker and nutrition management application.",
            tech: ["Flutter", "SQLite"],
            link: "#"
        },
        {
            title: "Huffman Encoding Visualizer",
            description: "An educational tool to visualize the Huffman coding algorithm in real-time.",
            tech: ["Flutter", "Algorithms"],
            link: "#"
        },
        {
            title: "CMakeNew",
            description: "A developer CLI tool for scaffolding new CMake projects with best-practice structures.",
            tech: ["C++", "CLI"],
            link: "#"
        },
        {
            title: "Scout",
            description: "Open-source time-tracking and productivity application for focused work.",
            tech: ["Flutter", "Desktop"],
            link: "#"
        },
        {
            title: "Flutter Screenshot X",
            description: "A desktop-specific plugin to capture and manipulate screenshots in multi-window environments.",
            tech: ["Flutter", "C++", "Platform Channels"],
            link: "#"
        },
        {
            title: "E-bidhya",
            description: "Online learning management system mobile app serving thousands of students.",
            tech: ["Flutter", "Moodle"],
            link: "#"
        },
        {
            title: "Nepal's Next Top Model App",
            description: "Full-stack mobile application for the fashion reality series auditions and voting.",
            tech: ["Flutter", "PHP", "MySQL"],
            link: "#"
        }
    ];

    const skills = [
        { category: "Infrastructure & Virtualization", items: "Proxmox, KVM, QEMU, Openstack, Ceph, Dell PowerEdge, Ruijie Switches" },
        { category: "Cloud & Containers", items: "Kubernetes (RKE2), Docker, Terraform, Ansible" },
        { category: "Observability", items: "Zabbix, Elasticsearch, Kibana, Grafana" },
        { category: "Mobile Development", items: "Dart, Flutter, Android, iOS, CI/CD (Codemagic)" },
        { category: "Web Development", items: "PHP, Python (Django), WordPress, HTML, CSS, JavaScript" },
        { category: "Databases", items: "MongoDB, Firebase, MySQL, PostgreSQL, SQLite" }
    ];

    return (
        <>
            <Section title="Own Projects" id="projects">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }} className="projects-grid">
                    {projects.map((proj, idx) => (
                        <AnimationWrapper key={idx} delay={idx * 0.1} y={30}>
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>
                                    <a href={proj.link}>{proj.title}</a>
                                </h3>
                                <p className="secondary-text" style={{ fontSize: '1.05rem' }}>{proj.description}</p>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </Section>

            <Section title="Technical Skillset" id="skills" bgVariant>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '3rem' }} className="skills-grid">
                    {skills.map((skill, idx) => (
                        <AnimationWrapper key={idx} delay={idx * 0.1}>
                            <div>
                                <h4 className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.8rem', letterSpacing: '0.1rem' }}>
                                    {skill.category}
                                </h4>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>{skill.items}</p>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </Section>

            <style>{`
                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .skills-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </>
    );
};

export default ProjectsPage;

