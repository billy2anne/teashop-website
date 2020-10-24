import React from 'react';

export default class CareerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.setViewDetails = this.setViewDetails.bind(this);
  }

  componentDidMount() {
    this.getJobs();
  }

  getJobs() {
    fetch('/api/career')
      .then(res => res.json())
      .then(data => {
        return this.setState({ jobs: data });
      });
  }

  setViewDetails(e) {
    const careerId = e.currentTarget.getAttribute('id');
    this.props.setView('jobDetails', { careerId });
  }

  render() {

    return (
      <>
        <h4>Job Opportunities</h4>
        <div className="row justify-content-center">
          joblist goes here
        </div>
      </>
    );
  }
}
