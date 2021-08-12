import { createGlobalStyle } from "styled-components";

const GlobalStyleDescription = createGlobalStyle`
    .page-description-wrap{
        max-width: 25rem;
        margin-bottom: 8rem;
    }
`;


export default function PageDescription() {

    return(
        <>
            <GlobalStyleDescription/>
            <div className="page-description-wrap">
                <p>Trabajamos la creatividad desde un punto de vista estratégico para contextualizar cada marca en su entorno.</p>
            </div>
        </>
    )
}