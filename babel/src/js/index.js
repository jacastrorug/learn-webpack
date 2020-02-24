import "../css/index.css";

import search from "./search";
import render from "./render";

const id = prompt("Quien es ese Pokemon");

search(id)
  .then((pokemon) => {
      console.log(pokemon);
      render(pokemon);
  })
  .catch((error) => {
      console.log(error);
      console.error('No hubo pokemon');
  });

/*
import text from './text';
text();
if (module.hot) {
    module.hot.accept("./text.js", function() {
        console.log('Se esta ajustando....');
        text();
    });
}
*/
