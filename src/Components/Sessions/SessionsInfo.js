import './SessionsInfo.css'

function SessionsInfo(props){
    const buttonHandler=()=>{
        props.onCloseButton();
    }

    return(

        <div>
            <hr className='session-Info-border' ></hr>
            <h3 className='session-info__description'>Description: {props.description}</h3>
            <h3 className='speaker-info__description'>Time(min): {props.len}</h3>
            <h3 className='speaker-info__description'>Speaker ID: {props.speakerId}</h3>
            <h3 className='speaker-info__description'>Speaker: {props.speaker}</h3>
            <button className='speaker-info__button'onClick={buttonHandler}>CLOSE</button>
        </div>

    );

}

export default SessionsInfo;