import SpeakersItem from "./SpeakersItem";
import "./SpeakersList.css"

function SpeakerList(props){
    return(
        <ul className="speaker-list">
        <SpeakersItem id = {props.id} FullName={props.FullName} titles={props.titles} company={props.company}
        speakerBio={props.speakerBio}/>
        </ul>

    );


}
export default SpeakerList;