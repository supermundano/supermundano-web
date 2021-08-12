import styled from "styled-components";


const CustomTitle = styled.h4`
    font-size: 1.4rem;
    color: white;
    margin: 0;
`;

const TitleSpanSecondary = styled.span`
    color: #4E4E4E;
    margin-left: 1rem;
`;


export default function PageTitle() {

    return(
        <div>
            <CustomTitle>SUPERMUNDANO ® <TitleSpanSecondary>CREATIVE BRANDS IN CONTEXT</TitleSpanSecondary></CustomTitle>
        </div>
    )
}