import React from 'react'

const capitalize = (word) => {
    // let lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert" `}>
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

// && operator is used for making the second statement null as well whenever first statement is null because if both conditions are satisfied only then && operator will return true.
