import React, { Fragment } from 'react';
import back from '../../Assets/img/back.svg';
import '../../Assets/scss/main.scss';

const RegistartionHeaderComponent = () => (
  <Fragment>
    <div className="row">
      <div className="col-md-12">
        <div className="back-button">
          <span className="back-arrow">
            <img alt="back-button" src={back} />
          </span>
          <span className="font-weight-bold text-uppercase ml-2">
            Back
          </span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="title-wrap">
          <h1 className="big-title mt-5 mb-5 mobile-mb">
            Register Now. Save time Later.
          </h1>
        </div>
      </div>
    </div>
  </Fragment>
);

export default RegistartionHeaderComponent;