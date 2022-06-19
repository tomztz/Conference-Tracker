import './Home.css'
import { Link } from "react-router-dom";
function Home(){
    return (
    <div>
        <div className="top-content content">
          <div className="dark"></div>
          <div className="home-center-content">
            <h1>Conferences Tracker For Company X</h1>
            <p>Company X's employee's are lazy and board because they have no work to do... Therefore, Company X invites many different speakers
                from many different companies to ensure the employees have something to do. As the number of session per day, increases,
                the company manages to store the speakers and sessions info in a database. However, most people in Company X is bad at 
                working with databases and require a better UI to easy manipulate and visualise the data. Therefore, comes this project lol. 
            </p>
            <Link to="/sessions/"><button type='button' className="rounded-pill btn bg-primary">Check Sessions</button></Link>
            <Link to="/speakers/"><button type='button' className="rounded-pill btn bg-primary">Check Speakers</button></Link>
          </div>
        </div>

        <div className="about-project content">
            <div className="about-content">
                <h1>About the project</h1>
                <p>This is a completely dummy project, created as a pratice prior to my internship in JPMorgan, as my mentor asked me to practise connecting backend and frontend components
                (btw frontend really sucks!)</p>
                <p>This is a full stack software engineering project, with a postgrad SQL database as backend, spring Boot as the api endpoint(like a broker)
                    and the react frontend interacting with the postgrad SQL database through the spring Boot API. The project is fully connected
                    and well deployed, the backend is hosted on a cloud platform called Heroku and the frontend is hosted at firebase.
                </p>
            </div>
        </div>
        <div className="this-project content">
            <div className="this-project project-content">
                <p>Sessions API endpoints:</p>
                <a href="https://conference-demo-tomztz.herokuapp.com/api/v1/sessions">Sessions</a>
                <p>Speakers API endpoints:</p>
                <a href="https://conference-demo-tomztz.herokuapp.com/api/v1/speakers">Speakers</a>
        </div>
    </div>        
    
</div>
    );

}

export default Home;