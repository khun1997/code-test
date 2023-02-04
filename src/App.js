import React from 'react';
import styled from 'styled-components';

// import './App.css';


//ADAPT STYLE
// const Button = styled.button`
  /* Adapt the colors based on primary prop */
  /* background: ${props => props.primary ? "black" : "white"};
  color: ${props => props.primary ? "white" : "black"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px; */
  /* background: ${props => props.primary ? "yellow" : 'black'}; */
  /* color: ${props => props.primary ? "black" : 'yellow'};

  font-size : 2em;
  margin: 30px;
  padding: 5px 10px;
  border: 3px solid black;s
  border-radius:4px; */

  //EXTEND STYLE
//   const Button = styled.button`
//   color: white;
//   background: red;
//   font-size: 1em;
//   margin:1em;
//   padding: 1em;
//   border: 1px solid red;
//   border-radius:5px;

//   `;

//   const RedButton = styled(Button)`
//   color: red;
//   background: white;
//   `;


// function App() {
//   return (
    // color:${props => props.inputColor || 'red'}
//     <div>
//     <Button as='a'>Normal Button</Button>
//     <RedButton >Red Button</RedButton>
//     </div>
//   );
// }


//PASS PROPS

// const Input = styled.input`
// background: yellow;
// color: ${ props => props.inputColor || 'black'};
// border: 3px solid black;
// margin: 1em;
// padding: 0.5em;
// border-radius:10px;

// `;

// function App(){
//   return(
//     <div>
//       <Input defaultValue='this is one'/>
//       <br/>
//       <Input defaultValue='this is two' inputColor='red'/>


//     </div>
//   );
// }
// const StyledWrapper = styled.div`



// function App(){
//   return(
//     return(
//       <StyledWrapper></StyledWrapper>
//     )
//   );
// }


//PSEUDO TEST
// const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
//   color: blue;
//   margin: 1em;
//   font-size:3em;
//   font-weight:bold;
//   &:hover {
//     color: black;
//     padding:1em;
//     background:red; // <Thing> when hovered
//   }

//   & ~ & {
//     background: yellow; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
//   }
//   & + & {
//     background: lime; // <Thing> next to <Thing>
//   }
//   &.something {
//     background: orange; 
//     /* color:white;// <Thing> tagged with an additional CSS class ".something" */
//   }
//   .something-else & {
//     border: 4px solid; 
//     // <Thing> inside another element labeled ".something-else"
//   }
// `
// function App(){
//   return(
//     <React.Fragment>
//     <Thing>One</Thing>
//     <Thing>Two</Thing>
//     <Thing className="something">Three</Thing>
//     <div>Four</div>
//     <Thing>Five</Thing>
//     <div className="something-else">
//       <Thing>Six</Thing>
//     </div>
//   </React.Fragment>
//   )

// }

const Input = styled.input.attrs({ type: "checkbox" })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

const LabelText = styled.span`
  ${(props) => {
    switch (props.$mode) {
      case "dark":
        return `
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: green;
          }
        `;
      default:
        return `
          background-color: yellow;
          color: black;
          ${Input}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;
function App(){
  return(
    <React.Fragment>
    <Label>
      <Input defaultChecked />
      <LabelText>one</LabelText>
    </Label>

    <Label>
      <Input />
      <LabelText $mode="dark">two</LabelText>
    </Label>

    <Label>
      <Input defaultChecked />
      <LabelText>three</LabelText>
    </Label>

    <Label>
      <Input defaultChecked />
      <LabelText $mode="dark">four</LabelText>
    </Label>
  </React.Fragment>
  )
}




export default App;
