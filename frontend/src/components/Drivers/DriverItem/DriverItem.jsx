import {NavLink} from "react-router-dom";
import classes from './DriverItem.module.css';

const DriverItem = (props) => {
    const driver = props.driver;

    return (
        <tr key={props.itemNumber} className={classes.driverRow}>
            <td>{props.itemNumber}</td>
            <td><NavLink to={`/editDriver/${driver._id}`}>{driver.username}</NavLink></td>
            <td>{driver.tariff}</td>
            <td>{driver.rating}</td>
            <td>{driver.registerDate}</td>
            <td><button className={classes.btnDanger} onClick={() => props.setModal({show:true, driverId:driver._id})}>Delete</button></td>
        </tr>
    );
}

export default DriverItem;