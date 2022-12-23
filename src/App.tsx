import React from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff'
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontroledAccordion";

/*check commits*/

function App() {
    return (
        /*<div>
            <Title title={"Hello, my dear friend!"}/>
            <Title title={"Something interesting"}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>*/
        <div className={'App'}>
            <OnOff />
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={'Menu'}/>
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
