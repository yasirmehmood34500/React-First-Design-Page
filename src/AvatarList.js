import React from 'react';
const AvatarList = (props) => {
    return (
            <div className="first_avatar ma4  tc dib pa4 grow shadow-4">
                <img src={props.imgName} />
                <h1 className="">{props.name}</h1>
                <p>{props.work}</p>
                <b>{props.experience}</b>
            </div>
            
       
    )
}

export default AvatarList;