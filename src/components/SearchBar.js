import React from "react";

class SearcBar extends React.Component {
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearcBar;
