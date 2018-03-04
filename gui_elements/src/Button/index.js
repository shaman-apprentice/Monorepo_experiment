import * as React from "react"

export function Button({ label, onclick }) {
    return (
        <button onClick={onclick}>{label}</button>
    );
}