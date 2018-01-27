import React from "react";

const funcComp = (props) => (
    <div>
        <h1>{props.match.params.name}</h1>
        this is a functional component, it doesn't really do anything
    </div>
)

export default funcComp