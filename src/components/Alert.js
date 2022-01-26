import React from 'react'

export default function Alert(props) {
    function capitalize(word) {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>{props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}

        </div>}</div>

    )
}