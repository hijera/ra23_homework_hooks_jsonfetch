import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from "../hooks/useJsonFetch";
Request.propTypes = {

};

function Request(props) {
    const { url,opts} = props;
    const [data, loading, error] = useJsonFetch(url, opts);

    return (
        <div className={"request"}>
            <div>Компонент с url: <b>{url}</b></div>
            <h3>Data:</h3>
            <div>{JSON.stringify(data)}</div>
            <h3>Error:</h3>
            <div>{JSON.stringify(error)}</div>
            <h3>Loading:</h3>
            <div>{JSON.stringify(loading)}</div>
        </div>
    );
}

export default Request;