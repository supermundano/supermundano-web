import styled from 'styled-components'
import Project from '../models/project'
import ProjectCard from './projectCard'

const ProjectsGrid = styled.div`
  display: grid;
  column-gap: 1rem; 
  grid-template-columns: auto auto auto;
  row-gap: 5rem;
`;


export default function ProjectsContainer( projects:Project[] ) {
    console.log(projects);
    var projectVar;
    return  (
          <ProjectsGrid>
          {Object.entries(projects).map(function(project, index){
            console.log(project[1]);
            projectVar = new Project(project[1].title, project[1].description, project[1].list_image?.asset?.url);
            return (
                <ProjectCard key={index} {...projectVar}/>
            )
          })}
          </ProjectsGrid>
    )
}


