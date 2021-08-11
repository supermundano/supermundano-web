import styled from 'styled-components';
import MenuLink from '../models/links';
import Menu from './menu'
import PageTitle from './pageTitle'
import PageDescription from './pageDescription'

const HeaderTag = styled.header`
    width: 100%; 
`;

const HeaderMenuWrap = styled.div`
    display: flex;
    justify-content: space-between; 
    align-content: center;
    align-items: center; 

    ul{
        display: flex;
    }
`;

const HeaderAbsoluteWrap = styled.div`
    margin-bottom: 5rem;
`;


export default function Header() {

    var array:MenuLink[];
    array = [
        new MenuLink('Work','/work'), 
        new MenuLink('Services','/services')
    ];



    return(
        <HeaderTag>
            <HeaderAbsoluteWrap>
                <HeaderMenuWrap>
                    <PageTitle />
                    <Menu { ...array } />
                </HeaderMenuWrap>
                <PageDescription></PageDescription>
            </HeaderAbsoluteWrap>
        </HeaderTag>
    )
}



export async function getStaticProps() {
    var array:MenuLink[];
    array = [
        new MenuLink('Work','work'), 
        new MenuLink('Services','services')
    ];
  
    return array;
  }