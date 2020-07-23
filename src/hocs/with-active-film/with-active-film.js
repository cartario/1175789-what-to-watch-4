import React, { PureComponent } from "react";

const withActiveFilm = (Component) => {

  class WithActiveFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilmId: null,
  
      };

    this.handleHover = this.handleHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    
    }

    handleMouseLeave() {
      this.setState({
  
      });
    }
  
    handleHover(film) {
      this.setState({
        activeFilmId: film.id,
      });
    }

    render() {
      return (
        <Component {...this.props}
        handleHover = {this.handleHover}
        handleMouseLeave = {this.handleMouseLeave}
        activeFilmId = {this.state.activeFilmId}/>
      );
    }
  };


  return WithActiveFilm;
};

export default withActiveFilm;
