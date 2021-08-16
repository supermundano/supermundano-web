import styled from 'styled-components';
import MenuLink from '../models/links';
import Menu from './menu'
import ClaimLogo from './ClaimLogo'

const HeaderStyles = styled.header`
    width: 100%;
    margin-bottom: 0rem;

    h1{
      margin: 0;

      a{
        font-size: 1.6rem;
        display: block;
        text-align: center;
      }
    }

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
            flex-direction: column;

            ul{
                display: flex;
            }
        }
    }

    @media (min-width: 576px){
      h1{

        a{
          font-size: 2rem;
        }

      }

      .wrap{
        margin-bottom: 13rem;

        .home &{
            margin-bottom: 0;
        }

        &__menu{
            flex-direction: row;
        }
      }
    }
`;

// TODO: H1 en home pero debería cambiar y que otro elemento fuera el H1 en páginas internas
export default function Header() {

    var array:MenuLink[];

    array = [
        new MenuLink('Home','/'),
        new MenuLink('Work','/'),
        new MenuLink('Services','/services')
    ];

    return(
      <HeaderStyles>
          <div className="wrap">
              <div className="wrap__menu">
                  <h1><ClaimLogo /></h1>
                  <Menu { ...array } />
              </div>
          </div>
      </HeaderStyles>
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
