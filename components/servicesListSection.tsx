import { createGlobalStyle } from "styled-components"
import ServicesListItem from "./servicesListItem"

const GlobalStyleListSection = createGlobalStyle`
    .list-section{
        display: grid;
        grid-template-columns: 25% 75%;
        margin-bottom: 5rem;
        
        &__title h2, &__text p{

            margin-top:  0px;
        
        }
        
        p{
            margin: 0;
        }
    }
`;

export default function ServicesListSection() {

    return  (
        <>
            <GlobalStyleListSection/>
            <div className="list-section">
                <div className="list-section__title">
                    <h2 className="widget-title">SERVICES</h2>
                </div>
                <div className="list-section__wrap">
                    <ServicesListItem title="ESTRATEGIA DE MARCA">
                        <p>Research</p>
                        <p>Brand Strategy</p>
                        <p>Naming</p>
                    </ServicesListItem>
                    <ServicesListItem title="CREATIVIDAD">
                        <p>Narrativa de marca visual y verbal</p>
                        <p>Diseño y Dirección de Arte</p>
                        <p>UI / UX</p>
                        <p>Wireframe &amp; Prototyping</p>
                        <p>Website y Ecommerce</p>
                        <p>Print &amp; Packaging</p>
                    </ServicesListItem>
                    <ServicesListItem title="TECNOLOGÍA">
                        <p>Creative development</p>
                        <p>Front-end development</p>
                        <p>Back-end development</p>
                    </ServicesListItem>
                </div>
            </div>
        </>
        )
    
}