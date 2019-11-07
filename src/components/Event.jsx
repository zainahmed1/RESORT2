import React from 'react';
import './Event.css';

function Event() {

    
    let countDownDate = new Date("NOV 16, 2019 04:00:00").getTime();
    
    let x = setInterval(function () {
    
        let now = new Date().getTime();
    
        let distance = countDownDate - now;
    
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.querySelector("em").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
    
        }
    }, 1000);
    

    return (
<main>
    <div className="div"> 
      <div className="hallowen">
          <div></div>
          <div className="time">
          <ol>
          <li>
              <em id="demo"></em>
          </li>
        </ol>
          </div>
          <div>
          {/* <a data-pin-do="embedPin" data-pin-terse="true" href="https://www.pinterest.com/pin/519884350736291513/"></a> */}
          </div>
      </div>	
      </div>
</main>
    );
}

export default Event;