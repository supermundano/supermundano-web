import styled from "styled-components";
import SanityImage from "./SanityImage";

const SingleImageStyle = styled.div`
  margin-bottom: 2.5rem;

  @media (min-width: 576px){
    margin-bottom: 4rem;
  }

  @media (min-width: 990px){
    margin-bottom: 5rem;
  }
`;

export default function ProjectSingleImage( { image }:any ) {
    return(
      <SingleImageStyle>
          <SanityImage key={image._key} image_data={ image } />
      </SingleImageStyle>
    )
}
