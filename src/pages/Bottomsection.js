import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Bottomsection.css';
import { GoCheckCircle } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { useState, useEffect, useLayoutEffect } from 'react';

const Bottomsection = () => {

    return (
        <div className=''>
            <div className='today'>Todays Task</div>
            <div className='secondline'>UPSC Civil Services is not a rocket science you can make it too</div>
            <div className='flex flex-row'>
  
  <div className='task-box1'>
    <div  ><IoCheckmark className='tick-symbol' /> </div>
    <div className='box-content'>
      <div className='box-heading'>Read daily <br></br> current affairs</div>
      <div className='box-body'>Your daily dose of current affairs.<br></br> These articles are covered from a <br></br> variety of news source</div>
      <button className='box-button1 '>Read Current Affairs</button>
    </div>
  </div>

 
  <div className='task-box2'>
  <div  ><IoCheckmark className='tick-symbol' /> </div>
    <div className='box-content'>
      <div className='box-heading'>Daily current <br></br> affairs test</div>
      <div className='box-body'>Test your knowledge of the news <br></br> articles by answering these <br></br> questions</div>
      <button className='box-button2 '>Attempt Test</button>
    </div>
  </div>

 
  <div className='task-box3'>
    <div  ><IoCheckmark className='tick-symbol' /> </div>
    <div className='box-content'>
      <div className='box-heading'>Daily chapter <br></br> tests</div>
      <div className='box-body'>Boost your subject and chapter <br></br> specific knowledge by attempting <br></br> these questions</div>
      <button className='box-button3 '>Attempt Test</button>
    </div>
  </div>
</div>
<div className='footer flex flex-row p-4' ><FaCircleInfo className="text-xl font-bold" /><div className='foot'>If you do 2 sub topics a day you can complete the entire syllabus in 100 days</div></div>

        </div>
    );
};

export default Bottomsection;