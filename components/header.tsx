import styled, { createGlobalStyle } from 'styled-components';
import MenuLink from '../models/links';
import Menu from './menu'
import PageTitle from './pageTitle'

const HeaderTag = styled.header`
    width: 100%; 
`;

const GlobalStyleHeader = createGlobalStyle`
    header{
            width: 100%;
            margin-bottom: 0rem;

        .wrap{
            margin-bottom: 13rem;
            
            .home &{
                margin-bottom: 0;
            }

            &__menu{
                display: flex;
                justify-content: space-between; 
                align-content: center;
                align-items: center; 

                ul{
                    display: flex;
                }
            }
        }

    }
`;


export default function Header() {

    var array:MenuLink[];
    array = [
        new MenuLink('Work','/work'), 
        new MenuLink('Services','/services')
    ];



    return(
        <>
            <GlobalStyleHeader/>
            <header>
                <div className="wrap">
                    <div className="wrap__menu">
                        <PageTitle />
                        <Menu { ...array } />
                    </div>
                </div>
            </header>
        </>
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