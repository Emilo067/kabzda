import React, {useState} from "react";

export type ValuePropsTYpe = 0 | 1 | 2 | 3 | 4 | 5
export function UncontrolledRating() {

    const[value, setValue] = useState<ValuePropsTYpe>(0)

    return (
        <div>
            <Star selected={value > 0} onClick={()=>setValue(1)}/>

            <Star selected={value > 1} onClick={()=>setValue(2)}/>

            <Star selected={value > 2} onClick={()=>setValue(3)}/>

            <Star selected={value > 3} onClick={()=>setValue(4)}/>

            <Star selected={value > 4} onClick={()=>setValue(5)}/>
        </div>
    );
}

type StarProps = {
    selected: boolean,
    onClick: () => void
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
            props.onClick()
        }}>{props.selected ? <b>star</b> : "star"} </span>
    );
}