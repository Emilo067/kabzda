import React, {useState} from 'react';


type OnOffPropsType = {
    onChange: (on: boolean) => void
}

function OnOff(props: OnOffPropsType) {

    // let on = false;

    let[on, setOn] = useState<boolean>(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {setOn(true)
                props.onChange(true)}}>ON</div>
            <div style={offStyle} onClick={() => {setOn(false)
                props.onChange(false)}}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default OnOff












































//
// type OnOffPropsType = {
//     onOff: boolean,
// }
//
//
//
// export const OnOff: React.FC<OnOffPropsType> = (props) => {
//     return (
//         <div style={{display:"flex"}}>
//             <On on={props.onOff}/>
//             <Off off={props.onOff}/>
//             <Lamp active={props.onOff}/>
//         </div>
//     );
// };
//
// const On = (props: {on: boolean}) => {
//
//     if(props.on) {
//         return (
//             <div style={{border:"1px solid black", width:"100px", height:"100px", backgroundColor:"green"}}>ON</div>
//         );
//     } else {
//         return (
//             <div style={{border:"1px solid black", width:"100px", height:"100px"}}>ON</div>
//         );
//     }
// }
//
// const Off = (props: {off: boolean}) => {
//    if(!props.off) {
//        return (
//        <div style={{border:"1px solid black", width:"100px", height:"100px", backgroundColor:"red"}}>OFF</div>
//        );
//    } else {
//        return (
//            <div style={{border:"1px solid black", width:"100px", height:"100px"}}>OFF</div>
//        );
//    }
// }
//
// const Lamp = (props: {active: boolean}) => {
//     if(props.active) {
//         return <div style={{marginLeft:"15px", border:"1px solid black", borderRadius:"100%", width:"100px", height:"100px", backgroundColor:"green"}}></div>
//     } else {
//         return <div style={{marginLeft:"15px", border:"1px solid black", borderRadius:"100%", width:"100px", height:"100px",backgroundColor:"red"}}></div>
//     }
//
// }
