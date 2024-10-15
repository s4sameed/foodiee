import React from "react";
import { Link } from "react-router-dom";

class DeveloperInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/s4sameed");
        const json = await data.json();
        this.setState({
            user: json
        });
    }

    render() {
        const { avatar_url, login, html_url } = this.state.user;

        return (
            <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4">Developers</h3>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <img
                        src={avatar_url}
                        alt={`${login}'s avatar`}
                        className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                        <h3 className="text-xl font-semibold">{login}</h3>
                        <Link
                            to={html_url}
                            className="text-red-500 hover:underline"
                        >
                            Visit GitHub Profile
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default DeveloperInfo;