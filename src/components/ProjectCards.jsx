import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: #171721;
    border: 0.1px solid #854CE6;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    object-fit: cover;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #F2F3F480;
    background-color: #854CE615;
    border: 0.1px solid #854CE6;
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
    flex: 1;
`
const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #e5e7eb;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 6px;
`

// Bullet point list for description
const BulletList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const BulletItem = styled.li`
    font-size: 12px;
    font-weight: 400;
    color: #b1b2b399;
    padding: 2px 0 2px 16px;
    position: relative;
    line-height: 1.4;
    
    &::before {
        content: "▸";
        position: absolute;
        left: 0;
        color: #854CE6;
        font-weight: bold;
    }
    
    @media only screen and (max-width: 768px){
        font-size: 11px;
        padding: 2px 0 2px 14px;
    }
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-top: auto;
`

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: #FFFFFF;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid #171721;
    object-fit: cover;
`

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image alt="project-image" src={project.image}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <BulletList>
                    {project.description?.slice(0, 3).map((point, index) => (
                        <BulletItem key={index}>{point}</BulletItem>
                    ))}
                </BulletList>
            </Details>
           
        </Card>
    )
}

export default ProjectCards