import styled from 'styled-components';
import MenuLink from '../models/links';
import Project from '../models/project';
import ProjectsContainer from './projectsContainer'


export default function MainHomePage(array:Project[]) {


    return(
        <main>
            <div className="main-wrap">
                <ProjectsContainer { ...array}></ProjectsContainer>
            </div>
        </main>
    )
}



export async function getStaticProps() {
    var array:MenuLink[];
    array = [
        new MenuLink('Behance','#'), 
        new MenuLink('Instagram','#'), 
        new MenuLink('LinkedIn','#'), 
        new MenuLink('Twitter','#')
    ];
  
    return array;
  }