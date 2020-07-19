import React, {PureComponent} from "react";
import Overview from "./overview/overview.jsx";
import Details from "./details/details.jsx";
import Reviews from "./reviews/reviews.jsx";
import {TabNames} from "../../const.js";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: TabNames.OVERVIEW,
    };
  }

  _renderCurrentTab() {
    switch (this.state.currentTab) {
      case TabNames.DETAILS:
        return <Details/>;
      case TabNames.REVIEWS:
        return <Reviews/>;
      default :
        return <Overview/>;
    }
  }

  clickHandler(tab) {
    this.setState({currentTab: tab});
  }

  render() {
    return (
      <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(TabNames).map((tab) =>
              <li key = {tab} onClick={()=>this.clickHandler(tab)} className={this.state.currentTab === tab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                <a onClick={(e)=>e.preventDefault()} href="#" className="movie-nav__link">{tab}</a>
              </li>
            )}
          </ul>
        </nav>
        {this._renderCurrentTab()}

      </div>
    </>
    );

  }
}

export default Tabs;
