import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';
import EidkoImg from '../assets/eidiko.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 0px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Experience = () => {
    const experiences = [
        {
            id: 1,
            img: EidkoImg,
            designation: "Software Engineer",
            role: "Java Full Stack Developer",
            company: "Eidiko Systems Integrators",
            date: "July 2024 – Present",
            desc: "Designed scalable REST APIs using Java, Spring Boot, and Microservices while optimizing MySQL/Oracle queries to cut API response time by 30%." +
                   "Engineered responsive React front-end components, accelerating page load speeds and overall UI performance by 70%." +
                   "Integrated Azure, Docker, and Jenkins into deployment workflows, cutting production delivery cycles by 50%." +
                   "Participated across the full SDLC including requirement analysis, architecture design, Unit testing, and cross-functional production support.",
            skills: [
                "Java",
                "Spring Boot",
                "Spring MVC",
                "Spring Security",
                "Microservices",
                "React.js",
                "MySQL",
                "Oracle SQL",
                "Hibernate/JPA",
                "REST APIs",
                "Azure",
                "Docker",
                "Jenkins",
                "JUnit",
                "Mockito",
                "Git",
                "Maven"
            ],
        },
    ];
    return (
        <Container id="experience">
            <Wrapper>
                <div className="text-center mb-4 px-4">
                    <h2 className="text-4xl text-white font-bold mb-4">Experience</h2>
                    <p className="text-lg text-gray-300">
                        My work experience as a Java Full Stack Developer.
                    </p>
                </div>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={experience.id}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience