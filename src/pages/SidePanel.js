import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './SidePanel.css';
import { MdOtherHouses } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import { RiTestTubeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
// import { useHistory } from 'react-router-dom';
import headerimg from '../images/headerimg.jpg';
import profile from '../images/profile.avif';
const SidePanel = () => {
  

  return (
    <aside className="side-panel78">
      
    <div className='header12'>
      <div className='img01'> <img  src={headerimg} alt="Header Image" />
      </div>
      <div className="beta">BETA Vession</div>
      <div > <img className='img02'  src={profile} alt="Header Image" />
      </div>
      <div className="name">Suravi</div>
      <div className='iconstar'><FaStar /> <div className='Aspirant'>Aspirant Star</div></div>
      </div>
      
      <div className="tab78">
      <div className='icon'><MdOtherHouses /></div>
        <h2>Dashborad</h2>
      </div>

      
      <div className="tab78"  >
      <div className='icon'><GoPersonFill /></div>
        <h2>Profile</h2>
      </div>

      <div className="tab78"  >
      <div className='icon'><RiTestTubeFill /></div>
        <h2>Test</h2>
      </div>
    
      <div className="tab78" >
      <div className='icon'><FaStar /></div>
        <h2>My Analytics</h2>
      </div>

   
      <div className="tab78">
      <div className='icon'><FaBusinessTime /></div>
        <h2>Learning Time Tracker</h2>
      </div>

      <div className="tab78"  >
      <div className='icon'><FaNoteSticky /></div>
        <h2>Notes Maker</h2>
      </div>

      <div className="tab78">
      <div className='icon'><FaIdCard /></div>
        <h2>My Subcription</h2>
      </div>

      <div className="tab78">
      <div className='icon'><FaQuestionCircle /></div>
        <h2>FAQ</h2>
      </div>

      <div className="tab78">
      <div className='icon'><IoLogOutSharp /></div>
        <h2>Log out</h2>
      </div>

    </aside>
  );
};

export default SidePanel;