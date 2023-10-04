import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating, ValuePropsTYpe} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";

//function declaration
function App() {
    //полезное что-то

    const[value, setValue] = useState<ValuePropsTYpe>(0);
    const[collapsed, setCollapsed] = useState(false);
    const[on, setOn] = useState(false);

    //обязана вернуть jsx
    return (
        <div className="App">
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}
        </div>
    );
}

function PageTitle(props: any) {
    console.log("AppTitle rendered");
    return <h1>{props.title}</h1>

}
export default App;
