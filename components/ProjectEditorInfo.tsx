import styled from "styled-components";

import TwoImages from './ProjectTwoImages'
import SingleImage from './ProjectSingleImage'
import ProjectEditorBlock from "./ProjectEditorBlock";

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
  var block_data : any;
  var inner_data : any;
  return(
    <>
      {content_raw.content_raw != null &&
        <ProjectEditorInfoStyle>
          {Object.entries(content_raw.content_raw).map(function(bloque:any, index){


            switch(bloque[1]._type){
                case 'twoImages':
                    return(
                    <TwoImages key={ bloque[1]?._key } image1={ bloque[1]?.images[0] } image2={ bloque[1]?.images[1]} />
                    )

                case 'image':
                    return (
                      <SingleImage key={bloque[1]._key} image={ bloque[1] }/>
                    )

                case 'block':
                  inner_data = [];

                  bloque[1].children.forEach((child:any, index:any) => {

                    if(child.marks.length > 0){
                      bloque[1].markDefs.forEach((mark:any) => {

                        if(child.marks[0] === mark?._key){
                          inner_data.push(<a key={ mark?._key } href={ mark?.href } target={ mark?.blank ? '_blank' : '_self' } rel='noreferrer'>{ child?.text }</a>);
                        }
                      });
                    }else{

                      inner_data.push(child?.text);
                    }
                  });

                  return <ProjectEditorBlock key={bloque[1]._key} content={ inner_data }/>;

            }
          })}
        </ProjectEditorInfoStyle>
      }
    </>
  )
}
