// import React, { useEffect, useState } from 'react';
// // import styled, { ThemeProvider, keyframes } from 'styled-components';

// import './App.css';

import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Routers/home";
import About from "./components/Routers/about";
import Contact from "./components/Routers/contact";

function App(){
  return(
    <Router>
      <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
      </div>

      <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/about" element={<About/>} ></Route>
        <Route exact path="/contact" element={<Contact/>} ></Route>
      </Routes>
    </Router>


  )
  
}

export default App;







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
// // background: yellow;
// // color: ${ props => props.inputColor || 'black'};
// // border: 3px solid black;
// // margin: 1em;
// // padding: 0.5em;
// // border-radius:10px;

// // `;

// // function App(){
// //   return(
// //     <div>
// //       <Input defaultValue='this is one'/>
// //       <br/>
// //       <Input defaultValue='this is two' inputColor='red'/>


// //     </div>
// //   );
// // }
// // const StyledWrapper = styled.div`



// // function App(){
// //   return(
// //     return(
// //       <StyledWrapper></StyledWrapper>
// //     )
// //   );
// // }


// //PSEUDO TEST
// // const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
// //   color: blue;
// //   margin: 1em;
// //   font-size:3em;
// //   font-weight:bold;
// //   &:hover {
// //     color: black;
// //     padding:1em;
// //     background:red; // <Thing> when hovered
// //   }

// //   & ~ & {
// //     background: yellow; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
// //   }
// //   & + & {
// //     background: lime; // <Thing> next to <Thing>
// //   }
// //   &.something {
// //     background: orange; 
// //     /* color:white;// <Thing> tagged with an additional CSS class ".something" */
// //   }
// //   .something-else & {
// //     border: 4px solid; 
// //     // <Thing> inside another element labeled ".something-else"
// //   }
// // `
// // function App(){
// //   return(
// //     <React.Fragment>
// //     <Thing>One</Thing>
// //     <Thing>Two</Thing>
// //     <Thing className="something">Three</Thing>
// //     <div>Four</div>
// //     <Thing>Five</Thing>
// //     <div className="something-else">
// //       <Thing>Six</Thing>
// //     </div>
// //   </React.Fragment>
// //   )

// // }

// const Input = styled.input.attrs({ type: "checkbox" })``;

// const Label = styled.label`
//   align-items: center;
//   display: flex;
//   gap: 8px;
//   margin-bottom: 8px;
// `

// const LabelText = styled.span`
// //   ${(props) => {
// //     switch (props.$mode) {
// //       case "dark":
// //         return `
// //           background-color: black;
// //           color: white;
// //           ${Input}:checked + && {
// //             color: green;
// //           }
// //         `;
// //       default:
// //         return `
// //           background-color: yellow;
// //           color: black;
// //           ${Input}:checked + && {
// //             color: red;
// //           }
// //         `;
// //     }
// //   }}
// // `;
// // function App(){
// //   return(
// //     <React.Fragment>
// //     <Label>
// //       <Input defaultChecked />
// //       <LabelText>one</LabelText>
// //     </Label>

// //     <Label>
// //       <Input />
// //       <LabelText $mode="dark">two</LabelText>
// //     </Label>

// //     <Label>
// //       <Input defaultChecked />
// //       <LabelText>three</LabelText>
// //     </Label>

// //     <Label>
// //       <Input defaultChecked />
// //       <LabelText $mode="dark">four</LabelText>
// //     </Label>
// //   </React.Fragment>
// //   )
// // }


// //test
// const Input = styled.input.attrs({ type: "checkbox" })``;

// const Label = styled.label`
//   align-items: center;
//   display: flex;
//   gap: 8px;
//   margin-bottom: 8px;
// `

// const LabelText = styled.span`
//   ${(props) => {
//     switch (props.$mode) {
//       case "dark":
//         return `
//           background-color: black;
//           color: white;
//           ${Input}:checked + && {
//             color: blue;
//           }
//         `;
//       default:
//         return `
//           background-color: yellow;
//           color: black;
//           ${Input}:checked + && {
//             color: red;
//           }
//         `;
//     }
//   }}
// `;


// function App(){
//   return(
//     <React.Fragment>
//       <Label>
//         <Input defaultChecked />
//         <LabelText>Foo</LabelText>
//       </Label>
//       <Label>
//         <Input />
//         <LabelText $mode="dark">Foo</LabelText>
//       </Label>
//       <Label>
//         <Input defaultChecked />
//         <LabelText>Foo</LabelText>
//       </Label>
//       <Label>
//         <Input defaultChecked />
//         <LabelText $mode="dark">Foo</LabelText>
//       </Label>
//   </React.Fragment>
//   )
// }
//
// const Thing = styled.label`

//   color: red;
//   font-size:3em;

// `
// function App(){
//       return(
//         <Thing>
//            hello world
//         </Thing>
  
//       )
// }


// const Input = styled.input.attrs(props => ({
//   // we can define static props
//   type: "text",

//   // or we can define dynamic ones
//   size: props.size || "1em",
// }))`
//   color: palevioletred;
//   font-size: 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;

//   /* here we use the dynamically computed prop */
//   margin: ${props => props.size};
//   padding: ${props => props.size};
// `;


// function App(){
//         return(
//           <div>
//           <Input placeholder="A small text input" />
//           <br />
//           <Input placeholder="A bigger text input" size="2em" />
//         </div>
//         )
//   }






//rotate
/* 
const Button =styled.button`
  font-size:1em;
  color: ${props => props.theme.main};
  border: 3px solid ${props => props.theme.maim};
  padding: 1em 1em;
  margin: 2em;
  background: white;
`;

Button.defaultProps ={
  theme:{
    main:'red'
  

const theme = {
  main :'green'
} */

/* 
function App(){
  return(
    <div>
      <Button>Normal button</Button>

      <ThemeProvider theme={theme}>
        <Button>Theme button</Button>
      </ThemeProvider>
    </div>
  )
// }  */

// //ThemeProvider //function

// const Button =styled.button`
//   font-size:1em;
//   margin: 2em 1em;
//   padding:0.7em 1em;
//   border-radius:7px;

//   color: ${props => props.theme.fg};
//   border: 2px solid ${props =>props.theme.fg};
//   background: ${props => props.theme.bg};

// `;
// const theme ={
//   fg:'red',
//   bg:'white'
// }

// const invertedTheme = ({fg,bg}) =>({
//   fg:bg,
//   bg:fg
// });


// function App(){
//   return(
//     <ThemeProvider theme={theme}>
//       <div>
//         <Button>Normal button</Button>

//         <ThemeProvider theme={invertedTheme}>
//           <Button>Inverted button</Button>
//         </ThemeProvider>
//       </div>
//     </ThemeProvider>
//   )
// }


//fetch with useEffect Hook
// // function App(){
// // const [state,setState] = useState([])



// function App() {
//   const [state, setState] = useState([])
//   useEffect(() => {
//       fetch("'https://fakestoreapi.com/products/1").then(
//           res => setState(res.data)
//       )
//   },[])
//   return (
//       <>
//           {state.map( d => <div>{d}</div>)}        
//       </>
// //   )
// // }

// function App() {
//   const [state, setState] = useState([])
//   const [hasError, setHasError] = useState(false)
//   useEffect(() => {
//       fetch("/api/data").then(
//           res => {
//           return setState(res.data);
//         }
//       ).catch(err => setHasError(true))
//   }, [])
//   return (
//       <>
//           {hasError? <div>Error occured.</div> : (state.map( d => <div>{d}</div>))}     
//       </>
//   )
//   }

// 1. Import *useState* and *useEffect*
// import React, {useState, useEffect} from 'react';
// import './App.css';

// function App() {
//     // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
//     // We're setting the default value of dogImage to null, so that while we wait for the
//     // fetch to complete, we dont attempt to render the image
//   let [dogImage, setDogImage] = useState(null)

//     // 3. Create out useEffect function
//   useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//         // 4. Setting *dogImage* to the image url that we received from the response above
//     .then(data => setDogImage(data.message))
//   },[])

//   return (
//     <div className="App">
//         {/* 5. Using *dogImage as* the *src* for our image*/}
//     {dogImage && <img src={dogImage}></img>}
//     </div>
//   );
// }


// export default App;
