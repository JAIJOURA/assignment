
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
  <img src="data:image/jpeg;base64,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" alt="img" />
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
