import React, { useState } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../../redux/user/userActions";

const AddUserForm = () => {
  const user = useState([]);
  const [addNewUser, setAddNewUser] = useState({
    id: null,
    username: "",
    first_name: "",
    last_name: ""
  });

  const handleInputChangeId = e => {
    setAddNewUser({ ...addNewUser, id: e.target.value });
  };
  const handleInputChangeUsername = e => {
    setAddNewUser({ ...addNewUser, username: e.target.value });
  };
  const handleInputChangeFirstName = e => {
    setAddNewUser({ ...addNewUser, first_name: e.target.value });
  };
  const handleInputChangeLastName = e => {
    setAddNewUser({ ...addNewUser, last_name: e.target.value });
  };

  const handleClickAddUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/", {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        method: "POST",
        body: JSON.stringify(addNewUser)
      });
      fetchUsers();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    // if (!user.username) return;

    handleClickAddUser(addNewUser);
  };

  return (
    <form
      className="square columns is-mobile is-desktop is-centered"
      onSubmit={() => handleSubmit()}
    >
      <div className="box1 box">
        <div className="title is-4 has-text-centered">Add User</div>
        <div className="field">
          <label className="subtitle is-6 has-text-centered">User ID</label>
          <div className="control is-clipped">
            <input
              className="input is-black is-normal is-clipped"
              type="number"
              name="id"
              value={user.id}
              onChange={handleInputChangeId}
            />
          </div>
        </div>

        <div className="field">
          <label className="subtitle is-6 has-text-centered">Username</label>
          <div className="control">
            <input
              className="input is-black is-normal"
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChangeUsername}
            />
          </div>
        </div>
        <div className="field">
          <label className="subtitle is-6 has-text-centered">First Name</label>
          <div className="control">
            <input
              className="input is-black is-normal"
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleInputChangeFirstName}
            />
          </div>
        </div>
        <div className="field">
          <label className="subtitle is-6 has-text-centered">Last Name</label>
          <div className="control">
            <input
              className="input is-black is-normal"
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleInputChangeLastName}
            />
          </div>
        </div>

        <div className="level">
          <div className="level-item has-centered">
            <div className="field">
              <div className="control">
                <button
                  className="button is-rounded is-black is-fullwidth"
                  onClick={() => handleClickAddUser()}
                >
                  Add New User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    usersData: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
