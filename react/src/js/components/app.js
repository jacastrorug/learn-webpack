import React, {useState} from "react";
import Loader from "./loader";

import data from "../data.json";


function App() {

    const [loaderList, setLoaderList] = useState([]);

    console.log(loaderList);

    const handleClick = () => {
        setLoaderList(data.loaders);
    };

    return (
        <div>
            Que linda aplicación hecha en REACT.js 
            <ul>
                {
                    loaderList.map((item) => {
                        return <Loader {...item} key={item.id}></Loader>
                    })
                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
        </div>
    );
}

export default App;