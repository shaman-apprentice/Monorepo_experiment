import * as React from "react";

import { NumberField, Button } from 'gui_elements'
import { add } from 'calculator_lib'

export class Calculator_basis extends React.Component<{}, {fstNumber: number, sndNumber: number, erg: number }> {
    state = {
        fstNumber: 0,
        sndNumber: 0,
        erg: 0,
    };

    onFstNumberFieldChanged = (v) => this.setState({
        sndNumber: v,
        erg: 0,
    });

    onSndNumberFieldChanged = (v) => this.setState({
        fstNumber: v,
        erg: 0
    });

    calc = () => this.setState({
        erg: add(this.state.fstNumber, this.state.sndNumber),
    });

    render() {
        return (
            <div>
                <div>
                    <NumberField className="fstNumber" initialValue={this.state.fstNumber} onChange={this.onFstNumberFieldChanged} />
                    <NumberField className="sndNumber" initialValue={this.state.sndNumber} onChange={this.onSndNumberFieldChanged} />
                    <Button className="addButton" label={'add'} onclick={this.calc}/>
                </div>
                <div>
                    Result: <span className="result">{this.state.erg}</span>
                </div>
            </div>
        );
    }
}