import React, { useState, useRef } from 'react';
import WelcomeMessage from "./components/WelcomeMessage"
import generateMessage from "./utilities/generateMessage"

export default function App() {
    
    const buttonRef = useRef(null);

    const [userData, setUserData] = React.useState({
	    hasEntered: false,
	    pageLoadTime: new Date(),
	    entranceTime: undefined,
	    clickCoordinates: { offsetX: undefined, offsetY: undefined },
    })
   

    if (userData.hasEntered) {
        generateMessage(userData)
    }
    
    function handleButtonClick() {
        
        const currentTime = new Date()

        const x = event.clientX - event.target.getBoundingClientRect().left;
        const y = event.clientY - event.target.getBoundingClientRect().top;
        
        setUserData({...userData, 
            hasEntered: true,
            entranceTime: currentTime,
            clickCoordinates: { offsetX: x, offsetY: y}, 
        })
    }

/* Challenge
  
     This retro VR app needs an "enter" button! The button should be set up as follows:
     
        1. If the user clicks the button, the values of the userData state's properties should 
           become the following: 
           
           	                  Property		 	          Value(s)					  
			            ╷--------------------╷----------------------------------╷
		  	            |  hasEntered        |	true                            |
			            |--------------------|----------------------------------|
			            |  pageLoadTime      |	perserve previous value         |
			            |--------------------|----------------------------------|
			            |  entranceTime      |	new date object                 |	
                        |--------------------|----------------------------------|
			            |  clickCoordinates  |	object containing click event's |
                        |                    |  offsetX and offsetY values      |	
			            ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
                        		         
        2. If you complete these tasks correctly, you should get a button with some retro, glitchy 
           visual effects, and you should get a correctly rendered message in the console!
 */
  
  return (
    <div>        
    
            <button 
                disabled={userData.hasEntered }
                className={userData.hasEntered ? "activated" : "unactivated"}
                onClick={handleButtonClick}
                ref={buttonRef}
            >
                {userData.hasEntered ? "Connecting" : "Enter"}
            </button>      
      
      <WelcomeMessage userData={userData} />
    </div>
  )
}
