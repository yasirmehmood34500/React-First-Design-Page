import React from 'react';
import './Avatar.css';
import AvatarList from './AvatarList';
import 'tachyons';
const Avatar = () =>{
    return (
        <div>
            <h1 className="tc">Welcome to TimeTechSol</h1>
            <AvatarList id="1" name="M. Imran Iqbal" work="CEO & Co-founder" experience="5 Years" imgName="https://www.timetechsol.com/upload/team_profile/imran.jpg" />
            <AvatarList id="1" name="Yasir Mehmood" work="Co-founder & Web Programmer" experience="5 Yearsr" imgName="https://www.timetechsol.com/upload/team_profile/yasir.jpg" />
            <AvatarList id="1" name=" Shakeel" work="React Developer" experience="1 Years" imgName="https://www.timetechsol.com/upload/team_profile/shakeel.jpg" />
            <AvatarList id="1" name="Inam Ul Haq" work="PHP Developer" experience="2 Years" imgName="https://www.timetechsol.com/upload/team_profile/inam.jpg" />
            <br/>
            <button onClick="window.location='https://timetechsol.com'" className="tc">Click</button>
        </div>
    )
}
export default Avatar;