import React, {useState} from "react";

export type ValuePropsTYpe = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: ValuePropsTYpe,
    onClick: (value: ValuePropsTYpe) => void
}

export function UncontrolledRating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>

            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>

            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>

            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>

            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    );
}

type StarProps = {
    selected: boolean,
    value: ValuePropsTYpe,
    onClick: (value: ValuePropsTYpe) => void
}

function Star(props: StarProps) {

    // if (props.selected === true) {
    //     return <span><b>star</b> </span>
    // } else {
    //     return <span>star </span>
    // }
    return (
        // props.selected === true ? <span><b>star</b> </span> : <span>star </span>
        <span onClick={() => {
            props.onClick(props.value)
        }}>{props.selected ? <b>star</b> : "star"} </span>
    );
}