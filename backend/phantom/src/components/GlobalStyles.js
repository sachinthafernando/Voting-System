import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Montserrat' , sans-Serif;
}
html,body{
    overflow-x: hidden;
}
/*-------------------------------------------------------------*/
/*login page*/
.container {
  position: relative;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 2rem;
}
/*text styles login*/ 
.large {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.lead {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.text-primary {
  color: var(#263238);
}
.p {
  padding: 0.5rem;
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
    margin-left: 25rem;
    margin-bottom:10rem;
  };
.form .form-group {
  margin: 1.2rem 10rem;
  
  
}

.form .form-text {
  display: block;
  margin-top: 0.3rem;
  color: #888;
 
}

.form input[type="text"],
.form input[type="password"],
.form select,
.form textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  
}

.form input[type="submit"],
button {
  font: inherit;
}

/*-----------------------------------------------------------*/


`;
export  default GlobalStyle;