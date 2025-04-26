import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'fyntune' ?
            <ToggleButton active value="fyntune" onClick={() => setToggle('fyntune')}>FYNTUNE SOLUTIONS</ToggleButton>
            :
            <ToggleButton value="fyntune" onClick={() => setToggle('fyntune')}>FYNTUNE SOLUTIONS</ToggleButton>
          }
          <Divider />
          {toggle === 'factsonline' ?
            <ToggleButton active value="factsonline" onClick={() => setToggle('factsonline')}>FACTS ONLINE</ToggleButton>
            :
            <ToggleButton value="factsonline" onClick={() => setToggle('factsonline')}>FACTS ONLINE</ToggleButton>
          }
          <Divider />
          {toggle === 'personal' ?
            <ToggleButton active value="personal" onClick={() => setToggle('personal')}>PERSONAL PROJECT</ToggleButton>
            :
            <ToggleButton value="personal" onClick={() => setToggle('personal')}>PERSONAL PROJECT</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .filter((item) => item.category === "fyntune")
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects