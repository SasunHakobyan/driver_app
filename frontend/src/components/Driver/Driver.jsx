const Driver = (props) => {
    const driver = props.driver;

    return (
        <tr className='driver-row'>
            <td>{driver.username}</td>
            <td>{driver.tariff}</td>
            <td>{driver.rating}</td>
            <td>{driver.registerDate}</td>
            <td><button onClick={() => props.deleteDriver(driver._id)}>Delete</button></td>
        </tr>
    );
}

export default Driver;