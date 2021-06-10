import { CenterFocusStrong } from "@material-ui/icons";
import React from "react";


    const ProgressBarMin = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 12,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 8,
      margin: 0,
      Align : 'left'
    }

    // const containerStylesMin = {
    //   height: 11,
    //   width: '100%',
    //   backgroundColor: "#e0e0de",
    //   borderRadius: 8,
    //   margin: 0,
    //   Align : 'left'
    // }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 8,
      textAlign: 'right',
      
    }
  
    const labelStyles = {
      padding: 10,
      color: 'white',
      fontWeight: 'bold',
      position : 'relative',
      textAlign : 'center',
      top:6,
    }

 
  
    return (
       <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}
          </span>
        </div>
       </div>
    );
  };
  
  export default ProgressBarMin;