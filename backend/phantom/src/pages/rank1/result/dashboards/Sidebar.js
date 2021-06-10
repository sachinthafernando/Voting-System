import "./Sidebar.css";
import React,{Component} from "react";
import { Link} from 'react-router-dom';



class Sidebar extends Component {

 componentDidMount (){

  //  btn.onclick = function() {
  //    sidebar.classList.toggle("active");
  //    if(btn.classList.contains("bx-menu")){
  //      btn.classList.replace("bx-menu" , "bx-menu-alt-right");
  //    }else{
  //      btn.classList.replace("bx-menu-alt-right", "bx-menu");
  //    }
  //  }
  //  searchBtn.onclick = function() {
  //    sidebar.classList.toggle("active");
  //  }
  }



render(){
  return (
<div>
  {/* Created By CodingLab - www.codinglabweb.com */}
  <meta charSet="UTF-8" />
  {/*<title> Responsive Sidebar Menu  | CodingLab </title>*/}
  <link rel="stylesheet" href="style.css" />
  {/* Boxicons CDN Link */}
  <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className="sidebar">
    <div className="logo_content">
      <div className="logo">
       
      </div>
     
    </div>
    <ul className="nav_list">


      <li>
      <Link to="/">
        <i class='bx bxs-home' />
          <span className="links_name">Home</span>
          </Link>
        <span className="tooltip">Home Page</span>
      </li>

      <li>
        <a href="#PartyResultView">
        <i className='bx bxs-pie-chart-alt-2'></i>
          <span className="links_name">Party Result</span>
        </a>
        <span className="tooltip">Party Result</span>
      </li>
     
      <li>
        <a href="#CanResultView">
        <i className='bx bxs-face'></i>
          <span className="links_name">Candidate Result</span>
        </a>
        <span className="tooltip">Candidate Result</span>
      </li>
       <li>

       
        <a href="#ptyWiseCan">
        <i class='bx bxs-category-alt'></i>
          <span className="links_name">Party Wise</span>
        </a>
        
        <span className="tooltip">Party Wise</span>
      </li> 
     
    </ul>

  </div>

</div>


  )};
}

  export default Sidebar;