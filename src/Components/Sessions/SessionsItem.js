import './SessionsItem.css'
import {useState} from 'react';
import Card from '../UI/Card';
import SessionsInfo from './SessionsInfo';

function SessionsItem(props) {
    const [isCliked,setClicked]=useState(false);
        const ExpandButtonHandler=()=>{
            setClicked(true);
    }
        const CancellButtonHandler=()=>{
            setClicked(false);
    }

    return (
        <li>
        <Card className='session-item'>
            <div className='session-id'>{props.id}</div>
            <div className='session-item__description'>
                <h2>{props.name}</h2>
                <button className='session-item__arrow' onClick={ExpandButtonHandler}>EXPAND</button>
            </div>

            {isCliked&&<SessionsInfo onCloseButton={CancellButtonHandler} description={props.description} len={props.len} speaker={props.speaker}
            speakerId={props.speakerId}>
                </SessionsInfo>}
            
        
        </Card>
        </li>
    );
}

export default SessionsItem;