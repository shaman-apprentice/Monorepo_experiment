import * as React from "react"

export function Button({ className, label, onclick }) {
    return (
        <button className={className} onClick={onclick}>{label}</button>
    );
}