import SessionsItem from "./SessionsItem";
import "./SessionsList.css"

function SessionsList(props){
    return(
        <ul className="session-list">
        <SessionsItem id = {props.id} name={props.name} description={props.description} len={props.len}
        speaker={props.speaker} speakerId={props.speakerId}/>
        </ul>

    );


}
export default SessionsList;