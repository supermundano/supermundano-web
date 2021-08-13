import { createGlobalStyle} from "styled-components";
import Image from 'next/image'


const GlobalStyleProjectFeaturedInfo = createGlobalStyle`
    
    .project-featured-info{

        display: grid;
        grid-template-columns: 33% 67%;
        
        .project-services{
            margin-bottom: 8rem;
        }

        h4{
            font-weight: 200;
            margin-top: 4rem;
        }

        p{
            margin: 0;
        }

        .project-image{
            display: flex;
            justify-content: end;
        }
    
    }

`;



export default function ProjectFeaturedInfo( {title, services, colabs, featured_image}:any ) {
    
    return(
        <>
        <GlobalStyleProjectFeaturedInfo/>
            <div className="project-featured-info">

                <div className="project-info">

                    <h3 className="widget-title">{ title }</h3>
                    <div className="project-services">
                        <h4>Services</h4>
                        {Object.entries(services).map(function(servicio:any, num){
                            return (
                                <p key={num}>{ servicio[1] } </p>
                            )
                        })}
                    </div>

                    <div className="project-colabs">
                        <h4>Colabs</h4>
                        <p>{ colabs }</p>
                    </div>

                </div>

                <div className="project-image">
                    
                    <Image src={featured_image.asset?.url} width="1161" height="693" />
                </div>

            </div>
          </>
    )
}