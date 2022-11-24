const Driver = (props) => {
    const driver = props.driver;

    return (
        <tr className='driver-row'>
            <td>{driver.username}</td>
            <td>{driver.tariff}</td>
            <td>{driver.rating}</td>
            <td>{driver.register_date}</td>
        </tr>
    );
}

export default Driver;