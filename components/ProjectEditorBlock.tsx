import styled from "styled-components";

import TwoImages from './ProjectTwoImages'
import SingleImage from './ProjectSingleImage'

const ProjectEditorInfoStyle = styled.div`
  margin-top: 2.5rem;

  p{
    margin-top: 2.5rem;
  }

  @media (min-width: 576px){
    margin-top: 4rem;
  }

  @media (min-width: 990px){
    margin-top: 5rem;

    p{
      max-width: 80rem;
    }
  }
`;

export default function ProjectEditorBlock({content}:any) {

  return(
    <>
      <p>{content}</p>
    </>
  )
}
