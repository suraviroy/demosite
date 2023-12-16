import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Topsection.css';
import upic from '../images/u1.png';
import run from '../images/run.png';
import tick from '../images/tick.png';
import fire from '../images/fire.png';
import heart from '../images/heart.png';
import down from '../images/down.png';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { useState, useEffect, useLayoutEffect } from 'react';

const Topsection = () => {


    useLayoutEffect(() => {
        const circleAnimation = document.querySelector('.circle-animation');
        if (circleAnimation) {
            circleAnimation.style.animation = 'rotate 2s linear infinite';
        }
    }, []);

    return (
        <div className=''>
            <div className="relative inline-block border border-gray-400 rounded-full  p-1">
                <div className="flex items-center cursor-pointer">
                    <span className="circle-image mr-2">
                        <img src={upic} alt="User Image" className="rounded-full w-7 h-7 object-cover" />
                    </span>
                    <span className="flex items-center">
                        <span className="text-black text-xs font-semibold">UPSC Civil Services</span>
                        <div className="ml-2">
                            <RiArrowDropDownLine className="text-2xl font-bold" />
                        </div>
                    </span>
                </div>
            </div>
            <div className="welcome">
                Welcome Back, Suravi
            </div>
            <div className="daily">
                Complete your daily tasks to fastrack your preparation.
            </div>

            <div className='circle'>
                <div className="monthly-tasks-circle">
                    <div className="circle-progress">
                        <div className="circle-animation"></div>
                        <div className="circle-text">
                            <p>0%</p>
                        </div>
                    </div>
                </div>
                <div className='task'>
                    <div className='Monthly-Tasks'> Monthly Tasks</div>
                    <div className='daily-task'>Regularly complete your daily tasks to hit your monthly goal.</div>
                </div>

                <div className='score'>0/300
                    <div ><div className='text-lg'>Daily Task</div>
                        <div className='daily-task1'> <FaCircleInfo className='iconi' />Complete 4 tasks to meet the day's objective</div>
                    </div>
                </div>

            </div>
            <div className='horizontal-line'></div>
            <div className='secondpart'>
                <img src={run} alt="User Image" className="rounded-full w-16 h-16 object-cover " style={{ backgroundColor: 'rgb(216, 238, 251)' }} />
                <div className='container1'>
                    <div className='doinggreat'>Your Doing Great! Keep Going </div>
                    <div className='daily-task'>Last 5 Days Completion Rate</div>
                </div>

                {/* <div className='imagetick'>
                    <img src={tick} alt="User Image" className="rounded-full w-9 h-9 object-cover mr-2" />
                    
                    <img src={tick} alt="User Image" className="rounded-full w-9 h-9 object-cover mr-2" />
                    <img src={tick} alt="User Image" className="rounded-full w-9 h-9 object-cover mr-2" />
                    <img src={tick} alt="User Image" className="rounded-full w-9 h-9 object-cover mr-2" />
                    <img src={tick} alt="User Image" className="rounded-full w-9 h-9 object-cover mr-2" />
                    </div> */}
                <div className='imagetick'>
                    <div className='image-item'>
                        <img src={tick} alt="User Image" className="rounded-full w-9 h-9 object-cover mr-1" />
                        <div className='popup'>No test taken</div>
                    </div>

                    <div className='image-item'>
                        <img src={tick} alt="User Image" className="rounded-full w-9 h-9 object-cover mr-1" />
                        <div className='popup'>No test taken</div>
                    </div>

                    <div className='image-item'>
                        <img src={tick} alt="User Image" className="rounded-full w-9 h-9 object-cover mr-1" />
                        <div className='popup'>No test taken</div>
                    </div>

                    <div className='image-item'>
                        <img src={tick} alt="User Image" className="rounded-full w-9 h-9 object-cover mr-1" />
                        <div className='popup'>No test taken</div>
                    </div>

                    <div className='image-item'>
                        <img src={tick} alt="User Image" className="rounded-full w-9 h-9 object-cover mr-1" />
                        <div className='popup'>No test taken</div>
                    </div>
                </div>
            </div>
            <div className='horizontal-line'></div>

            <div className="flex flex-row">
                <div className='groups'>Your Active Groups</div>
                <div className='emoji'>
                    <div className='imgemoji'><img src={down} alt="User Image" className="rounded-full w-16 h-16 object-cover p-4  " style={{ backgroundColor: 'rgb(216, 238, 251)' }} /> <p className="ml-3">UPSC</p></div>
                    <div className='imgemoji'><img src={fire} alt="User Image" className="rounded-full w-16 h-16 object-cover p-4 " style={{ backgroundColor: 'rgb(216, 238, 251)' }} />Aspirant</div>
                    <div className='imgemoji'><img src={heart} alt="User Image" className="rounded-full w-16 h-16 object-cover p-4 " style={{ backgroundColor: 'rgb(216, 238, 251)' }} />My Team</div>
                    {/* <div className='plus'><MdAdd /> </div>Create */}
                    <div className='plus flex flex-col items-center'>
                        <div className="rounded-full border-dotted border border-black border-w-2 p-5">
                            <MdAdd className='text-2xl' />
                        </div>
                        <p className='imgemoji1'>Create</p>
                    </div>
                </div>
                <p className='Coming-Soon'>Coming Soon</p>
            </div>
            <div className='horizontal-line1'></div>
        </div>
    );
};

export default Topsection;