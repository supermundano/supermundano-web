import styled from "styled-components"

const ServicesListItemStyle = styled.div`
  border-top: 1px solid var(--brandFour);
  padding: 3rem 0;

  .text{
    margin: 2rem 0 0;
  }

  @media (min-width: 576px){
    padding: 5rem 0;

    .text{
      margin: 5rem 0;
    }
  }
`;

export default function ServicesListItem( {title, children}:any ) {
  if(title){
    title = <h2 className="secondary-title">{ title }</h2>;
  }
  return  (
    <ServicesListItemStyle>
       { title }
      <div className="text">
          { children }
      </div>
    </ServicesListItemStyle>
  )
}
