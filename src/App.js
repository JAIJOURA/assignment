
import React from 'react';
import './App.css';

function App() {
  return (
   <React.Fragment>
    <div className="container">
<div className="icon">
<div className='flex'>
    <i className='material-icons md-light md-30'>add_box</i>
    <i className='material-icons md-light md-30'>more_horiz</i>
    <i className='material-icons md-light md-30'>toggle_off</i>
    </div>

<div className="location">
  <span className='flex'> <p><i className='material-icons md-light md-18'>near_me</i> NEW YORK, USA</p> <span><i className='material-icons md-light md-18'>light_mode</i> 07:19 </span> </span>
  <span className='flex'> <span>Today 6 July</span>  <span><i className='material-icons md-light md-18'>dark_mode</i> 19:19 </span></span>
</div>
<div className="temp">
  <i className='material-icons md-light md-inactive'>navigate_before</i> <span className='flex'> <span className='tem'>31°</span> <span><i className='material-icons md-light'>light_mode</i> Sunny</span>   </span>  <i className='material-icons md-light md-inactive'>navigate_next</i>
  
  </div>  
   
   <div class="ball"></div>
</div>

      <div className='right-container'>
<div className="heading">
  <div><h3>Welcome Back Isabella!</h3>
<p>Check out today's weather information</p></div>

<div className="right-float">
  <i className='material-icons md-dark md-30'>more_horiz</i>
  <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e435888c985df916c3974375e43cf5ce~c5_720x720.jpeg?x-expires=1688806800&x-signature=XAklheSXy9Za6l%2F9JZBdGGtIY7M%3D" alt="img" />
</div>
</div>
<div className='graph'>
  <div className='flex headinggg'>
<p>Upcoming hours</p>
<div ><span className='opacity'>Rain precipitation
  </span>
<span>Next days</span></div> 
  </div>
  <div className='flex'>
    <span className="little-text dark">Now</span>
    <span className="little-text dark">11:00</span>
    <span className="little-text dark">12:00</span>
    <span className="little-text dark">13:00</span>
    <span className="little-text dark">14:00</span>
    <span className="little-text dark">15:00</span>
    <span className="little-text dark">16:00</span>
    <span className="little-text dark">17:00</span>
  
  </div>
   <div className='flex'>
    <i className='material-icons md-yellow md-18 dark '>sunny</i>
    <i className='material-icons md-yellow md-18 dark'>sunny</i>
    <i className='material-icons md-dark md-18 dark'>cloud</i>
    <i className='material-icons md-dark md-inactive md-18 dark'>cloudy_snowing</i>
    <i className='material-icons md-dark md-18 dark'>cloud</i>
    <i className='material-icons md-yellow md-18 dark'>sunny</i>
    <i className='material-icons md-dark  md-18 dark'>cloud</i>
    <i className='material-icons md-yellow md-18 dark'>sunny</i>
  
  </div>
   <div className='flex'>
    <span className="little-text dark">31°</span>
    <span className="little-text dark">32°</span>
    <span className="little-text dark">34°</span>
    <span className="little-text dark">33°</span>
    <span className="little-text dark">33°</span>
    <span className="little-text dark">32°</span>
    <span className="little-text dark">30°</span>
    <span className="little-text dark">28°</span>
  
  </div>







</div>
<h5>More details of Today's weather</h5>
<div className='bottom-container flex'>
  <div className="box">
    <span className='flex'> <h5>Humidity</h5> <span><i className='material-icons md-blue md-18'>opacity</i></span></span>
 <p className='bold' >82% <span>bad</span> </p> 
 <div className='flex little-text-flex'>
  <span className='little-text'>good</span>
  <span className='little-text' >normal</span>
  <span className='little-text'>bad</span>
 </div>
 <div className='flex'>
  <div className="blue-bar"></div>
  <div className="blue-bar"></div>
  <div className="blue-bar">
    <div className='grey-bar'></div>
  </div>
 </div>
    </div>
  <div className="box">
    <span className='flex'> <h5>Wind</h5> <span><i className='material-icons md-blue md-18'>air</i></span></span>
    <p className='bold'>8 km/h</p>
    <div className='flex'>
      <span className='little-text'>0</span>
      <span className='little-text'>5</span>
      <span className='little-text'>10</span>
      <span className='little-text'>20</span>
      <span className='little-text'>30</span>
      <span className='little-text'>40</span>
</div>
<div className='flex'>
<div className="blue-bar-wind wind"></div>
<div className="blue-bar-wind wind">
  <div className='wind-grey-bar'></div>
</div>
<div className=" wind"></div>
<div className=" wind"></div>
<div className=" wind"></div>
<div className=" wind"></div>
</div>

  </div>
  <div className="box">
    <span className='flex'> <h5>Precipitation</h5> <span><i className='material-icons md-blue md-18'>cloudy_snowing</i></span></span>
    <p className='bold'>1.4 cm</p>
    <div className="flex">
      <span className="little-text">0</span>
      <span className="little-text">10</span>
      <span className="little-text">20</span>
      <span className="little-text">30</span>
      <span className="little-text">40</span>
      <span className="little-text">50</span>
      <span className="little-text">60</span>
      <span className="little-text">70</span>
      <span className="little-text">80</span>
      <span className="little-text">90</span>
    </div>
    <div className="flex">
      <div className="precip precip-blue"></div>
      <div className="precip precip-blue">
        <div className='grey-bar'></div>
      </div>
      <div className="precip"></div>
      <div className="precip"></div>
      <div className="precip"></div>
      <div className="precip"></div>
      <div className="precip"></div>
      <div className="precip"></div>
      <div className="precip"></div>
      <div className="precip"></div>
    </div>
  </div>
  </div> 
  <div className='bottom-container flex'>
  <div className="box">
    <span className='flex'> <h5>UV Index</h5> <span><i className='material-icons md-blue md-18'>sunny</i></span></span>
    <p className='bold' >4 <span>medium</span> </p>
    <div className="flex">
      <span className="little-text">0-2</span>
      <span className="little-text">3-5</span>
      <span className="little-text">6-7</span>
      <span className="little-text">8-10</span>
      <span className="little-text">11+</span>
    </div>
    <div className="flex">
      <div className="uv uv-blue"></div>
      <div className="uv uv-blue">
        <div className='uv-grey'></div>
      </div>
      <div className="uv"></div>
      <div className="uv"></div>
      <div className="uv"></div>
    </div>
  </div>
  <div className="box">
    <span className='flex'> <h5>Feels Like</h5> <span><i className='material-icons md-blue md-18'>device_thermostat</i></span></span>
    <p className='bold'>33°</p>
    <div className="flex">
      <span className="little-text">0°</span>
      <span className="little-text">25°</span>
      <span className="little-text">50°</span>
    </div>
    <div className='feel-blue' >
<div className='feel-grey'></div>
    </div>
    </div>
  <div className="box"> 
 <span className='flex'> <h5>Chances of rain</h5> <span><i className='material-icons md-blue md-18'>thunderstorm</i></span></span>
 <p className='bold'>42%</p>
 <div className="flex">
  <span className="little-text">0%</span>
  <span className="little-text">25%</span>
  <span className="little-text">50%</span>
  <span className="little-text">75%</span>
  <span className="little-text">100%</span>
 </div>
 <div className='feel-blue' >
  <div className='rain-grey'></div>
 </div>
  </div>
  </div> 


        
      </div>
    </div>
   </React.Fragment>
  ); 
}

export default App;
