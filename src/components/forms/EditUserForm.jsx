import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/user/userActions";

const EditUserForm = ({
  editUser,
  setEditUser,
  isModalActive,
  setIsModalActive
}) => {
  const handleClickCloseModal = () => {
    setIsModalActive(false);
  };

  const handleInputChangeId = e => {
    setEditUser({ ...editUser, id: e.target.value });
  };
  const handleInputChangeUsername = e => {
    setEditUser({ ...editUser, username: e.target.value });
    console.log({ ...editUser, username: e.target.value });
  };
  const handleInputChangeFirstName = e => {
    setEditUser({ ...editUser, first_name: e.target.value });
  };
  const handleInputChangeLastName = e => {
    setEditUser({ ...editUser, last_name: e.target.value });
  };
  const handleSubmit = e => {
    e.prevent.default();
  };

  const handleClickEditUser = async id => {
    try {
      const response = await fetch("http://localhost:3000/users/" + id, {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        method: "PUT",
        body: JSON.stringify(editUser)
      });
      fetchUsers();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class={`modal ${isModalActive ? "is-active" : ""}`}>
      <form onSubmit={() => handleSubmit()}>
        <div class="modal-background"></div>

        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Edit User</p>
            <button
              class="modal-close is-large"
              aria-label="close"
              onClick={handleClickCloseModal}
            ></button>
          </header>
          <section class="modal-card-body">
            <div className="field has-text-left">
              <label className="subtitle is-6 has-text-centered">User ID</label>
              <div className="control is-clipped">
                <input
                  className="input is-black is-normal is-clipped"
                  type="number"
                  name="id"
                  value={editUser.id}
                  onChange={handleInputChangeId}
                />
              </div>
            </div>

            <div className="field has-text-left">
              <label className="subtitle is-6 has-text-centered">
                Username
              </label>
              <div className="control">
                <input
                  className="input is-black is-normal"
                  type="text"
                  name="username"
                  value={editUser.username}
                  onChange={handleInputChangeUsername}
                />
              </div>
            </div>
            <div className="field has-text-left">
              <label className="subtitle is-6 has-text-centered">
                First Name
              </label>
              <div className="control">
                <input
                  className="input is-black is-normal"
                  type="text"
                  name="first_name"
                  value={editUser.first_name}
                  onChange={handleInputChangeFirstName}
                />
              </div>
            </div>
            <div className="field has-text-left">
              <label className="subtitle is-6 has-text-centered">
                Last Name
              </label>
              <div className="control">
                <input
                  className="input is-black is-normal"
                  type="text"
                  name="last_name"
                  value={editUser.last_name}
                  onChange={handleInputChangeLastName}
                />
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button
              class="button is-success is-fullwidth is-rounded is-medium"
              type="submit"
              onClick={() => handleClickEditUser(editUser.id)}
            >
              <span className="icon is-medium is-left">
                <i className="fas fa-plus"></i>
              </span>
              <span>Save Changes</span>
            </button>
          </footer>
        </div>
      </form>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);
