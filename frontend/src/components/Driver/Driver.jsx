const Driver = (props) => {
    const driver = props.driver;

    return (
        <tr>
            <td>{driver.id}</td>
            <td>{driver.userName}</td>
            <td>{driver.tariff}</td>
        </tr>
    );
}

export default Driver;