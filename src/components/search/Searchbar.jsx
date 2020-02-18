import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/user/userActions";

const Searchbar = ({ fetchUsers }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeSearch = e => {
    fetchUsers(e.target.value);
    setInputValue(e.target.value);
  };
  return (
    <div className="field has-addons">
      <div className="search-bar nav-field-control control">
        <input
          className="input"
          type="text"
          placeholder="Search"
          onChange={handleChangeSearch}
          value={inputValue}
        />
      </div>
      <div className="search-bar nav-field-control control">
        <a className="button is-dark has-text-white is-rounded">Search</a>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: keyword => dispatch(fetchUsers(keyword))
  };
};

export default connect(undefined, mapDispatchToProps)(Searchbar);
