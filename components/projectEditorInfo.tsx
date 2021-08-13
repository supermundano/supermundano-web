import styled from "styled-components";
import Image from 'next/image'
import TwoImages from './projectTwoImages'
import SanityImage from "./SanityImage";

const ProjectEditorInfoStyle = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;

  p{
      margin-top: 2.5rem;
      max-width: 60rem;
  }
`;

export default function ProjectEditorInfo(content_raw:any) {

    return(
        <>
            <ProjectEditorInfoStyle>
                {Object.entries(content_raw.content_raw).map(function(bloque, index){
                    switch(bloque[1]._type){
                        case 'twoImages':
                            //console.log(urlFor(bloque[1].images[0]));
                            <TwoImages key={ bloque[1]?._key } image1={ <Image key={ bloque[1]?.images[0]?._key } src={ bloque[1]?.images[0]?.asset?._ref }  /> } image2={ <Image key={ bloque[1]?.images[1]?._key } src={ bloque[1]?.images[0]?.asset?._ref } width="765" height="1000" /> } />
                        break;
                        case 'image':
                            console.log("Image:");
                            /*
                            return (
                            <SanityImage image_data={ bloque[1] }/>
                            )
                            */
                            //<Image key={ bloque[1]._key } src={ bloque[1]._key?.asset?._ref } />
                        break;
                        case 'block':
                            <p>{ bloque[1].children[0]?.text }</p>
                        break;
                    }

                })}
            </ProjectEditorInfoStyle>
        </>
    )
}
