
import { useState } from 'react';
import './SpeakerForm.css'

function SpeakerForm(props){
    const [enteredId,setEnteredId]=useState('');
    const [enteredFirstName,setEnteredFirstName]=useState(' ');
    const [enteredLastName,setEnteredLastName]=useState(' ');
    const [enteredTitle,setEnteredTitle]=useState(' ');
    const [enteredCompany,setEnteredCompany]=useState(' ');
    const [enteredSpeakerBio,setSpeakerBio]=useState(' ');

    const [isClicked,setIsClicked]=useState(false);
    const [isEditClicked,setIsEditClicked]=useState(false);
    const [isDeleteClicked,setIsDeleteClicked]=useState(false);

    const idChangeHandler = (event) =>{
        setEnteredId(event.target.value);

    }
    const firstNameChangeHandler = (event) =>{
        setEnteredFirstName(event.target.value);
        
    }
    const lastNameChangeHandler = (event) =>{
        setEnteredLastName(event.target.value);
        
    }
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);

    }
    const companyChangeHandler = (event) =>{
        setEnteredCompany(event.target.value);

    }
    const speakerBioChangeHandler = (event) =>{
        setSpeakerBio(event.target.value);

    }
    const buttonHandler = () =>{
        setIsClicked(true);

    }
    const cancelHandler = ()=>{
        setIsClicked(false);
    }
    const editButoonHandler=()=>{
        setIsEditClicked(true);
    }
    const cancellEditHandler=()=>{
        setIsEditClicked(false);
    }
    const deleteButtonHandler=()=>{
        setIsDeleteClicked(true);
    }

    const cancellDeleteHandler=()=>{
        setIsDeleteClicked(false);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const SpeakerData = {
            speaker_id:enteredId,
            first_name:enteredFirstName,
            last_name:enteredLastName,
            title:enteredTitle,
            company:enteredCompany,
            speaker_bio:enteredSpeakerBio,
            speaker_photo:null
            
        }
        props.onSaveSpeakerData(SpeakerData);
        setEnteredId('');
        setEnteredFirstName('');
        setEnteredLastName('');
        setEnteredTitle('');
        setEnteredCompany('');
        setSpeakerBio('');
    };
    const editHandler = (event) => {
        event.preventDefault();

        const SpeakerData = {
            speaker_id:enteredId,
            first_name:enteredFirstName,
            last_name:enteredLastName,
            title:enteredTitle,
            company:enteredCompany,
            speaker_bio:enteredSpeakerBio,
            speaker_photo:null
            
        }
        props.onEditSpeakerData(SpeakerData);
        setEnteredId('');
        setEnteredFirstName(' ');
        setEnteredLastName(' ');
        setEnteredTitle(' ');
        setEnteredCompany(' ');
        setSpeakerBio(' ');
    };
    const deleteHandler=(event)=>{
        props.onDeleteSpeakerData(enteredId);
        setEnteredId('');
    }
    return (
        <div>
        {isClicked=== false && isEditClicked===false&&isDeleteClicked===false&&<button onClick={buttonHandler}>Add Speaker</button>}
        {isClicked=== false && isEditClicked===false&&isDeleteClicked===false&& <button onClick={editButoonHandler}>Edit speaker</button>}
        {isClicked=== false && isEditClicked===false&& isDeleteClicked===false&&<button onClick={deleteButtonHandler}>Delete speaker</button>}
        {isClicked === true && isEditClicked===false&&isDeleteClicked===false&&<form onSubmit={submitHandler}>
            <div className='new-speaker__controls'>
                <div className='new-speaker__control'>
                <label>ID</label>
                <input type = 'number' min = {props.data.length+1} step='1'value = {enteredId}onChange={idChangeHandler}></input>
                </div>
                <div className='new-speaker__control'>
                <label>first_name</label>
                <input type = 'text' value = {enteredFirstName}
                  onChange={firstNameChangeHandler}></input>
                </div>
                <div className='new-speaker__control'>
                <label>last_name</label>
                <input type = 'text' value = {enteredLastName}
                  onChange={lastNameChangeHandler}></input>
                </div>
                <div className='new-speaker__control'>
                <label>title</label>
                <input type = 'text' value = {enteredTitle}
                onChange={titleChangeHandler}></input>
                </div>
                <div className='new-speaker__control'>
                <label>company</label>
                <input type = 'text' value = {enteredCompany}
                onChange={companyChangeHandler}></input>
                </div>
                <div className='new-speaker__control'>
                <label>Speaker_bio</label>
                <input type = 'text' value = {enteredSpeakerBio}
                onChange={speakerBioChangeHandler}></input>
                </div>
            <div className='new-speaker__actions'>
                <button type = 'button'onClick={cancelHandler}>Cancell</button>
                <button type  = 'submit'>Add Speaker</button>
                
            </div>
            </div>
        </form>
        
        }
        {isEditClicked === true && isClicked===false&&isDeleteClicked===false&&<form onSubmit={editHandler}>
            <div className='new-speaker__controls'>
                <div className='new-speaker__control'>
                <label>ID you want to edit</label>
                <input type = 'number' min = {0} step='1'value = {enteredId}onChange={idChangeHandler}></input>
                </div>
                <div className='new-speaker__control'>
                <label>first_name</label>
                <input type = 'text' value = {enteredFirstName}
                  onChange={firstNameChangeHandler}></input>
                </div>
                <div className='new-speaker__control'>
                <label>last_name</label>
                <input type = 'text' value = {enteredLastName}
                  onChange={lastNameChangeHandler}></input>
                </div>
                <div className='new-speaker__control'>
                <label>title</label>
                <input type = 'text' value = {enteredTitle}
                onChange={titleChangeHandler}></input>
                </div>
                <div className='new-speaker__control'>
                <label>company</label>
                <input type = 'text' value = {enteredCompany}
                onChange={companyChangeHandler}></input>
                </div>
                <div className='new-speaker__control'>
                <label>Speaker_bio</label>
                <input type = 'text' value = {enteredSpeakerBio}
                onChange={speakerBioChangeHandler}></input>
                </div>
            <div className='new-speaker__actions'>
                <button type = 'button'onClick={cancellEditHandler}>Cancell</button>
                <button type  = 'submit'>Edit Speaker</button>
                
            </div>
            </div>
        </form>
        
        }
        {isDeleteClicked === true && isClicked===false&&isEditClicked===false&&<form onSubmit={deleteHandler}>
            <div className='new-speaker__controls'>
                <div className='new-speaker__control'>
                <label>ID you want to delete</label>
                <input type = 'number' min = {0} step='1'value = {enteredId}onChange={idChangeHandler}></input>
                </div>
               
            <div className='new-speaker__actions'>
                <button type = 'button'onClick={cancellDeleteHandler}>Cancell</button>
                <button type  = 'submit'>Delete Speaker</button>
                
            </div>
            </div>
        </form>
        
        }
        </div>

    );

}
export default SpeakerForm;