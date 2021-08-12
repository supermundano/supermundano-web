import { createGlobalStyle} from "styled-components";
import Image from 'next/image'
import TwoImages from './projectTwoImages'
import imageUrlBuilder from '@sanity/image-url'
import {client} from '../lib/sanity'

const builder = imageUrlBuilder(client)

function urlFor(source:string) {
  return builder.image(source)
}


const ProjectEditorStyle = createGlobalStyle`
    .project-editor{
        margin-top: 5rem;
        margin-bottom: 10rem;

        p{
            margin-top: 2.5rem;
            max-width: 60rem;
        }


    }

`;



export default function ProjectEditorInfo(content_raw:any) {
    
    return(
        <>
            <ProjectEditorStyle/>
            <div className="project-editor">
                {Object.entries(content_raw.content_raw).map(function(bloque, index){
                    switch(bloque[1]._type){
                        case 'twoImages':
                            console.log(urlFor(bloque[1].images[0]));
                            <TwoImages key={bloque[1]._key} image1={ <Image key={bloque[1].images[0]._key} src={urlFor(bloque[1].images[0].asset?._ref).width(749).height(978).url()}  /> } image2={ <Image key={bloque[1].images[1]._key} src={urlFor(bloque[1].images[0].asset?._ref).width(749).height(978).url()} width="765" height="1000" /> } />
                        break;
                        case 'image':
                            <Image key={bloque[1]._key} src={urlFor(bloque[1]._key?.asset?._ref).width(1589).height(964).url()} />
                        break;
                        case 'block':
                            <p>{ bloque[1].children[0]?.text }</p>
                        break;
                    }
                    
                })}
                
            </div>
        </>
    )
}