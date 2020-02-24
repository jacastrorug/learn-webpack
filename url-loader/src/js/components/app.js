import React, {useState} from "react";
import Loader from "./loader";

import data from "../data.json";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

function App() {

    const [loaderList, setLoaderList] = useState([]);

    console.log(loaderList);

    const handleClick = () => {
        setLoaderList(data.loaders);
    };

    return (
        <div>
            Que linda aplicación hecha en REACT.js
            <video src={video} width={360} controls poster={logo}/>
            <p>
                <img src={logo} width={40}/>
            </p>
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