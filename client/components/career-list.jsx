import React from 'react';

export default class CareerList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     jobs: []
  //   };
  //   this.setViewDetails = this.setViewDetails.bind(this);
  // }

  // componentDidMount() {
  //   this.getJobs();
  // }

  // getProducts() {
  //   fetch('/api/products')
  //     .then(res => res.json())
  //     .then(data => {
  //       return this.setState({ jobs: data });
  //     });
  // }

  // setViewDetails(e) {
  //   const careerId = e.currentTarget.getAttribute('id');
  //   this.props.setView('jobDetails', { careerId });
  // }

  // render() {
  //   const jobList = this.state.products.map(product =>
  //     <JobListItem
  //       career={career}
  //       key={career.careerId}
  //       name={career.position}
  //       description={career.positionDescription}
  //       careerId={career.careerId}
  //       setViewDetails={this.setViewDetails}
  //     />
  //   );

  //   return (
  //     <>
  //       <h4>Job</h4>
  //       <div className="row justify-content-center">
  //         {jobList}
  //       </div>
  //     </>
  //   );
  // }
}
