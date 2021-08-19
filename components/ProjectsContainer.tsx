import styled from 'styled-components'
import Project from '../models/project'
import ProjectCard from './ProjectCard'

const ProjectsContainerStyles = styled.section`
display: grid;
column-gap: 2rem;
grid-template-columns: 100%;
row-gap: 5rem;

@media (min-width: 576px){
  grid-template-columns: auto auto;
}

@media (min-width: 990px){
  grid-template-columns: auto auto auto;
}
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


