import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: #F2F3F499;
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`

// NEW: Designation style (Software Engineer)
const Designation = styled.div`
    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #854CE6;
    margin-bottom: 2px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #F2F3F4;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #b1b2b399;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color:#b1b2b380;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

// NEW: Skills section with tags
const Skills = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
`

const Skill = styled.span`
    font-size: 13px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: #F2F3F499;
    background: rgba(133, 76, 230, 0.15);
    padding: 4px 12px;
    border-radius: 20px;
    border: 1px solid rgba(133, 76, 230, 0.3);
    @media only screen and (max-width: 768px){
        font-size: 11px;
        padding: 3px 10px;
    }
`

// NEW: Bullet point styles
const BulletList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 8px 0 0 0;
`

const BulletItem = styled.li`
    font-size: 14px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: #F2F3F499;
    padding: 4px 0 4px 24px;
    position: relative;
    line-height: 1.6;
    
    &::before {
        content: "▸";
        position: absolute;
        left: 0;
        color: #854CE6;
        font-weight: bold;
    }
    
    @media only screen and (max-width: 768px){
        font-size: 12px;
        padding: 3px 0 3px 20px;
    }
`

const SkillsLabel = styled.div`
    color: #b1b2b3;
    font-size: 14px;
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 4px;
`

const ExperienceCard = ({ experience }) => {
    // Convert description string to bullet points
    const getBulletPoints = (desc) => {
        if (!desc) return [];
        // Split by periods and filter out empty strings
        const points = desc.split('.').filter(point => point.trim().length > 0);
        return points.map(point => point.trim() + '.');
    }

    const bulletPoints = getBulletPoints(experience.desc);

    return (
        <Card>
            <Top>
                <Image alt="company logo" src={experience.img} />
                <Body>
                    {/* NEW: Show Designation if it exists */}
                    {experience.designation && (
                        <Designation>{experience.designation}</Designation>
                    )}
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {/* NEW: Bullet points instead of paragraph */}
                <BulletList>
                    {bulletPoints.map((point, index) => (
                        <BulletItem key={index}>{point}</BulletItem>
                    ))}
                </BulletList>
                
                {/* NEW: Skills as tags */}
                {experience?.skills && experience.skills.length > 0 && (
                    <>
                        <SkillsLabel>Skills:</SkillsLabel>
                        <Skills>
                            {experience?.skills?.map((skill, index) => (
                                <Skill key={index}>{skill}</Skill>
                            ))}
                        </Skills>
                    </>
                )}
            </Description>
            {experience.doc && (
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            )}
        </Card>
    )
}

export default ExperienceCard