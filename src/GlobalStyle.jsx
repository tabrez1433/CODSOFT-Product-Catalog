import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:"Work Sans", sans-serif;
}

html{
    font-size:62.5%;
    overflow-x:hidden;
}

body{
    
    scrollbar-color:lightseagreenn
    scrollbar-width:thin;
}

body::-webkit-scrollbar{
   width:1rem;
}

.grid{
    display: grid ;
    place-items: center;
}

.grid-column-two{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 9rem;
}

.grid-three-column{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 3rem;
}

body::-webkit-scrollbar-thumb {
 
 background: #fff;
   border: 5px solid transparent;
   border-radius: 9px;
   background-clip: content-box;
}

h1,
h2,
h3,
h4 {
  font-family: "Work Sans", sans-serif;

}

h1 {
 color: ${({ theme }) => theme.colors.heading};
 font-size: 3rem;
 font-weight: 900;
}

h2 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 4.4rem;
  font-weight: 300;
  white-space: normal;
 
 }

h3 {
 font-size: 1.8rem;
 font-weight: 400;
}

p, button {
 color: ${({ theme }) => theme.colors.text};
 font-size: 1.65rem;
 line-height: 1.5;
 font-weight:400;
}

a {
 text-decoration: none;
}

li {
 list-style: none;
}


${"" /* resuable code section  */}

.container {
 max-width: 120rem;
 margin: 0 auto;
}

.grid {
 display: grid;
 gap: 9rem;
}

.grid-two-column {
 grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
 grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
  grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
 grid-template-columns: repeat(5, 1fr);
}

 .common-heading {
     font-size: 3.8rem;
     font-weight: 600;
     margin-bottom: 6rem;
     text-transform: capitalize;
   }

    .intro-data {
     margin-bottom: 0;
     text-transform: uppercase;
     color: #5138ee;
   }

  .caption {
     position: absolute;
     top: 15%;
     right: 10%;
     text-transform: uppercase;
     background-color: ${({ theme }) => theme.colors.bg};
     color: ${({ theme }) => theme.colors.helper};
     padding: 0.8rem 2rem;
     font-size: 1.2rem;
     border-radius: 2rem;
   }

input, textarea{
   max-width: 50rem;
   color: ${({ theme }) => theme.colors.black};
   padding: 1.6rem 2.4rem;
   border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
   input[type="submit"]{
   max-width: 16rem;
   margin-top: 2rem;
   background-color: ${({ theme }) => theme.colors.btn};
   color: ${({ theme }) => theme.colors.white};
   padding: 1.4rem 2.2rem;
   border-style: solid;
   border-width: .1rem;
   text-transform: uppercase;
   font-size: 1.8rem;
   cursor: pointer;
   }

@media only screen and (max-width:${({theme}) => theme.media.sm}){
  .grid-column-two,.grid-two-column{
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
    margin: 2rem;
  }
  .grid-three-column{
    grid-template-columns: repeat(1,1fr);
    
  }
  .grid-four-column{
    grid-template-columns: repeat(2,1fr);
  }
}
@media only screen and (max-width:${({theme}) => theme.media.mobile}){
    .grid-column-two,.grid-two-column{
    grid-template-columns: repeat(1, 1fr);
    gap: 2.5rem;
  }
  .grid-three-column{
    grid-template-columns: repeat(1,1fr);
   
  }
  .grid-four-column{
    grid-template-columns: repeat(2,1fr);
  }
}
`