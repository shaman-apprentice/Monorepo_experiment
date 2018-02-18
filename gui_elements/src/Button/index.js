import React from "react"

export function MyButton({ label, onclick }) {
    return (
        <button onClick={onclick}>{label}</button>
    );
}