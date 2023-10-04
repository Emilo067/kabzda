import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    const[collapsed, setCollapsed] = useState(false);

    console.log("Accordion rendered")
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>
                {!collapsed && <AccordionBody/>}
            </div>
        );
}

type AccordionTitlePropsType = {
    title: string,
    onClick: ()=>void,
}

function AccordionTitle(props: AccordionTitlePropsType) {

    const onClickHandler = () => {props.onClick()};

    return <h2 onClick={onClickHandler}>---{props.title}---</h2>
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
