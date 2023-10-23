import "./App.css";
import logo from './images/JK 1.png'
import pic from './images/JOHN PIC.png'
import gitHub from './images/Github (1).svg'
import linkedIn from './images/Linkedin.svg'
import discord from './images/Discord.svg'
import telegram from './images/Telegram.svg'
import email from './images/Email.svg'
import zigzag from './images/zigzags 1.png'
import cross from './images/plus 1.png'
import circle from './images/circle 1.png'
import cube from './images/cube 1.png'
import cpp from './images/C++-preview 1.png'
import react from './images/Untitled-1 1.png'


import javascriptLogo from './images/JavaScript-logo 1.png'
import cssTailwind from './images/tailwindcss-templates 1.png'
import htmlpic from './images/html51 1.png'

import myntraClone from './images/myntraClonePic.jpg'
import netflixClone from './images/netflixClonePic.png'
import weatherApp from './images/weatherApp.png'
import imageSearch from './images/imageSearch.png'
import digitalMarketing from './images/digitalMarketing.png'
import resume from './pdf/My_Resume .pdf'
import portfolio from './images/myporfolio.png'

import emailjs from 'emailjs-com';
import React, { useState } from "react";


function App() {
  return (
    <div className="wrapper">
      <div className="content">
        {/* Header */}
        <div className="header">

          <div className="headerLeft">
            <div className="logo"><img src={logo} className="jklogo"></img></div>
            <div className="Name">JOHN KHORE</div>

          </div>

          <div className="headerRight">
            <div className="home"><a href="#Home">Home</a></div>
            <div className="home"><a href="#Skills">Skills</a></div>
            <div className="home"><a href="#Projects">Projects</a></div>
            <div className="home"><a href="#AboutMe">AboutMe</a></div>
            <div className="home"><a href="#ContactMe">ContactMe</a></div>

          </div>

        </div>

        {/* line */}
        {/* <div className="line">a</div> */}
        {/* lineEnd */}
        
        {/* First Section */}

        <div className="sectionOne "  id="Home">
            <div className="mypic">
              <img className="pic" src={pic} ></img>
              <div className="floatingIcons">
              <img className="floatIcon zigzag" src={zigzag}></img>
              <img className="floatIcon cross" src={cross}></img>
              <img className="floatIcon circle" src={circle}></img>
              <img className="floatIcon cube" src={cube}></img>
              </div>

            </div>

            <div className="leftsectionOne">
              <div className="myself">I’m John Khore, budding <span className="colorDiff">software developer</span>, currently a  student of 
              Information Technology at UIET,PU Chandigarh</div>
              <div className="marginright">
                <div className="cvDiv"><a href={resume} download ><button className="cvDown">DOWNLOAD RESUME</button></a></div>
                <div className="icons cvDiv">
                  {/* <img src={gitHub}></img> */}
                  <a href="https://github.com/johnkhore5911" target="_blank"> <img src={gitHub}></img> </a>
                  <a href="https://www.linkedin.com/in/john-khore-6b11471b9/" target="_blank"> <img src={linkedIn}></img> </a>
                  <a href="https://discordapp.com/users/john_41010" target="_blank"> <img src={discord}></img> </a>
                  <a href="https://t.me/YourTelegramUsername" target="_blank"> <img src={telegram}></img> </a>
                  <a href="mailto:johnkhore26@gmail.com" target="_blank"> <img src={email}></img> </a>

               
                </div>
              </div>
              
            </div>
        </div>


        {/* line */}
        <div className="line margin"></div>
        <div className="linex1 margin"></div>

        {/* lineEnd */}

        {/* Second Section */}
        <div className="sectionTwo " id="Skills">
          <div className="skillStyle">SKILLS:</div>
          <div className="gridSection">


            <div>
              <div className="boxLang">
                <div className="Lang stylecss1">Languages</div>
                <div className="LangLine"></div>
                <div className="textColor">
                  <div className="stylecss">JavaScript</div>
                  <div className="stylecss">C++</div>
                  <div className="stylecss1">C</div>
                </div>
              </div>
            </div>

            <div>
              <div className="boxLang">
                  <div className="Lang stylecss">Databases</div>
                    <div className="LangLine"></div>
                      <div className="textColor">
                        <div className="stylecss">SQL</div>
                      </div>
              </div>
            </div>


            <div>
              <div className="boxLang">
                  <div className="Lang stylecss1">Tools</div>
                    <div className="LangLine"></div>
                      <div className="textColor">
                        <div className="stylecss">VSCode</div>
                        <div className="stylecss">FIGMA</div>
                        <div className="stylecss1">GIT</div>

                      </div>
              </div>
            </div>

            <div className="Jsimg"><img src={javascriptLogo}></img></div>





            <div>
                <div className="boxLang">
                      <div className="Lang stylecss">Other</div>
                        <div className="LangLine"></div>
                          <div className="textColor">
                            <div className="stylecss">HTML</div>
                            <div className="stylecss">CSS</div>
                            {/* <div>Git</div> */}
                          </div>
                </div>
            </div>

            <div>
            <div className="boxLang">
                      <div className="Lang stylecss">Frameworks</div>
                        <div className="LangLine"></div>
                          <div className="textColor">
                            <div className="stylecss">React</div>
                            <div className="stylecss">TAILWIND CSS</div>
                            {/* <div>Git</div> */}
                          </div>
                </div>
            </div>

            <div className="Cppimg"><img src={cpp}></img></div>

            <div className="Cppimg"><img src={react}></img></div>


            

            <div className="Cppimg"><img src={cssTailwind}></img></div>

            <div className="Cppimg"><img src={htmlpic}></img></div>


          </div>

        </div>


        {/* line */}
        <div className="line "></div>
        {/* lineEnd */}

        {/* Third Section */}
        <div className="sectionThird"  id="Projects">
        <div className="skillStyle1">Projects:</div>
        <div className="gridItems">

        
          <div className="box1">

            <div className="borders myntraclone"><img src={myntraClone}></img></div>

            <div className="borders padding2 hideBorderBottom">REACTJS</div>

            <div className="borders ">
              <div className="padding1 myntraText">MYNTRA</div>
              <div className="padding1 myntraText2">MYNTRA LANDING PAGE CLONE</div>
              <div className="padding1 myntaText3 pad">GitHub</div>
            </div>

          </div>
        

          <div className="box1">

            <div className="borders myntraclone"><img src={netflixClone}></img></div>

            <div className="borders padding2 hideBorderBottom">REACTJS</div>

            <div className="borders ">
              <div className="padding1 myntraText">NETFLIX</div>
              <div className="padding1 myntraText2">NETFLIX AND CHILL</div>
              <div className="padding1 myntaText3 pad">GitHub</div>
            </div>

          </div>

          <div className="box1">

            <div className="borders myntraclone"><img src={imageSearch}></img></div>

            <div className="borders padding2 hideBorderBottom">REACTJS</div>

            <div className="borders ">
              <div className="padding1 myntraText">IMAGE SEARCH ENGINE</div>
              <div className="padding1 myntraText2">GET IMAGES RELATED THE GIVEN TOPIC</div>
              <div className="padding1 myntaText3 pad">GitHub</div>
            </div>

          </div>
          
          <div className="box1">

            <div className="borders myntraclone"><img src={weatherApp}></img></div>

            <div className="borders padding2 hideBorderBottom">JAVASCRIPT</div>

            <div className="borders ">
              <div className="padding1 myntraText">WEATHER REPORT</div>
              <div className="padding1 myntraText2">WEATHER REPORT API</div>
              <div className="padding1 myntaText3 pad">GitHub</div>
            </div>

          </div>

          <div className="box1">

            {/* <div className="borders myntraclone"><img src={digitalMarketing}></img></div> */}
            <div className="borders myntraclone"><img src={portfolio}></img></div>


            <div className="borders padding2 hideBorderBottom">REACTJS</div>

            <div className="borders ">
              <div className="padding1 myntraText">PORTFOLIO</div>
              <div className="padding1 myntraText2 textupper">Creative Portfolio Showcase</div>
              <div className="padding1 myntaText3 pad">GitHub</div>
            </div>

          </div>

          


          

        </div>

        </div>



        {/* line */}
        <div className="line "></div>
        {/* lineEnd */}


        {/* Fourth Section */}
        <div className="sectionFour"  id="AboutMe">
        <div className="skillStyle1">About me:</div>
        <div className="insideFour">
            <div className="myabout">
                Hello, i’m John!
                I’m a self-taught front-end developer, Chandigarh. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 

                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and    frameworks.
            </div>

            <div className="cvDiv1">
              {/*  */}
              <a href={resume} download><button className="cvDown">DOWNLOAD CV</button></a>
            </div>
        </div>


        </div>


        {/* line */}
        <div className="line "></div>
        {/* lineEnd */}

        {/* Fifth Section */}

        <div className="sectionFive" id="ContactMe">
        <div className="skillStyle1">Contact me:</div>
        <div className="Contact">

          <div className="ContactLeft">

            <div className="InsideContactLeft">

              {/*  */}
              <div className="contacts1">

                <div className=" contacts2 backborder name1">
                  <div>Name:</div>
                  <div><input placeholder=""></input></div>
                </div>

                <div className="contacts2 backborder email1">
                  <div>Email:</div>
                  <div><input placeholder=""></input></div>
                </div>

              </div>
              {/*  */}
              <div className="contacts2 backborder title1">
                  <div>TITLE:</div>
                  <div><input placeholder=""></input></div>
              </div>
              {/*  */}

              <div className="contacts2 backborder message1">
                <div>MESSAGE:</div>
                <div><input className="message2 textarea" rows=""  placeholder=""></input></div>
              </div>

              <div >
                <button className="backborder padd">SEND </button>
              </div>

            </div>

          </div>

          <div className="ContactRight">

          <div className="InsideContactRight">
            <div>Message me here</div>


            <div className="logoRight1 hovereffect">
                {/* <img src={discord}></img> */}
                <a href="https://discordapp.com/users/john_41010" target="_blank"> <img src={discord}></img> </a>
                <a href="https://discordapp.com/users/john_41010" target="_blank"><div className="discordStyle">john_41010</div></a>

                
            </div>

            <div className="logoRight1">
                <a href="mailto:johnkhore26@gmail.com" target="_blank"> <img src={email}></img> </a>
                <a href="mailto:johnkhore26@gmail.com" target="_blank"> <div className="discordStyle">johnkhore26@gmail.com</div> </a>
                
            </div>

            <div className="logoRight1">
                {/* <img src={linkedIn}></img> */}
                <a href="https://www.linkedin.com/in/john-khore-6b11471b9/" target="_blank"> <img src={linkedIn}></img> </a>
                <a href="https://www.linkedin.com/in/john-khore-6b11471b9/" target="_blank"> <div className="discordStyle">johnkhore</div> </a>

                
            </div>

            <div className="logoRight1">
                {/* <img src={gitHub}></img> */}
                <a href="https://github.com/johnkhore5911" target="_blank"> <img src={gitHub}></img> </a>
                <a href="https://github.com/johnkhore5911" target="_blank"> <div className="discordStyle">johnkhore5911</div> </a>

                
            </div>
            

              
          </div>


          </div>


        </div>

        {/* line */}
        <div className="line"></div>
        {/* lineEnd */}

          

        </div>

        {/* sixthsection */}
        <div className="sectionsixth">

        <div className="width"></div>

        <div className="width1">
          <div>John</div>
          <div>Software Engineer and front-end developer</div>
          <div>© Copyright 2023</div>
        </div>

        <div className="widths footer1 displaynone">

        <a href="https://github.com/johnkhore5911" target="_blank"> <img src={gitHub}></img> </a>
        <a href="https://www.linkedin.com/in/john-khore-6b11471b9/" target="_blank"> <img src={linkedIn}></img> </a>
        <a href="https://discordapp.com/users/john_41010" target="_blank"> <img src={discord}></img> </a>
        <a href="https://t.me/YourTelegramUsername" target="_blank"> <img src={telegram}></img> </a>
        <a href="mailto:johnkhore26@gmail.com" target="_blank"> <img src={email}></img> </a>

        </div>

        </div> 

      </div>

    </div>
  );
}

export default App;
