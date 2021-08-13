import styled from 'styled-components'
import Project from '../models/project'
import ProjectCard from './projectCard'

const ProjectsContainerStyles = styled.section`
  display: grid;
  column-gap: 2rem;
  grid-template-columns: auto auto auto;
  row-gap: 5rem;
`;


export default function ProjectsContainer( projects:Project[] ) {
    var projectVar;
    return  (
          <ProjectsContainerStyles>
          {Object.entries(projects).map(function(project:any, index){
            projectVar = new Project(project[1].title, project[1].description, project[1].list_image?.asset?.url, project[1].slug?.current);
            return (
                <ProjectCard key={index} {...projectVar}/>
            )
          })}
          </ProjectsContainerStyles>
    )
}


