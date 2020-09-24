import React from "react";

class SearcBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // call cb from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video search</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearcBar;
