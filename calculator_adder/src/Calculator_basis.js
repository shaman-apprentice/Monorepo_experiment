import * as React from "react";
import { NumberField, Button } from 'gui_elements';
import { add } from 'calculator_lib';
export class Calculator_basis extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            fstNumber: 0,
            sndNumber: 0,
            erg: 0,
        };
        this.onFstNumberFieldChanged = (v) => this.setState({
            sndNumber: v,
            erg: 0,
        });
        this.onSndNumberFieldChanged = (v) => this.setState({
            fstNumber: v,
            erg: 0
        });
        this.calc = () => this.setState({
            erg: add(this.state.fstNumber, this.state.sndNumber),
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(NumberField, { className: "fstNumber", initialValue: this.state.fstNumber, onChange: this.onFstNumberFieldChanged }),
                React.createElement(NumberField, { className: "sndNumber", initialValue: this.state.sndNumber, onChange: this.onSndNumberFieldChanged }),
                React.createElement(Button, { className: "addButton", label: 'add', onclick: this.calc })),
            React.createElement("div", null,
                "Result: ",
                React.createElement("span", { className: "result" }, this.state.erg))));
    }
}
