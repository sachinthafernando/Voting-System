import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
//-----------
* {
	padding: 0%;
	margin: 0%;
	box-sizing: border-box;
	user-select: var(--SubThemeC2);
  margin: 0;
    box-sizing:border-box;
    font-family: 'Montserrat' , sans-Serif;
}

/* ROOT VARIABLES */
*{
	--MainThemeC: #0d1e67;
	--SubThemeC: #ffffff;
	--SubThemeC2: #007afb;
}
//-----------


/* *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Montserrat' , sans-Serif;
    
} */
//--------------------------------------------------------------
html,body{
    /* overflow: hidden; */
    /* height: 100vh; */
  overflow-x: hidden;
    color: white;
  font-weight: 200;
  margin: 0;
  font-size: 1.0rem;
  scroll-behavior: smooth;
  /* overflow: hidden; */
}


//----------- Form Validate Error Message ---------------//
.validate{
  font-size: smaller;
  color: red;
  font-weight: 100;
  width: 235px;
}
.helpicon{
  color: grey;
}
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  top: 12px;
  color: grey;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 150px;
  font-size: 0.8rem;
  font-stretch: condensed;
  background-color: #5db2ea8f;
  color: #04273d;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;
  position: absolute;
  z-index: 1;
  left: 90%;
  /* top: 5%; */
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 45%;
  right: 100%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent #5db2ea8f transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
//...................PersonList Search Bar....................//

.searchBar {
  margin: 5px;
}
.searchButton {
    padding: 10;
}



/*-------------------------------------------------------------*/
/*login page*/

.login-container{
  display:flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 3rem;
  
}
/* .container {
  position: relative;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 2rem;
} */


/*text styles login*/ 
.large {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.lead {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.text-primary {
  color: var(#263238);
}
.p {
  padding: 0.2rem;
}
/*alert for login*/ 
.alert {
  padding: 0.8rem;
  margin: 1rem ;
  position: fixed;
  opacity: 0.9;
  background:#FB7179;
  border-radius: 10px;
  margin-left:40rem;
  color: #333;
  
}
/* Form login*/

.btn {
    background-color: #263238;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    /* margin-left: 40rem; */
    margin-left: 38rem;
    margin-bottom:10rem;
  };
.form .form-group {
  margin: 0.4rem 30rem;

  
  
}

.form .form-text {
  display: block;
  margin-top: 0.3rem;
  color: #000;
  font-size:1.2rem;
  
}

.form input[type="text"],
.form input[type="password"],
.form select,
.form textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 0.8rem;
  border: none; /* Remove the default border */
    box-shadow: 
        inset 0 0 5px rgba(0,0,0,0.1),
        inset 0 3px 2px rgba(0,0,0,0.1);
    border-radius: 3px;
    background: #f9f9f9;
    color: #777;
    transition: color 0.3s ease-out;

  
  
  
}

.form input[type="submit"],
button {
  font: inherit;
}
.particles{
    position:fixed !important;
    left:0;
    top:0;
    width:100%;
    height:100%;
}

/*-----------------------------------------------------------*/
//animated text



.anime-text {
  margin-bottom:0.7rem;
  display:flex;
  min-height:20px;
  align-items:center;
}
.fa-i-cursor {
  color:var(--green);
  font-size:1rem;
  margin-left:0.3rem;
  animation-name:cursor;
  animation-duration:1s;
  animation-iteration-count:infinite;
}
@keyframes cursor {
  from {opacity:1;}
  to {opacity:0;}
}
.anime-text {
  margin-bottom:0.7rem;
  display:flex;
  min-height:20px;
  align-items:center;
  //color:white;
}

a, .a{
  text-decoration: none;
  color:var(--green);
  color:blue;
}
a:hover, .a:hover {
  color:yellow;
  /* text-decoration:underline; */
  text-decoration-color:var(--green);
} */



//-----------------------
.particles {
    position: fixed;
    right: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  
//footer
/*Banner Style*/
.banner {
  padding: calc(120 /1438 * 100vw);
/*   min-height: calc(100vh - 100px);  */
  font-size:2rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  max-width:1000px;
  /* background-color:black; */
}
.hi {
  display:flex;
}
.emoji {
  animation-name:emoji;
  animation-duration:1s;
  animation-iteration-count:infinite;
  animation-direction:alternate;
  margin:0 0 2px 7px;
}
.name h2 {
  font-family:'Catamaran', sans-serif;
  font-weight:800;
  line-height:40px;
  margin:30px 0;
  //color:white;
}
p{
  line-height:30px;
  font-family:"Work Sans", sans-serif;
  font-size:1.2rem;
  margin-bottom:30px;
  //color:white;
}
@keyframes emoji {
  from {transform:rotate(45deg);}
  to {transform:rotate(0deg);}
}
//------------------
/* ================================= ABOUT US PAGE START =================================== */
.AboutPageContainer {
  margin: auto;
	width: 55%;
	display: flex;
	justify-content: space-between;
    color: black;
}

.AboutPageContainer .AboutTitle {
	font-size: 3.6rem;
	margin-bottom: 4rem;
}

.AboutPageContainer .ADetailPara {
	font-size: 1.7rem;
	margin-bottom: 3.8rem;
}

.AboutPageContainer ul {
	margin-bottom: 6rem;
}

.AboutPageContainer ul li {
	font-size: 1.6rem;
	margin-bottom: 2rem;
}

.AUSingleBoxContainer {
	border-radius: 6px;
	background-color: var(--SubThemeC);
	-webkit-box-shadow: 0 0 1.25rem rgb(108 118 134 / 13%);
	box-shadow: 0 0 1.25rem rgb(108 118 134 / 13%);
	margin-bottom: 3.5rem;
  margin-top:3.5rem;
	height: 20.5rem;
	padding: 4.4rem 2rem;
	border: 1px solid rgb(240, 240, 240);
}

.AUSingleBoxContainer::before {
	position: absolute;
	content: "";
	opacity: 0;
	top: 0;
	left: 1.2rem;
	width: 90%;
	height: inherit;
	background: var(--MainThemeC);
	transform: rotate(0deg);
	z-index: -1;
	transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-ms-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	-webkit-transition: all 0.5s ease-in-out;
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	border-radius: inherit;
	transform: rotate(0deg);
}

.AUSingleBoxContainer:hover:before {
	opacity: 1;
	transform: rotate(15deg);
}

.AUSingleBoxContainer h1 {
	color: var(--SubThemeC2);
	font-weight: 400;
	font-size: 4.2rem;
	margin-bottom: 2rem;
}

.AUSingleBoxContainer h3 {
	font-size: 2.5rem;
}

.AboutListIcon {
	color: var(--SubThemeC2);
}

@media screen and (max-width: 998px) {
	.AboutUS-RSideContainer {
		margin-top: 5rem;
	}
}
//-----------------
/* =========== SCROLL TO TOP BTN START ============= */
.back-to-top .top {
	z-index: 999;
	position: fixed;
	color: var(--SubThemeC);
	background: var(--MainThemeC);
	bottom: 120px;
	right: 10px;
	font-size: 3rem;
	width: 5rem;
	height: 5rem;
	text-align: center;
	border-radius: 10px;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	display: none;
	cursor: pointer;
	transition: 0.6s;
}

.ShowHideBtn .top {
	display: block !important;
	transition: 0.6s;
	-webkit-animation: slide-in-fwd-bottom 0.8s
		cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	animation: slide-in-fwd-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-fwd-bottom {
	0% {
		-webkit-transform: translateZ(-1400px) translateY(800px);
		transform: translateZ(-1400px) translateY(800px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateZ(0) translateY(0);
		transform: translateZ(0) translateY(0);
		opacity: 1;
	}
}
@keyframes slide-in-fwd-bottom {
	0% {
		-webkit-transform: translateZ(-1400px) translateY(800px);
		transform: translateZ(-1400px) translateY(800px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateZ(0) translateY(0);
		transform: translateZ(0) translateY(0);
		opacity: 1;
	}
}

/* =========== SCROLL TO TOP BTN END ============= */


  
//-------clock-----------
.clock-container {
    font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    font-size: 2rem;
    display: flex;
    position: absolute;
    margin-left: 50%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    transform: translate(-50%, -50%);
    color: #daf6ff;
    }
    
    .clock {
      width: max-content;
      font-size: 2.0rem;
      letter-spacing: 4px;
      text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.7),
        -1px -1px 2px rgba(0, 0, 0, 0.3);
    }
//------------map css-----------
/* start Map css */

/* .root {
    overflow: hidden;
} */

.paper {
    /* width: 50%; */
    height: 800px;
    margin: 30px 10px 10px 10px;
    padding: 20px;
}

.parent {
    position: relative;
    height: 1000;
    width: 1000;
}

.mapDist {
    width: 600px;
    height: 800px;
    margin: auto;
    /* transform: scale(0.6); */
    stroke: #ffffff; 
    stroke-linecap: round; 
    stroke-width: 2;
}

.B{
    fill: #cc1100;
    stroke: snow;
    stroke-width: 1px;
    transition: fill 0.3s;
    
}

.B:hover {
    fill: orange;
    cursor: pointer;
}

.mapDiv {
    width: 600px;
    height: 800px;
    margin: auto;
    /* transform: scale(0.6); */
    stroke: #ffffff; 
    stroke-linecap: round; 
    stroke-width: 2;
}

.A{
    fill: #cc1100;
    opacity: 0.6;
    stroke: white;
    stroke-width: 1px;
    transition: fill 0.3s;
    
}

.A:hover{
    fill: orange;
    cursor: pointer;
    /* stroke-width: 2px;
    -webkit-transform:scale(1.01); */
}

.overlay{
    position: absolute;
    display: block;
    visibility: hidden;
    /* transition: cubic-bezier(0.98, 0.06, 0.14, 0.99); */
    width: 680px;
    height: 750px;
    top: 80px;
    left: 30px;
    right: 0;
    bottom: 0;
    background-color: #ffffffc9;
}

.district{
    transform: scale(4.5);
    display: block;
    margin-top: 300px;
    margin-left: 300px;
    width: 120px;
    height: 120px;
    animation: 750ms 1 forwards disAnime;
    /* animation-play-state: running; */
}
.district path:hover{
    fill: orange;
    cursor: pointer;
}
.district g:hover{
    fill: orange;
    cursor: pointer;
}

/* .districtAnime{
    animation: 1s 1 forwards disAnime;
} */
@keyframes disAnime {
    0%   {opacity: 0; transform: scale(0.5);}
    100% {opacity: 1;transform: scale(4.5);}
  }


/* @keyframes disAnime {
    0%   {background: red; left: 0px; top: 0px;}
    25%  {background: yellow; left: 200px; top: 0px;}
    50%  {background: blue; left: 200px; top: 200px;}
    75%  {background: green; left: 0px; top: 200px;}
    100% {background: red; left: 0px; top: 0px;}
  } */

  /* End Map CSS */

  /* Start HeaderBar CSS */

  main {
    background: #9869a3;
    grid-area: main;
    overflow-y: auto;
  }
  
  .main__container {
    padding: 20px 35px;
  }
  
  .main__title {
    display: flex;
    align-items: center;
  }
  
  .main__title > img {
    max-height: 100px;
    object-fit: contain;
    margin-right: 20px;
  }
  
  .main__greeting > h1 {
    font-size: 24px;
    color: #4d0741;
    margin-bottom: 5px;
  }
  
  .main__greeting > p {
    font-size: 14px;
    font-weight: 700;
    color: #a5aaad;
  }
  
  .main__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin: 20px 0;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 110px;
    padding: 25px;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 5px 5px 13px #555151, -5px -5px 13px #7a6e6e;
  }
  
  .card_inner {
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .card_inner > span {
    font-size: 20px;
  }
  /* End HeaderBar CSS */

  /* Start ChartBar CSS */
  .charts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 50px;
  }
  
  .charts__left {
    padding: 25px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 5px 5px 13px #555151, -5px -5px 13px #7a6e6e;
  }
  
  .charts__left__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .charts__left__title > div > h1 {
    font-size: 24px;
    color: #2e4a66;
    margin-bottom: 5px;
  }
  
  .charts__left__title > div > p {
    font-size: 14px;
    font-weight: 700;
    color: #a5aaad;
  }
  
  .charts__left__title > i {
    color: #ffffff;
    font-size: 20px;
    background: #cf4fcf;
    border-radius: 200px 0px 200px 200px;
    -moz-border-radius: 200px 0px 200px 200px;
    -webkit-border-radius: 200px 0px 200px 200px;
    border: 0px solid #000000;
    padding: 15px;
  }
  
  .charts__right {
    padding: 25px;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 5px 5px 13px #555151, -5px -5px 13px #7a6e6e;
  }
  
  .hr.new {
    border: 1px solid;
  }
  
  .table_style{
    border: 1px solid black;
  }
  
  .charts__right__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .charts__right__title > div > h1 {
    font-size: 24px;
    color: #2e4a66;
    margin-bottom: 5px;
  }
  
  .charts__right__title > div > p {
    font-size: 14px;
    font-weight: 700;
    color: #04273d;
  }
  
  .charts__right__title > i {
    color: #ffffff;
    font-size: 20px;
    background: #39447a;
    border-radius: 200px 0px 200px 200px;
    -moz-border-radius: 200px 0px 200px 200px;
    -webkit-border-radius: 200px 0px 200px 200px;
    border: 0px solid #000000;
    padding: 15px;
  }
  
  .charts__right__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
  }
  
  
  
  @media only screen and (max-width: 855px) {
    .main__cards {
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 0;
    }
  
    .charts {
      grid-template-columns: 1fr;
      margin-top: 30px;
    }
  }

  .rowScroll{
    position: absolute;
    overflow-y:scroll;
    height: 350px;
  }
  /* End ChartBar CSS */
  .v1{
    border-right : 1px solid black;
    align-items: right;
  }
//------------------------
`;

export  default GlobalStyle;