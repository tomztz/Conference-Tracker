import './ChangeSession.css'
import SessionForm from './SessionForm';
import axios from 'axios';
import { MDBInput, MDBCol } from "mdbreact";


function ChangeSession(props){

    
    const saveSessionDataHandler = (enteredSessionData,speakerId) =>{
        
      const speakersData=props.speakerData.filter((speaker)=>{return speaker["speaker_id"].toString()===speakerId.toString()})
      const SessionData={
        ...enteredSessionData,
        speakers: speakersData 
    }

        axios.post("https://conference-demo-tomztz.herokuapp.com/api/v1/sessions/" ,SessionData).then(res=>{
            console.log("Post Request success");
            window.location.reload(false);
          }).catch(err=>{
            console.log("Post Request error");
            console.log(err);
          });
        }
    
        const editSessionDataHandler=(enteredSessionData,speakerId)=>{

        const url_session='https://conference-demo-tomztz.herokuapp.com/api/v1/sessions/'+enteredSessionData.session_id

        const speakersData=props.speakerData.filter((speaker)=>{return speaker["speaker_id"].toString()===speakerId.toString()})

        const SessionData={
            ...enteredSessionData,
            speakers: speakersData 
        }

        axios.put(url_session, SessionData).then(res=>{
            console.log("Put Request success");
            window.location.reload(false);

          }).catch(err=>{
            console.log("Put Request error");
            console.log(err);
          });
        }

        const deleteSessionDataHandler = (id) =>{
      
            const url = "https://conference-demo-tomztz.herokuapp.com/api/v1/sessions/" +id
            console.log(id);
            axios.delete(url).then(res=>{
                console.log("Delete Request success");
                window.location.reload(false);
              }).catch(err=>{
                console.log("Delete Request error");
                console.log(err);
              });
            
        }  

    
    return (
    <div className='new-speaker'>
        <SessionForm data={props.data}onSaveSessionData = {saveSessionDataHandler} onEditSessionData={editSessionDataHandler}
        onDeleteSpeakerData={deleteSessionDataHandler} ></SessionForm>
        <MDBCol md="6">
          <MDBInput className="new-session__search-bar" hint="Search(in beta)" type="text" containerClass="mt-0" />
        </MDBCol>
    </div>

    );

}

export default ChangeSession;