import React, { useState } from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff'
//import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontroledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

/*check commits*/

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        /*<div>
            <Title title={"Hello, my dear friend!"}/>
            <Title title={"Something interesting"}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>

        </div>*/
        <div className={'App'}>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

/*type TitlePropsType = {
    title: string;
}
function Title(props: TitlePropsType) {
    console.log("Title rendering")
    return (
        <div>{props.title}</div>
    )
}*/


export default App;
