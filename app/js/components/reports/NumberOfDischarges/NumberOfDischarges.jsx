import React, { Component } from 'react';
import ReportAsTableView from '../common/ReportAsTableView';
import ReportTitle from '../common/ReportTitle';
import LocationInput from '../common/LocationInput';

/**
 * Display the result of Number of Discharges report
 */
class NumberOfDischarges extends Component {

    constructor() {
        super();
        this.state = {
            parameters: {
                location: "8d6c993e-c2cc-11de-8d13-0010c6dffd0f"
            }
        };
        this.getReportUUID = this.getReportUUID.bind(this);
        this.handleLocationSelector = this.handleLocationSelector.bind(this);
    }

    getReportUUID() {
        return "b39c5070-4881-11e7-a919-92ebcb67fe33";
    }

    handleLocationSelector(event) {
        this.setState({ location: event.target.value });
    }

    render() {
        return (
            <div>
                <ReportTitle heading="Number of Discharges" />
                <LocationInput locationListener={this.handleLocationSelector} />

                <ReportAsTableView reportUUID={this.getReportUUID()} 
                                   reportParameters={this.state.parameters}/>
            </div>
        );
    }

}

export default NumberOfDischarges;