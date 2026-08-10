import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from './EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 25px 0px 60px 0px;
    margin-top: 20px; 
    @media (max-width: 960px) {
        padding: 0px;
    }
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`

const Education = () => {
    const education = [
        {
            id: 0,
            img: "https://placehold.co/100x100/1a1a2e/854CE6?text=BE",
            school: "Sinhgad Institute of Technology, Lonavala",
            date: "2020 – 2024",
            grade: "CGPA: 9.20/10",
            desc: "Bachelor of Engineering in Computer Engineering with a strong academic record. Gained comprehensive knowledge in computer science fundamentals, software engineering, and development practices.",
            degree: "Bachelor of Engineering in Computer Engineering",
        },
        {
            id: 1,
            img: "https://placehold.co/100x100/1a1a2e/854CE6?text=MBA",
            school: "Amity University",
            date: "2025 – 2027",
            grade: "Pursuing",
            desc: "Currently pursuing a Master of Business Administration in IT to combine technical expertise with business acumen and leadership skills.",
            degree: "Master of Business Administration in IT (Pursuing)",
        },
    ];

    return (
        <Container id="education">
            <Wrapper>
                <div className="text-center mb-4 px-4">
                    <h2 className="text-4xl text-white font-bold mb-4">Education</h2>
                    <p className="text-lg text-gray-300">
                        My education has been a journey of self-discovery and growth.
                    </p>
                </div>
                <TimelineSection>
                    <Timeline>
                        {education.map((edu, index) => (
                            <TimelineItem key={edu.id}>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={edu} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education