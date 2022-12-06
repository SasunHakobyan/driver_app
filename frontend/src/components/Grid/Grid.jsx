import React from 'react';

import classes from './Grid.module.css';
import DriverItem from "../Drivers/DriverItem/DriverItem";
import ClientItem from "../Clients/ClientItem/ClientItem";

const Grid = (props) => {
    return (
        <table className={classes.driversTable}>
            <thead className={classes.tableHeader}>
            <tr className={classes.headingRow}>
                {
                    props.fields.map(field => {
                        return <th>{field}</th>
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                props.data.map((item, index) => {
                    const itemNumber = (index + 1) + ((props.paginationData.currentPage - 1)
                        * props.paginationData.pageLimit);

                    return props.type === 'driver'
                        ? <DriverItem key={itemNumber}
                                      itemNumber={itemNumber}
                                      setModal={props.setModal}
                                      driver={item}
                                      deleteDriver={props.deleteData}/>
                        : <ClientItem key={itemNumber}
                                      itemNumber={itemNumber}
                                      setModal={props.setModal}
                                      client={item}
                                      deleteClient={props.deleteData}/>
                })
            }
            </tbody>
        </table>
    );
};

export default Grid;