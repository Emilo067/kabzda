import React from "react";

type AccordionPropsType = {
    titleValue: string,
    onClick: ()=>void,
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        );
}

type AccordionTitlePropsType = {
    title: string,
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return <h2 onClick={props.onClick}>---{props.title}---</h2>
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
