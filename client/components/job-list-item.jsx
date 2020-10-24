import React from 'react';

export default function JobListItem(props) {
  return (
    <div className="card-container col-3" onClick={props.setViewDetails} id={props.careerId}>
      <div className="name">
        {props.name}
      </div>
      <div className="price">
        ${props.career}
      </div>
      <div className="description">
        {props.description}
      </div>
      <div className="description">
        {props.positionType}
      </div>
    </div>
  );
}
