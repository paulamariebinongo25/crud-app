import React, { useState, useEffect } from "react";

const ListOfUsersFollowedTable = props => {
  const [listUsers, setListUsers] = useState([]);
  // const initialAddState = {
  //   id: null,
  //   username: "",
  //   first_name: "",
  //   last_name: "",
  //   full_name: "",
  //   city: "",
  //   followers_count: "",
  //   followings_count: ""
  // };
  // const [addUsers, setAddUsers] = useState(initialAddState);

  useEffect(async () => {
    const response = await fetch(
      "https://api.soundcloud.com/users/3207/followings?client_id=f0sxU3Az3dcl0lS1M9wFJ00SqawVL72n"
    );
    const listUsers = await response.json();
    setListUsers(listUsers.collection);
    // console.log(listUsers.collection);
  }, []);
  return (
    <div class="columns is-mobile is-centered">
      <div class="box">
        <div class="table-container">
          <table class="table is-bordered is-fullwidth">
            <thead>
              <tr class="table-row">
                <th class="title is-6 has-text-centered">
                  <div class="table-cell container">Avatar</div>
                </th>
                <th class="title is-6 has-text-centered">
                  <div class="table-cell container">Username</div>
                </th>
                <th class="title is-6 has-text-centered">
                  <div class="table-cell container">First Name</div>
                </th>
                <th class="title is-6 has-text-centered">
                  <div class="table-cell container">Last Name</div>
                </th>
                <th class="title is-6 has-text-centered">
                  <div class="table-cell container">Full Name</div>
                </th>
                <th class="title is-6 has-text-centered">
                  <div class="table-cell container">City</div>
                </th>
                <th class="title is-6 has-text-centered">
                  <div class="level">
                    <div class="level-item">
                      <div class="table-cell container">Followers</div>
                    </div>
                  </div>
                </th>
                <th class="title is-6 has-text-centered">
                  <div class="level">
                    <div class="level-item">
                      <div class="table-cell container">Followings</div>
                    </div>
                  </div>
                </th>
                <th class="title is-6 has-text-centered">
                  <div class="table-cell container">Actions</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {listUsers < 0 ? (
                listUsers.map(collection => (
                  <tr class="table-row-hover" key={collection.id}>
                    <td class="subtitle is-6 has-text-centered">
                      <div class="table-cell-hover container">
                        <img src={collection.avatar_url} />
                      </div>
                    </td>
                    <td class="subtitle is-6 has-text-centered">
                      <div class="table-cell-hover container">
                        {collection.username}
                      </div>
                    </td>
                    <td class="subtitle is-6 has-text-centered">
                      <div class="table-cell-hover container">
                        {collection.first_name}
                      </div>
                    </td>
                    <td class="subtitle is-6 has-text-centered">
                      <div class="table-cell-hover container">
                        {collection.last_name}
                      </div>
                    </td>
                    <td class="subtitle is-6 has-text-centered">
                      <div class="table-cell-hover container">
                        {collection.full_name}
                      </div>
                    </td>
                    <td class="subtitle is-6 has-text-centered">
                      <div class="table-cell-hover container">
                        {collection.city}
                      </div>
                    </td>
                    <td class="subtitle is-6 has-text-centered">
                      <div class="table-cell-hover container">
                        {collection.followers_count}
                      </div>
                    </td>
                    <td class="subtitle is-6 has-text-centered">
                      <div class="table-cell-hover container">
                        {collection.followings_count}
                      </div>
                    </td>
                    <td class="subtitle is-6 has-text-centered">
                      <div class="level">
                        <div class="level-item">
                          <div class="buttons">
                            <button class="button is-link is-hoverable">
                              <span class="icon is-medium is-left">
                                <i class="fas fa-user-plus"></i>
                              </span>
                              <span>Follow</span>
                            </button>
                            <button
                              class="second-btn button is-danger"
                              onClick={() => props.deleteUser(collection.id)}
                            >
                              <span class="icon is-medium is-left">
                                <i class="fas fa-trash"></i>
                              </span>
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>
                    <div className="container">
                      <div class="subtitle is-6 has-text-centered">
                        No Lists of Following
                      </div>
                    </div>
                  </td>
                  <td class="subtitle is-6 has-text-centered">
                    <div class="level">
                      <div class="level-item">
                        <button class="second-btn button is-danger" disabled>
                          <span class="icon is-medium is-left">
                            <i class="fas fa-trash"></i>
                          </span>
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListOfUsersFollowedTable;
