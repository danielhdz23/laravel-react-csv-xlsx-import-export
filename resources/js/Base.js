import React from "react";

const Base = ({ children }) => (
    <div>
        <h1>Desde Base</h1>
        <main>{children}</main>
    </div>
);

export default Base;
