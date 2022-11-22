import React from "react";

import classes from "../ClientList/ClientsList.module.css";
import Client from "../Client/Client";

class ClientList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.setClientsState();
    }

    setClientsState() {
        fetch("http://localhost:5500/getClients")
            .then(res => res.json())
            .then(res => {
                this.setState({clients: res});
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className={classes.clientsListContainer}>
                <h3>Clients</h3>
                <table className={classes.clientsData}>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Card Credentials</th>
                        <th>Register Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.clients?.map(client => {
                            return <Client key={client._id} client={client} />
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ClientList;