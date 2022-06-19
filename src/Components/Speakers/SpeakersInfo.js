import './SpeakersInfo.css'

function SpeakersInfo(props){
    const buttonHandler=()=>{
        props.onCloseButton();
    }

    return(

        <div>
            <hr className='speakerInfo-border' ></hr>
            <h3 className='speaker-info__description'>Title: {props.titles}</h3>
            <h3 className='speaker-info__description'>Company: {props.company}</h3>
            <h3 className='speaker-info__description'>Speaker bio: {props.speakerBio}</h3>
            <button className='speaker-info__button'onClick={buttonHandler}>CLOSE</button>
        </div>

    );

}

export default SpeakersInfo;