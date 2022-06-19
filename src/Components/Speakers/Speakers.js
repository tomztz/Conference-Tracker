
import Card from '../UI/Card'
import SpeakersList from "./SpeakersList";
import ChangeSpeaker from '../ChangeSpeaker/ChangeSpeaker';
import './Speakers.css'
function Speakers(props){

    const getFullName = (firstName,secondName) =>{
        return firstName+' '+secondName
      } 
    return (
        <div>
            <h2 className='speaker__fallback'>Speakers:</h2>
            <ChangeSpeaker data={props.data}></ChangeSpeaker>
            <Card className = 'speakers'>
            {props.data.map((dataset) => <SpeakersList id={dataset["speaker_id"]} 
              FullName={getFullName(dataset["first_name"],dataset["last_name"])} titles={dataset["title"]}
              company={dataset["company"]} speakerBio={dataset["speaker_bio"]}/>)}
            </Card>
            
        </div>
    );

}

export default Speakers;