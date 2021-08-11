import styled from "styled-components";


const DescriptionContent = styled.p`
    font-size: 1.2rem;
    color: white; 
`;

const DescriptionWrap = styled.div`
    max-width: 30rem;
`;


export default function PageDescription() {

    return(
        <DescriptionWrap>
            <DescriptionContent>Trabajamos la creatividad desde un punto de vista estratégico para contextualizar cada marca en su entorno.</DescriptionContent>
        </DescriptionWrap>
    )
}