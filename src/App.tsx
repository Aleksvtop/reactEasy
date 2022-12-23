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

        </div>*/
        <div className={'App'}>
            <OnOff />
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Rating />
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
