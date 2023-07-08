import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import tindog1 from "../images/tindog-1.png";
import tindog2 from "../images/tindog-2.png";
import tindog3 from "../images/tindog-3.png";
import tindog4 from "../images/tindog-4.png";
import keeper1 from "../images/keeper1.png";
import keeper2 from "../images/keeper2.png";
import keeper3 from "../images/keeper3.png";
import blog1 from "../images/blog-1.png";
import blog2 from "../images/blog-2.png";
import blog3 from "../images/blog-3.png";
import dice1 from "../images/dice-1.png";
import dice2 from "../images/dice-2.png";
import dice3 from "../images/dice-3.png";
import news1 from "../images/news-1.png";
import news2 from "../images/news-2.png";
import news3 from "../images/news-3.png";
import sg1 from "../images/simonsgame-1.png";
import sg2 from "../images/simonsgame-2.png";
import sg3 from "../images/simonsgame-3.png";
import td1 from "../images/todolist-1.png";
import td2 from "../images/todolist-2.png";
import td3 from "../images/todolist-3.png";
import './styles.css';
import 'swiper/css/pagination';
const Webdskills = () => {
  return (
   <div>   <div class="row">
        <div class="col-lg-4 col-md-6">
          <h2>Tindog </h2>
          <p>Responsive front-end project using Bootstrap and media query. Carousel,navbar and grid system are
            implemented.</p>
          <h3>HTML, CSS</h3>
          <a href="https://github.com/himani18dua/Tindog.git">Github <i class="fa-solid fa-link"></i></a>

          <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
    >
      <SwiperSlide><img class="snippet" src={tindog1}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={tindog2}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={tindog3}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={tindog4}></img></SwiperSlide>
    </Swiper>
    </div>
        <div class="col-lg-4 col-md-6">
          <h2>Keeper-App</h2>
          <p>This is a note-taking app made using React. The user can add or delete notes by simply clicking on the button.</p>
          <h3>HTML, CSS, React</h3>
          <a href="https://github.com/himani18dua/Keeper-app.git">Github <i class="fa-solid fa-link"></i></a>

          <Swiper
           effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
    >
       <SwiperSlide><img class="snippet" src={keeper1}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={keeper2}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={keeper3}></img></SwiperSlide>

    </Swiper>
    </div>
        <div class="col-lg-4 col-md-6">
          <h2>Simons game</h2>
          <p>Childhood game implemented-The user has to repeat the pattern along with newly pressed button from the
            initial step.</p>
          <h3>HTML, CSS, Javascript</h3>
          <a href="https://github.com/himani18dua/Simon-s-Game.git">Github <i class="fa-solid fa-link"></i></a>
          <Swiper
           effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
    >
      <SwiperSlide><img class="snippet" src={sg1}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={sg2}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={sg3}></img></SwiperSlide>
    </Swiper>
    </div></div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <h2>Newsletter-signup</h2>
            <p>This collects emails and related info and post it to Mailchimp using API references.It is used in
              newsletter-signup pages.</p>
            <h3>HTML, CSS, Node.js, Express</h3>
            <a href="https://github.com/himani18dua/Newsletter-signup.git">Github <i class="fa-solid fa-link"></i></a>
            <Swiper
              effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
    >
      <SwiperSlide><img class="snippet" src={news1}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={news2}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={news3}></img></SwiperSlide>
    </Swiper>
    </div>
          <div class="col-lg-4 col-md-6">
            <h2>To-do list</h2>
            <p>User-friendly to-do list to record the tasks that are to be done or have been done.It separates tasks
              into work and daily tasks.</p>
            <h3>HTML, CSS, Node.js, Express</h3>
            <a href="https://github.com/himani18dua/To-do-list.git">Github <i class="fa-solid fa-link"></i></a>
            <Swiper
             effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
    >
    <SwiperSlide><img class="snippet" src={td1}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={td2}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={td3}></img></SwiperSlide>

    </Swiper>
    </div>
          <div class="col-lg-4 col-md-6">
            <h2>Blog-Website</h2>
            <p>User can search and add blogs dynamically on the home page.Using Lodash package, searching can be done in
              any case.</p>
            <h3>Node.js, Express, EJS</h3>
            <a href="https://github.com/himani18dua/Blog-website.git">Github <i class="fa-solid fa-link"></i></a>

            <Swiper
             effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
    >
      <SwiperSlide><img class="snippet" src={blog1}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={blog2}></img></SwiperSlide>
      <SwiperSlide><img class="snippet" src={blog3}></img></SwiperSlide>
    </Swiper>
            </div>
          </div>
   </div>
  )
}

export default Webdskills;
