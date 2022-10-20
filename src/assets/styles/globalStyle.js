import { createGlobalStyle } from "styled-components";
import { baseColor } from "../../constants/colors";


const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
* {
    box-sizing: border-box;
	
}
body {
	line-height: 1;
    font-family: 'Lexend Deca', sans-serif;
    background-color: ${baseColor};
    
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input {
    width: 300px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    background-color: white;
    margin: 5px 0 ;
	font-family: 'Lexend Deca', sans-serif;
}
button {
    border-radius: 5px;
    background-color: #52b6ff;
    color: white;
	font-family: 'Lexend Deca', sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&family=Playball&family=Recursive:wght@400;700&family=Righteous&display=swap');`

export default GlobalStyle;
