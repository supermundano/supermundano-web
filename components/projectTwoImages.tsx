import styled from "styled-components";
import SanityImage from "./SanityImage";

const TwoImagesStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 4rem;
  margin-bottom: 5rem;
`;

export default function ProjectTwoImages( { image1, image2 }:any ) {

    return(
      <TwoImagesStyle>
        <div className="project-editor-image">
          <SanityImage key={image1._key} image_data={ image1 }/>
        </div>

        <div className="project-editor-image">
          <SanityImage key={image2._key} image_data={ image2 }/>
        </div>
      </TwoImagesStyle>
    )
}
