import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import PropTypes from "prop-types";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path = {path}
      exact = {exact}
      render={()=> {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to="/login" />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.any,
  path: PropTypes.any,
  exact: PropTypes.any,
  authorizationStatus: PropTypes.any,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
