import React from 'react'
import { useState } from 'react'
import ProjectCard from './ProjectCards'
import styled from 'styled-components';
import heroImg from '../assets/heroImg.JPG'
// Import local images
import liquorImg from '../assets/liquor.jpg' // Add your image to assets
import walletImg from '../assets/wallet.jpg' // Add your image to assets
import courtImg from '../assets/court.jpg' // Add your image to assets


const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    padding-top: 85px;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = ({openModal,setOpenModal}) => {
    const projects = [
        {
            id: 1,
            title: "Fundamental Credit Reviewer – Case Management System",
            description: [
                "Built a secure banking platform with JWT and OAuth2 authentication",
                "Integrated Kafka and RabbitMQ queues to drop case resolution times by 40%",
                "Developed robust data persistence components using Spring JDBC Template",
                "Implemented custom Java Collections logic and applied Role-Based Access Control (RBAC) to boost data access efficiency by 25%"
            ],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
            tags: ["Java", "Spring Boot", "Microservices", "React", "JWT", "MySQL", "Kafka", "RabbitMQ"],
           
        },
        {
            id: 2,
            title: "Court Case Management System",
            description: [
                "Developed an asynchronous, event-driven platform utilizing RabbitMQ and Java multi-threading techniques for concurrent background tasks and real-time processing",
                "Optimized complex MSSQL queries, stored procedures, and database indexing",
                "Managed thread synchronization to eliminate race conditions and reduce query latency by 50%"
            ],
            image: courtImg, // Using local image
            tags: ["Java", "Spring Boot", "Microservices", "REST APIs", "RabbitMQ", "MSSQL", "Multi-threading"],
           
        },
        {
            id: 3,
            title: "Liquor Counter – State-Level Store Management System",
            description: [
                "Led backend development of an inventory architecture deployed across 700+ state retail stores (KSBCL, APBCL, TSBCL)",
                "Achieved 40% faster billing response times",
                "Scaled peak concurrent throughput by 35%",
                "Dropped manual tracking errors by 60%"
            ],
            image: liquorImg, // Using local image
            tags: ["Spring Boot", "React", "MySQL", "AWS", "Git"],
            
        },
        {
            id: 4,
            title: "Digital Wallet UPI Payment System",
            description: [
                "Built a secure digital wallet application with UPI payment integration",
                "Implemented peer-to-peer fund transfers, transaction history, QR code payments, and real-time balance updates",
                "Integrated with banking APIs for seamless money transfers",
                "Implemented end-to-end encryption for secure transactions"
            ],
            image: walletImg, // Using local image
            tags: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "JWT", "Payment Gateway"],
          
        },
        {
            id: 5,
            title: "Food Catering Management System",
            description: [
                "Developed a comprehensive food catering management platform with online ordering, menu management, order tracking, and delivery scheduling",
                "Features include real-time order status updates, inventory management, customer feedback system, and automated invoice generation"
            ],
            image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop&crop=center",
            tags: ["Spring Boot", "React", "MySQL", "REST APIs", "JWT", "Bootstrap"],
           
        },
    ];

    return (
        <Container id="projects">
            <Wrapper>
                <div className="text-center mb-4 px-4">
                    <h2 className="text-4xl text-white font-bold mb-4">Projects</h2>
                    <p className="text-lg text-gray-300">
                        Here are some of the projects I've worked on.
                    </p>
                </div>
                <CardContainer>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects