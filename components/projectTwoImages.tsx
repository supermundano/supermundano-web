import styled from "styled-components";

const TwoImagesStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 4rem;
`;

export default function ProjectTwoImages( { image1, image2 }:any ) {
    return(
      <TwoImagesStyle>
        <div className="project-editor-image">
            { image1 }
        </div>

        <div className="project-editor-image">
            { image2 }
        </div>
      </TwoImagesStyle>
    )
}
