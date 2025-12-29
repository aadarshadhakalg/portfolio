import React from 'react';
import Section from '../components/Section';
import AnimationWrapper from '../components/AnimationWrapper';

const ProjectsPage = () => {
    const projects = [
        {
            title: "Code Editor Flutter Plugin",
            description: "Null Safety Migration and performance improvements for mobile code editing.",
            link: "#"
        },
        {
            title: "Himalayan Roadies & The Voice of Nepal",
            description: "Official audition applications for major TV franchises in Nepal. Managed thousands of users and video submissions.",
            link: "#"
        },
        {
            title: "Scout (Opensource Time Tracker)",
            description: "A privacy-focused time tracking tool for developers and freelancers.",
            link: "#"
        },
        {
            title: "Flutter Screenshot X",
            description: "Utility for capturing and manipulating screenshots within Flutter applications.",
            link: "#"
        },
        {
            title: "NFT Listing Website",
            description: "A platform for listing and browsing NFTs, built with Django.",
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '3rem' }}>
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
        </>
    );
};

export default ProjectsPage;
