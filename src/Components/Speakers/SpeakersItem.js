import './SpeakersItem.css'
import {useState} from 'react';
import Card from '../UI/Card';
import SpeakersInfo from './SpeakersInfo';


function SpeakerItem(props) {
    const [isCliked,setClicked]=useState(false);
        const ExpandButtonHandler=()=>{
            setClicked(true);
    }
        const CancellButtonHandler=()=>{
            setClicked(false);
    }

    return (
        <li>
        <Card className='speaker-item'>
            <div className='speaker-id'>{props.id}</div>
            <div className='speaker-item__description'>
                <h2>{props.FullName}</h2>
                <button className='speaker-item__arrow' onClick={ExpandButtonHandler}>EXPAND</button>
            </div>
            {isCliked&&<SpeakersInfo onCloseButton={CancellButtonHandler} titles={props.titles} company={props.company} speakerBio={props.speakerBio}>
                </SpeakersInfo>}
            
            
        
        </Card>
        </li>
    );
}

export default SpeakerItem;