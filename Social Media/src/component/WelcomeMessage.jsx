const WelcomeMessage = ({onGetPostClick}) =>{

    return (
        <center className="welcome-msg" ><h3 >There are no post right now</h3>
            <button type = "button" className="btn btn-primary" onClick={onGetPostClick}> Get Post From Server</button>
        </center>)

}
export default WelcomeMessage;