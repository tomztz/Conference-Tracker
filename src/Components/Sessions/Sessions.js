import Card from '../UI/Card'
import SessionsList from './SessionsList'
import './Sessions.css'
import ChangeSession from '../ChangeSessions/ChangeSession'
function Sessions(props){

    const getFullName = (firstName,secondName) =>{
        return firstName+' '+secondName
      } 

    return (
        <div>
            <h2 className='session__fallback'>Sessions:</h2>
            <ChangeSession data={props.data} speakerData={props.speakerData}></ChangeSession>
            <Card className = 'session'>
            
            {props.data.map((dataset) => <SessionsList id={dataset["session_id"]} 
              name={dataset["session_name"]} description={dataset["session_description"]}
              len={dataset["session_length"]} speaker={
                dataset["speakers"].map(speaker=>getFullName(speaker["first_name"],speaker["last_name"]))}
                speakerId={dataset["speakers"].map((speaker)=>(speaker["speaker_id"]))}/>)}
            </Card>
            
        </div>
    );

}

export default Sessions;