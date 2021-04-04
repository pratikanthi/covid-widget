import React from 'react';
import API from './utils/API';
import './App.css';

export default class WidgetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widgetSettings: {
                stateCode: props.stateCode,
                headerText: props.headerText,
                headerBackground: props.headerBackground,
                headerTextColor: props.headerTextColor,
                footerText: props.footerText,
                footerBackground: props.footerBackground,
                footerTextColor: props.footerTextColor,
            },
            states : []    
        };
    }


    render() {
        return (
            <div className="container">
                <form>
                    <label>Select State</label>
                    <select value={this.state.widgetSettings.stateCode}>
                        {this.state.states.map((e, key) => {
                            return <option key={key} value={e.statecode}>{e.name}</option>;
                        })}
                    </select>
                    <br/>
                    <button type="button">Generate Widget</button>
                </form>
            </div>
        );
    }

    async componentDidMount() {
        let list = [], dataset = await API.get();
        dataset = dataset.data;
        for (const stateName in dataset) {
            list.push({name:stateName, statecode:dataset[stateName].statecode})
        }
        this.setState({states: list});
    }

    generatWidgetCode() {
        let widgetString = '<iframe>'
    }
}