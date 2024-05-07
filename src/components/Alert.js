import React from 'react'

function Alert(props) {
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> {/*props.alert && it is used because in javascript this method evaluate first props.alert , we set the value of alet to null ,therefore it is null then evaluate next ,
        if we not used then it compute null value  */}
                <strong>{props.alert.type}</strong>: {props.alert.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>    
        
    )
}

export default Alert
