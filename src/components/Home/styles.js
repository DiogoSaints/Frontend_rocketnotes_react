import { styled } from "styled-components";

export const Container = styled.div`
width:100%;
height:100vh;

display:grid;
grid-template-columns: 250px auto;
grid-template-rows:105px 128px auto 64px;
grid-template-areas:
"brand header"
"menu search"
"menu content"
"newnotes content";

background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;
  background-color: green;
`;
export const Menu = styled.ul`
  grid-area: menu;
  background-color: orange;
`;
export const Search = styled.div`
  grid-area: search;
  background-color: yellow;
`;
export const Content = styled.div`
  grid-area: content;
  background-color: blue;
`;
export const NewNotes = styled.button`
  grid-area: newnotes;
  background-color: red;
`;
