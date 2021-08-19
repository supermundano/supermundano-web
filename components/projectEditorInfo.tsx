import styled from "styled-components";
import Image from 'next/image'
import TwoImages from './ProjectTwoImages'
import SanityImage from "./SanityImage";

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

export default function ProjectEditorInfo(content_raw:any) {

    return(
        <>
            <ProjectEditorInfoStyle>
                {Object.entries(content_raw.content_raw).map(function(bloque:any, index){
                    switch(bloque[1]._type){
                        case 'twoImages':
                            return(
                            <TwoImages key={ bloque[1]?._key } image1={ bloque[1]?.images[0] } image2={ bloque[1]?.images[1]} />
                            )
                        break;
                        case 'image':

                            return (
                              <SanityImage key={bloque[1]._key} image_data={ bloque[1] }/>
                            )

                        break;
                        case 'block':
                          return (
                            <p key={ bloque[1]._key } >{ bloque[1].children[0]?.text }</p>
                          )
                        break;
                    }

                })}
            </ProjectEditorInfoStyle>
        </>
    )
}
