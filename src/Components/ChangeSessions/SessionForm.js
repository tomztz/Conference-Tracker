import { useState } from 'react';
import './SessionForm.css'

function SessionForm(props){
    const [isClicked,setIsClicked]=useState(false);
    const [isEditClicked,setIsEditClicked]=useState(false);
    const [isDeleteClicked,setIsDeleteClicked]=useState(false);

    const [enteredId,setEnteredId]=useState('');
    const [enteredSessionName,setEnteredSessionName]=useState(' ');
    const [enteredSessionDescription,setEnteredDescription]=useState(' ');
    const [enteredLength,setEnteredLength]=useState(0);
    const [enteredSpeakerId,setEnteredSpeakerId]=useState(0);

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
    const idChangeHandler = (event) =>{
        setEnteredId(event.target.value);

    }
    const SessionNameChangeHandler = (event) =>{
        setEnteredSessionName(event.target.value);
        
    }
    const sessionDescriptionChangeHandler = (event) =>{
        setEnteredDescription(event.target.value);
        
    }
    const lengthChangeHandler = (event) =>{
        setEnteredLength(event.target.value);

    }
    const speakerChangeHandler = (event) =>{
        setEnteredSpeakerId(event.target.value);

    }
    const submitHandler = (event) => {
        event.preventDefault();
        const SessionData = {
            session_id:enteredId,
            session_name:enteredSessionName,
            session_description:enteredSessionDescription,
            session_length:enteredLength,
   
            
        }
        props.onSaveSessionData(SessionData,enteredSpeakerId);
        setEnteredId('');
        setEnteredSessionName('');
        setEnteredDescription('');
        setEnteredLength('');
        setEnteredSpeakerId(0);
    };
    const editHandler = (event) => {
        event.preventDefault();

        const SessionData = {
            session_id:enteredId,
            session_name:enteredSessionName,
            session_description:enteredSessionDescription,
            session_length:enteredLength,
   
            
        }
        props.onEditSessionData(SessionData,enteredSpeakerId);
        setEnteredId('');
        setEnteredSessionName('');
        setEnteredDescription('');
        setEnteredLength('');
        setEnteredSpeakerId(0);
    };
    const deleteHandler=()=>{
        props.onDeleteSpeakerData(enteredId);
        setEnteredId('');
    }
    return (
        <div>
        {isClicked=== false &&isEditClicked===false&&isDeleteClicked===false&&<button onClick={buttonHandler}>Add Session</button>}
        {isClicked=== false &&isEditClicked===false&&isDeleteClicked===false&&<button onClick={editButoonHandler}>Edit Session</button>}
        {isClicked=== false && isEditClicked===false&& isDeleteClicked===false&&<button onClick={deleteButtonHandler}>Delete Session</button>}
        {isClicked === true &&isEditClicked===false&&isDeleteClicked===false&&<form onSubmit={submitHandler}>
            <div className='new-session__controls'>
                <div className='new-session__control'>
                <label>Session ID:</label>
                <input type = 'number' min = {props.data.length+1} step='1'value = {enteredId}onChange={idChangeHandler}></input>
                </div>
                <div className='new-session__control'>
                <label>Session Name:</label>
                <input type = 'text' value = {enteredSessionName}
                  onChange={SessionNameChangeHandler}></input>
                </div>
                <div className='new-session__control'>
                <label>Session Description:</label>
                <input type = 'text' value = {enteredSessionDescription}
                  onChange={sessionDescriptionChangeHandler}></input>
                </div>
                <div className='new-session__control'>
                <label>Length(Time):</label>
                <input type = 'number' min={0}value = {enteredLength}
                onChange={lengthChangeHandler}></input>
                </div>
                <div className='new-session__control'>
                <label>speaker ID(must exist in list speakers):</label>
                <input type = 'number' value = {enteredSpeakerId}
                onChange={speakerChangeHandler}></input>
                </div>

            <div className='new-session__actions'>
                <button type = 'button'onClick={cancelHandler}>Cancell</button>
                <button type  = 'submit'>Add Session</button>
                
            </div>
            </div>
        </form>
        
        }
        {isClicked === false &&isEditClicked===true&&isDeleteClicked===false&&<form onSubmit={editHandler}>
            <div className='new-session__controls'>
                <div className='new-session__control'>
                <label>Session ID:</label>
                <input type = 'number' min = {0} step='1'value = {enteredId}onChange={idChangeHandler}></input>
                </div>
                <div className='new-session__control'>
                <label>Session Name:</label>
                <input type = 'text' value = {enteredSessionName}
                  onChange={SessionNameChangeHandler}></input>
                </div>
                <div className='new-session__control'>
                <label>Session Description:</label>
                <input type = 'text' value = {enteredSessionDescription}
                  onChange={sessionDescriptionChangeHandler}></input>
                </div>
                <div className='new-session__control'>
                <label>Length(Time):</label>
                <input type = 'number' min={0} step={10}value = {enteredLength}
                onChange={lengthChangeHandler}></input>
                </div>
                <div className='new-session__control'>
                <label>speaker ID(must exist in list speakers):</label>
                <input type = 'number' value = {enteredSpeakerId}
                onChange={speakerChangeHandler}></input>
                </div>

            <div className='new-session__actions'>
                <button type = 'button'onClick={cancellEditHandler}>Cancell</button>
                <button type  = 'submit'>Edit Session</button>
                
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
                <button type  = 'submit'>Delete Session</button>
                
            </div>
            </div>
        </form>
        
        }
        </div>



    );






}
export default SessionForm;