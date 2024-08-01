import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

export const GlobalStyled = createGlobalStyle`
*{
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
    margin: 0;
    padding: 0;
    font-family: "Oswald";
}

html {
    width: auto;
}

body {
    //background-color: #e6e6e6;
    background-color: #100c0c;
    font-family: 'Newsreader', serif;
}
`;