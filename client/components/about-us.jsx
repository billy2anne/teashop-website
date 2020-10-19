
import React from 'react';

export default class AboutUs extends React.Component {

  render() {
    return (
      <>
        <div className="homePageContainer col-12">
          <button className="viewMenuButton" onClick={() => this.props.view('catalog', {})}>View Menu</button>
        </div>
        <div className="homePageText row col-10">
          <h2>About Us...</h2>
          <section>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I
          </section>
          <h2>Our Responsibility</h2>
          <section>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I
          </section>
        </div>
      </>
    );
  }
}
