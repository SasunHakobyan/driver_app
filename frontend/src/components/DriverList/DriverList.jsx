import React from "react";
import Driver from "../Driver/Driver";
import classes from './DriverList.module.css';

class DriverList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.setDriversState();
    }

    componentWillUnmount() {
        this.setState({});
    }

    setDriversState() {
        fetch("http://localhost:5500/getDrivers")
            .then(res => res.json())
            .then(res => {
                this.setState({drivers:res});
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className={classes.driversListContainer}>
                <h3>Drivers</h3>
                <table className={classes.driversData}>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Tariff</th>
                        <th>Rating</th>
                        <th>Register Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.drivers?.map(driver => {
                            return <Driver key={driver._id} driver={driver}/>
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DriverList;