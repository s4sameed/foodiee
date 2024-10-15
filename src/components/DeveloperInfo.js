import React from "react";
import { Link } from "react-router-dom";

class DeveloperInfo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            user: {}
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/s4sameed")
        const json = await data.json();
        this.setState({
            user: json
        })
    }

    render(){

        const {avatar_url, login, html_url} = this.state.user

        return (
            <div>
                <h3>Developers</h3>
                <div className="github-profile">
                <img
                    src={avatar_url}
                    alt={`${login}'s avatar`}
                />
                <h3>{login}</h3>
                <Link to={html_url}>Visit GitHub Profile</Link>
                </div>
            </div>
          );
    }
}

export default DeveloperInfo;