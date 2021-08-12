import { Children } from "react";
import { createGlobalStyle } from "styled-components"

const GlobalStyleListSection = createGlobalStyle`
    .list-item{
        border-top: 1px solid #4E4E4E;
        padding: 5rem 0;
        
        &__text{
            margin: 5rem 0;
            
        }
    }
`;

export default function ServicesListItem( {title, children}:any ) {
    
    return  (
        <>
            <GlobalStyleListSection/>
            <div className="list-item">
                <div className="list-item__title">
                    <h2 className="widget-title">{ title }</h2>
                </div>
                <div className="list-section__text">
                    { children }
                </div>
            </div>
        </>
        )
    
}