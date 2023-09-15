import React from 'react';
import winesData from '../Static Files/Wine-Data.json'

const AlchoholTable = () => {
    var cnt=0;
    return(
        <React.Fragment>
            This is Alchohol Table
            {
                winesData.map(i=>{
                    return <p> {i.Ash} || {++cnt} </p>
                })
            }
            
        </React.Fragment>
    )
}

export default AlchoholTable