import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/user/userActions";

import EditUserForm from "../forms/EditUserForm";

const ListOfUsersTobeFollowedTable = ({ usersData, fetchUsers }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const [editUser, setEditUser] = useState({
    id: "",
    username: "",
    first_name: "",
    last_name: ""
  });

  const handleClickEditUser = (id, username, first_name, last_name) => {
    console.log(editUser);
    setEditUser({ id, username, first_name, last_name });
    setIsModalActive(true);
  };

  const handleClickDeleteUser = id => {
    fetch("http://localhost:3000/users/" + id, { method: "DELETE" })
      .then(response => {
        response.json();
        console.log(response);
        fetchUsers();
      })
      .catch(error => {
        console.log(error);
      });
  };
  // const handleClickEdit = id => {
  //   fetch("http://localhost:3000/users/" + id, {
  //     headers: {
  //       "Content-Type": "application/json;charset-utf-8"
  //     },
  //     method: "PUT",
  //     body: JSON.stringify({
  //       id: "",
  //       username: "",
  //       first_name: "",
  //       last_name: ""
  //     })
  //   })
  //     .then(response => {
  //       response.json();
  //       // .then(response => {
  //       //   console.log(response);
  //       // });
  //       fetchUsers();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  // console.log(handleClickEdit());

  // // useEffect(async () => {
  // //   const response = await fetch(
  // //     "https://api.soundcloud.com/users/3207/followings?client_id=f0sxU3Az3dcl0lS1M9wFJ00SqawVL72n"
  // //   );
  // //   const listUsers = await response.json();
  // //   setListUsers(listUsers.data);
  // //   // console.log(listUsers.data);
  // // }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(usersData);

  return (
    <div>
      <div className="columns is-mobile is-centered">
        <div className="box">
          <div className="table-container">
            <table className="table is-bordered is-fullwidth">
              <thead>
                <tr className="table-row">
                  <th className="title is-6 has-text-centered">
                    <div className="table-cell container">Avatar</div>
                  </th>
                  <th className="title is-6 has-text-centered">
                    <div className="table-cell container">Username</div>
                  </th>
                  <th className="title is-6 has-text-centered">
                    <div className="table-cell container">First Name</div>
                  </th>
                  <th className="title is-6 has-text-centered">
                    <div className="table-cell container">Last Name</div>
                  </th>
                  <th className="title is-6 has-text-centered">
                    <div className="table-cell container">Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {usersData.map(user => (
                  <tr className="table-row-hover" key={user.id}>
                    <td className="subtitle is-6 has-text-centered">
                      <div className="table-cell-hover container">
                        <img src={user.avatar_url} alt="" />
                      </div>
                    </td>
                    <td className="subtitle is-6 has-text-centered">
                      <div className="table-cell-hover container">
                        {user.username}
                      </div>
                    </td>
                    <td className="subtitle is-6 has-text-centered">
                      <div className="table-cell-hover container">
                        {user.first_name}
                      </div>
                    </td>
                    <td className="subtitle is-6 has-text-centered">
                      <div className="table-cell-hover container">
                        {user.last_name}
                      </div>
                    </td>
                    <td className="subtitle is-6 has-text-centered">
                      <div className="container">
                        <div className="level">
                          <div className="level-item">
                            <div className="buttons">
                              <button
                                className="button is-link is-hoverable"
                                onClick={() =>
                                  handleClickEditUser(
                                    user.id,
                                    user.username,
                                    user.first_name,
                                    user.last_name
                                  )
                                }
                              >
                                <span className="icon is-medium is-left">
                                  <i className="fas fa-pen"></i>
                                </span>
                                <span>Edit</span>
                              </button>
                              <EditUserForm
                                editUser={editUser}
                                setEditUser={setEditUser}
                                isModalActive={isModalActive}
                                setIsModalActive={setIsModalActive}
                              />
                              <button
                                className="second-btn button is-danger"
                                onClick={() => handleClickDeleteUser(user.id)}
                              >
                                <span className="icon is-medium is-left">
                                  <i className="fas fa-trash"></i>
                                </span>
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfUsersTobeFollowedTable);
