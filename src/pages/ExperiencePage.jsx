import React from 'react';
import Section from '../components/Section';
import AnimationWrapper from '../components/AnimationWrapper';

const ExperiencePage = () => {
    const experiences = [
        {
            role: "Infrastructure Engineer",
            company: "STARTsmall Pvt. Ltd.",
            period: "Mar 2024 - Present",
            location: "Kathmandu",
            description: "Responsible for managing servers and IT infrastructure. Setup Hyperconverged Infrastructure with Dell Server and Ruijie Switch. System monitoring using Zabbix, Elasticsearch, Kibana. Setup RKE2 Kubernetes Cluster."
        },
        {
            role: "Mobile App Developer",
            company: "OAN Solutions",
            period: "May 2024 - Aug 2024",
            location: "Kupondole",
            description: "Responsible for designing and developing mobile app for Android and iOS. Developed a business app for iOS and Android. Distribution of the app on Appstore and Playstore."
        },
        {
            role: "Freelancer",
            company: "Upwork",
            period: "Apr 2021 - Present",
            location: "Remote",
            description: "Part time web and mobile app developer. Development and maintenance of mobile apps using Flutter. Developed a NFT listing website using Django. Published Flutter apps using CI/CD (Codemagic). Feature enhancements in PHP. Set up Raspberry PI for remote access."
        },
        {
            role: "Flutter Developer",
            company: "Quantum IT Solutions",
            period: "Nov 2020 - Feb 2022",
            location: "Kathmandu, Nepal",
            description: "Mobile app UI development and API integrations. Developed and published The Voice of Nepal Audition App, Himalaya Roadies Audition App, E-bidhya App, and Nepal's Next Top Model's App."
        },
        {
            role: "Flutter Developer",
            company: "Bytecare Technology",
            period: "Oct 2020 - Dec 2020",
            location: "Remote",
            description: "Assisted the development of initial version of Mero Karobar app. Developed an admin panel and added Nepali language support."
        },
        {
            role: "Trainee",
            company: "Unelma Platforms",
            period: "Aug 2019 - Feb 2021",
            location: "Ratnanagar, Chitwan",
            description: "Developed and performed manual QA testing of company's softwares. Developed and deployed 10+ static landing web pages and 10+ mobile apps. Reported major and minor bugs."
        },
        {
            role: "WordPress Developer & SEO Expert",
            company: "Nepal Sports",
            period: "Apr 2019 - Jul 2019",
            location: "Remote",
            description: "WordPress theme customization and search engine optimizations. Developed a sports news portal using WordPress. Carried out keyword research and speed optimizations. Setup live streaming of IPL."
        }
    ];

    return (
        <Section title="Professional Experience" id="experience">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                {experiences.map((exp, idx) => (
                    <AnimationWrapper key={idx} delay={idx * 0.1}>
                        <div style={{ paddingBottom: '2.5rem', borderBottom: idx !== experiences.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
                                <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                                <span className="mono secondary-text">{exp.period}</span>
                            </div>
                            <p className="mono" style={{ textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                {exp.company} — {exp.location}
                            </p>
                            <p className="secondary-text" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{exp.description}</p>
                        </div>
                    </AnimationWrapper>
                ))}
            </div>
        </Section>
    );
};

export default ExperiencePage;
