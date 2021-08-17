import styled from "styled-components"

const ServicesListItemStyle = styled.div`
  border-top: 1px solid var(--brandFour);
  padding: 5rem 0;

  &:last-child{
    padding-bottom: 0;
  }

  .text{
    margin: 5rem 0;
  }
`;

export default function ServicesListItem( {title, children}:any ) {
  return  (
    <ServicesListItemStyle>
      <h2 className="secondary-title">{ title }</h2>

      <div className="text">
          { children }
      </div>
    </ServicesListItemStyle>
  )
}
