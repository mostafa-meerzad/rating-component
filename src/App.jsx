// import React, { useState } from "react";
// // import {useEffect} from 'react'
// // import {Accordion} from "react-headless-accordion";
// // import 'react-accessible-accordion/dist/fancy-example.css';
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";
// // import "react-a"
// import "./style.css";
// import { motion } from "framer-motion";
// // import AccordionItemButtonWrapper from "react-accessible-accordion/dist/types/components/AccordionItemButton";
// const App = () => {
//   // useEffect(() => {
//   //   console.log('useEffect called ');
//   //   fetch("http://localhost:3000/posts").then(res=>res.json()).then((data) => {
//   //     console.log(data[0]);
//   //   })
//   // })

//   const [test, setTest] = useState(0);
//   const handleChange = (e) => {
//     setTest(e.target.value);
//   };
//   // return (<Accordion className={"my-accordion"} allowZeroExpanded={true}>
//   //     <AccordionItem className={"my-accordion__item"} activeClassName={"active"}>
//   //         <h2>Accordion Item</h2>

//   //         <AccordionItemButton className={"my-accordion__button"}>
//   //             accordion button
//   //         </AccordionItemButton>

//   //         <AccordionItemPanel className="my-accordion__panel">
//   //             <p>
//   //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
//   //                 accusamus ad architecto deleniti dicta id illo illum, in minima modi
//   //                 necessitatibus pariatur velit voluptates. A accusamus commodi eaque
//   //                 libero non omnis vel veniam voluptatem? Architecto aut cupiditate
//   //                 delectus dolor doloribus ex exercitationem, facilis incidunt iure,
//   //                 nesciunt non, praesentium provident quo sit temporibus? Ab,
//   //                 consequuntur culpa dicta harum incidunt ipsum mollitia quas repellat
//   //                 sequi? Ad autem commodi, consectetur debitis delectus eos
//   //                 exercitationem illum incidunt ipsam ipsum libero magni nesciunt
//   //                 nihil officia perferendis qui quisquam quos repellendus saepe
//   //                 voluptate? Alias asperiores autem dolorem iusto, modi nulla odit
//   //                 officiis perspiciatis repellat soluta tempora.
//   //             </p>
//   //         </AccordionItemPanel>
//   //     </AccordionItem>
//   //     <AccordionItem className={"my-accordion__item"} activeClassName={"active"}>

//   //         <h2>Accordion Item</h2>

//   //         <AccordionItemButton className={"my-accordion__button"}>
//   //             accordion button
//   //         </AccordionItemButton>

//   //         <AccordionItemPanel className="my-accordion__panel">
//   //             <p>
//   //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
//   //                 accusamus ad architecto deleniti dicta id illo illum, in minima modi
//   //                 necessitatibus pariatur velit voluptates. A accusamus commodi eaque
//   //                 libero non omnis vel veniam voluptatem? Architecto aut cupiditate
//   //                 delectus dolor doloribus ex exercitationem, facilis incidunt iure,
//   //                 nesciunt non, praesentium provident quo sit temporibus? Ab,
//   //                 consequuntur culpa dicta harum incidunt ipsum mollitia quas repellat
//   //                 sequi? Ad autem commodi, consectetur debitis delectus eos
//   //                 exercitationem illum incidunt ipsam ipsum libero magni nesciunt
//   //                 nihil officia perferendis qui quisquam quos repellendus saepe
//   //                 voluptate? Alias asperiores autem dolorem iusto, modi nulla odit
//   //                 officiis perspiciatis repellat soluta tempora.
//   //             </p>
//   //         </AccordionItemPanel>

//   //     </AccordionItem>
//   //     <AccordionItem className={"my-accordion__item"} activeClassName={"active"}>
//   //         <h2>Accordion Item</h2>

//   //         <AccordionItemButton className={"my-accordion__button"}>
//   //             accordion button
//   //         </AccordionItemButton>

//   //         <AccordionItemPanel className="my-accordion__panel">
//   //             <p>
//   //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
//   //                 accusamus ad architecto deleniti dicta id illo illum, in minima modi
//   //                 necessitatibus pariatur velit voluptates. A accusamus commodi eaque
//   //                 libero non omnis vel veniam voluptatem? Architecto aut cupiditate
//   //                 delectus dolor doloribus ex exercitationem, facilis incidunt iure,
//   //                 nesciunt non, praesentium provident quo sit temporibus? Ab,
//   //                 consequuntur culpa dicta harum incidunt ipsum mollitia quas repellat
//   //                 sequi? Ad autem commodi, consectetur debitis delectus eos
//   //                 exercitationem illum incidunt ipsam ipsum libero magni nesciunt
//   //                 nihil officia perferendis qui quisquam quos repellendus saepe
//   //                 voluptate? Alias asperiores autem dolorem iusto, modi nulla odit
//   //                 officiis perspiciatis repellat soluta tempora.
//   //             </p>
//   //         </AccordionItemPanel>
//   //     </AccordionItem>
//   // </Accordion>

//   // <form action="#">
//   //     <h1>a form for testing purposes</h1>
//   //     <h2>{window.innerWidth}</h2>
//   //     {/*<div className="box"/>*/}
//   //     <label htmlFor="test">enter your value</label>
//   //     <input type="number" name="testValue" id="test" value={test} min={10} max={100} placeholder={"$"}
//   //            onChange={handleChange}/>
//   //     <input type="submit" value="continue"/>
//   // </form>

//   // );

//   // return <motion.div  >lorem</motion.div>;

//   return <AnimateText/>
// };

// export default App;



import AnimateText from "./framerMotion/AnimateText"
import "./App.css"


const App = ()=>{
  return <AnimateText/>
}

export default App