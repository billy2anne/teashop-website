import React from 'react';

export default class Locations extends React.Component {

  render() {
    return (
      <>
        <div className="locationContainer col-12 d-flex">
          <div className="row justify-content-center">
            <div className="location1Container col-8">
              <div className="locationImage1 ">
                Location image 1
              </div>
              <section>
                Address goes here
                Hours goes here
                Phone Number goes here
                email goes here
              </section>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="location2Container col-8">
              <div className="locationImage2">
                Location image 2
              </div>
              <section>
                Address goes here
                Hours goes here
                Phone Number goes here
                email goes here
              </section>
            </div>
          </div>
        </div>
        <br/>
        <div className="locationContainer col-12 d-flex">
          <div className="row justify-content-center">
            <div className="location3Container col-8">
              <div className="locationImage3 ">
                Location image 3
              </div>
              <section>
                Address goes here
                Hours goes here
                Phone Number goes here
                email goes here
              </section>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="location4Container col-8">
              <div className="locationImage4">
                Location image 4
              </div>
              <section>
                Address goes here
                Hours goes here
                Phone Number goes here
                email goes here
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}
