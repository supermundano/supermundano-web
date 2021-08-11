import styled from 'styled-components';
import MenuLink from '../models/links';
import Menu from './menu'
import PageTitle from './pageTitle'

const FooterTag = styled.footer`
    width: 100%; 
    display: grid;
    grid-template-columns: 50% 50%;
`;

const FooterMenuWrap = styled.div`
    display: flex;
    justify-content: flex-start; 
    align-content: center;
    align-items: end; 
`;

const FooterInfoWrap = styled.div`
    display: flex;
    justify-content: flex-end; 
    align-content: center;
    align-items: end; 
`;

const FooterAbsoluteWrap = styled.div`
    margin-bottom: 5rem;
`;

const WidgetTitle = styled.h4`
    margin: 0;
    margin-bottom: 3rem;
    color: #707070;
`;

const WidgetContainer = styled.div`
    max-width: 25rem;

    p{
        color: white;
    }
`;

const ContactInfo = styled.p`
    color: white;
`;


export default function Footer() {

    var array:MenuLink[];
    array = [
        new MenuLink('Behance','#'), 
        new MenuLink('Instagram','#'), 
        new MenuLink('LinkedIn','#'), 
        new MenuLink('Twitter','#')
    ];



    return(
        <FooterTag>
            <FooterAbsoluteWrap>
                <FooterMenuWrap>
                    <WidgetContainer>
                        <WidgetTitle>CONTACT</WidgetTitle>
                        <p></p>
                    </WidgetContainer>
                    <WidgetContainer>
                        <WidgetTitle>SOCIAL NETWORKS</WidgetTitle>
                        <Menu { ...array } />
                    </WidgetContainer>
                </FooterMenuWrap>
                <FooterInfoWrap>
                    <p>2021® terms</p>
                    <PageTitle />
                </FooterInfoWrap>
            </FooterAbsoluteWrap>
        </FooterTag>
    )
}



export async function getStaticProps() {
    var array:MenuLink[];
    array = [
        new MenuLink('Behance','#'), 
        new MenuLink('Instagram','#'), 
        new MenuLink('LinkedIn','#'), 
        new MenuLink('Twitter','#')
    ];
  
    return array;
  }