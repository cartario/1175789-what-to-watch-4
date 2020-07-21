import React, {PureComponent} from 'react';
import {TabNames} from "../../const.js";

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: TabNames.OVERVIEW,
      };

      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(tab) {
      this.setState({currentTab: tab});
    }

    render() {
      const {currentTab} = this.state;
      return (
        <Component currentTab={currentTab} clickHandler = {this.clickHandler}/>
      );
    }
  }

  return WithTabs;
};

export default withTabs;
