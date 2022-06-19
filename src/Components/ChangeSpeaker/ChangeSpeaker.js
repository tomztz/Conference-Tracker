import './ChangeSpeaker.css'
import SpeakerForm from './SpeakerForm';
import axios from 'axios';
import { MDBInput, MDBCol } from "mdbreact";

function ChangeSpeaker(props){
    const saveSpeakerDataHandler = (enteredSpeakerData) =>{
        const SpeakerData={
            ...enteredSpeakerData,
        }
        console.log(SpeakerData.speaker_id);
        
        axios.post("https://conference-demo-tomztz.herokuapp.com/api/v1/speakers" , SpeakerData).then(res=>{
            console.log("Post Request success");
            window.location.reload(false);
          }).catch(err=>{
            console.log("Post Request error");
            console.log(err);
          });
        }
    
    const editSpeakerDataHandler = (enteredSpeakerData) =>{
        const SpeakerData={
            ...enteredSpeakerData,
        }
        const url = "https://conference-demo-tomztz.herokuapp.com/api/v1/speakers/" +SpeakerData.speaker_id
        axios.put(url, SpeakerData).then(res=>{
            console.log("Put Request success");
            window.location.reload(false);
          }).catch(err=>{
            console.log("Put Request error");
            console.log(err);
          });
        
    }
    const deleteSpeakerDataHandler = (id) =>{
      
      const url = "https://conference-demo-tomztz.herokuapp.com/api/v1/speakers/" +id
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
        <SpeakerForm data={props.data}onSaveSpeakerData = {saveSpeakerDataHandler} 
        onEditSpeakerData={editSpeakerDataHandler} onDeleteSpeakerData={deleteSpeakerDataHandler}></SpeakerForm>
        <MDBCol md="6">
          <MDBInput className="new-speaker__search-bar" hint="Search(in beta)" type="text" containerClass="mt-0" />
        </MDBCol>
    </div>

    );

}

export default ChangeSpeaker;