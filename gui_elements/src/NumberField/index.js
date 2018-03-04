import * as React from 'react'

export class NumberField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue || 0,
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.value !== nextState.value) {
            this.props.onChange(nextState.value)
        }
    }

    onChange = (event) => this.setState({
        value: parseInt(event.target.value.replace(/\D/g, '')),
    });

    render() {
        return (
            <input value={this.state.value || 0} onChange={this.onChange} />
        );
    }
}

