import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

type AccordionTitlePropsType = {
    title: string
}


export const UncontrolledAccordion = (props: AccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(false)
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={onClickHandler}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
    )
}


const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

