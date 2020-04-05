import React from 'react';

const Slide = () =>{
  return(
    <div>
slide
<div id="demo" class="carousel slide" data-ride="carousel">

  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://source.unsplash.com/collection/1" alt="Los Angeles" width="1100" height="500" />
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/collection/2" alt="Chicago" width="1100" height="500" />
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/collection/3" alt="New York" width="1100" height="500" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
    </div>
  )
}

export default Slide;