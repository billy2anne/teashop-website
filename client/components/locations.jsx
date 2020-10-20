import React from 'react';

export default function Locations(props) {

  return (
    <>
      <div className="locationContainer col-12 d-flex">
        <div className="row justify-content-center">
          <div className="location1Container col-9">
            <div className="locationImage1 ">
            </div>
            <section>
              ADDRESS:
              3000 W Green Rd.
              Culver City, CA 92804
              <div className="hours">
                HOURS:
                Sun
                8am - 10pm,
                Mon-Thu
                7am - 10pm,
                Fri
                7am - 11pm,
                Sat
                8am - 11pm
              </div>
            </section>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="location2Container col-9">
            <div className="locationImage2">
            </div>
            <section>
              ADDRESS:
              1111 W Apple Rd.
              Los Angeles, CA 92804
              <div className="hours">
                HOURS:
                Sun
                8am - 10pm,
                Mon-Thu
                7am - 10pm,
                Fri
                7am - 11pm,
                Sat
                8am - 11pm
              </div>
            </section>
          </div>
        </div>
      </div>
      <br/>
      <div className="locationContainer col-12 d-flex">
        <div className="row justify-content-center">
          <div className="location3Container col-9">
            <div className="locationImage3 ">
            </div>
            <section>
              ADDRESS:
              5178 W Purple Rd.
              Costa Mesa, CA 92804
              <div className="hours">
                HOURS:
                Sun
                8am - 10pm,
                Mon-Thu
                7am - 10pm,
                Fri
                7am - 11pm,
                Sat
                8am - 11pm
              </div>
            </section>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="location4Container col-9">
            <div className="locationImage4">
            </div>
            <section>
              ADDRESS:
              2364 W Yellow Rd.
              Anaheim, CA 92804
              <div className="hours">
                HOURS:
                Sun
                8am - 10pm,
                Mon-Thu
                7am - 10pm,
                Fri
                7am - 11pm,
                Sat
                8am - 11pm
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
