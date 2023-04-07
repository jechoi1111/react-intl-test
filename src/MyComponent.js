import React from 'react';
import './style.css';
import {useIntl} from "react-intl";
import moment from 'moment';

const MyComponent = () => {
    const { formatMessage, formatDate } = useIntl();
    const now = moment().format();
    const options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric'}

    return (
        <>
            <div>
                <span>{formatMessage({id: 'w.test'}, {value: formatMessage({id: 'w.locale'})})}: </span>
                <span>{formatDate(now, options)}</span>
            </div>
        <table>
            <tbody>
            <tr>
                <th>{formatMessage({id: 'w.key'})}</th>
                <th>{formatMessage({id: 'w.value'})}</th>
                <th>{formatMessage({id: 'w.description'})}</th>
            </tr>
            <tr>
                <td>{formatMessage({id: 'w.value-1'})}</td>
                <td>{formatMessage({id: 'w.value-2'})}</td>
                <td>{formatMessage({id: 'w.value-3'})}</td>
            </tr>
            </tbody>
        </table>
        </>
    );
};

export {MyComponent};
