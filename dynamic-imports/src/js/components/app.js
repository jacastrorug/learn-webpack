import React, {useState} from "react";
import Loader from "./loader";

import data from "../data.json";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

import "../../sass/sass.scss";
import "../../less/less.less";
import "../../stylus/stylus.styl";

function App() {

    const [loaderList, setLoaderList] = useState([]);

    console.log(loaderList);

    async function handleClick() {
        setLoaderList(data.loaders);
        const {alerta} = await import("./alert.js");
        alerta('Omg, este módulo ha cargado dinámicamente');
    };

    return (
        <div>
            <p className="sass">
                Esto es sass
            </p>
            <p className="less">
                Esto es less
            </p>
            <p className="stylus">
                Esto es stylus
            </p>
            <p className="post-css">
                Esto es post css
            </p>
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