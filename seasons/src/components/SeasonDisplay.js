import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter';
    return lat > 0 ? 'winter' : 'summer';
};

const getIcon = (season) => {
    if(!season) return 'eye slash';
    return season === 'summer' ? 'sun' : 'snowflake';
}



const SeasonDisplay = (props) => {
    const season = props.lat ? getSeason(props.lat, new Date().getMonth()) : null;
    const icon = getIcon(season);
    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${icon} icon`}></i>
        <h1>{props.errorMessage || `The season is: ${season}`}</h1>
        <i className={`icon-right massive ${icon} icon`}></i>
        </div>;
};
export default SeasonDisplay;