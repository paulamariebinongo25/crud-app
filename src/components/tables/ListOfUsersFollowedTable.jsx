// import React, { useState, useEffect } from "react";

// // {
// //   {
// //     "id": "1",
// //     "avatar_url": "https://i1.sndcdn.com/avatars-000602838126-ptk177-large.jpg",
// //     "username": "xmen_Boy",
// //     "first_name": "X",
// //     "last_name": "Man"
// //   }
// //   "id": "2",
// //   "avatar_url": "https://i1.sndcdn.com/avatars-000009799632-tqwjcs-large.jpg",
// //   "username": "cleffy",
// //   "first_name": "Cle",
// //   "last_name": "Ford"
// // },
// // {
// //   "id":  "3",
// //   "avatar_url": "https://i1.sndcdn.com/avatars-000666018230-yggt3o-large.jpg",
// //   "username": "intsik",
// //   "first_name": "Paulo",
// //   "last_name": "Unggoybels"
// // },
// // {
// //   "id":  "4",
// //   "avatar_url": "https://i1.sndcdn.com/avatars-000191314759-hp74mu-large.jpg",
// //   "username": "pulangcrackers",
// //   "first_name": "Paula",
// //   "last_name": "Maria"
// // }

// const ListOfUsersFollowedTable = props => {
//   // const [usersData, setusersData] = useState([]);
//   // // const initialAddState = {
//   // //   id: null,
//   // //   username: "",
//   // //   first_name: "",
//   // //   last_name: "",
//   // //   full_name: "",
//   // //   city: "",
//   // //   followers_count: "",
//   // //   followings_count: ""
//   // // };
//   // // const [addUsers, setAddUsers] = useState(initialAddState);

//   // useEffect(async () => {
//   //   const response = await fetch(
//   //     "https://api.soundcloud.com/users/3207/followings?client_id=f0sxU3Az3dcl0lS1M9wFJ00SqawVL72n"
//   //   );
//   //   const usersData = await response.json();
//   //   setusersData(usersData.collection);
//   //   // console.log(usersData.collection);
//   // }, []);
//   return (
//     <div class="columns is-mobile is-centered">
//       <div class="box">
//         <div class="table-container">
//           <table class="table is-bordered is-fullwidth">
//             <thead>
//               <tr class="table-row">
//                 <th class="title is-6 has-text-centered">
//                   <div class="table-cell container">Avatar</div>
//                 </th>
//                 <th class="title is-6 has-text-centered">
//                   <div class="table-cell container">Username</div>
//                 </th>
//                 <th class="title is-6 has-text-centered">
//                   <div class="table-cell container">First Name</div>
//                 </th>
//                 <th class="title is-6 has-text-centered">
//                   <div class="table-cell container">Last Name</div>
//                 </th>
//                 <th class="title is-6 has-text-centered">
//                   <div class="table-cell container">Full Name</div>
//                 </th>
//                 <th class="title is-6 has-text-centered">
//                   <div class="table-cell container">City</div>
//                 </th>
//                 <th class="title is-6 has-text-centered">
//                   <div class="level">
//                     <div class="level-item">
//                       <div class="table-cell container">Followers</div>
//                     </div>
//                   </div>
//                 </th>
//                 <th class="title is-6 has-text-centered">
//                   <div class="level">
//                     <div class="level-item">
//                       <div class="table-cell container">Followings</div>
//                     </div>
//                   </div>
//                 </th>
//                 <th class="title is-6 has-text-centered">
//                   <div class="table-cell container">Actions</div>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {props.usersData < 0 ? (
//                 props.usersData.map(collection => (
//                   <tr class="table-row-hover" key={collection.id}>
//                     <td class="subtitle is-6 has-text-centered">
//                       <div class="table-cell-hover container">
//                         <img src={collection.avatar_url} />
//                       </div>
//                     </td>
//                     <td class="subtitle is-6 has-text-centered">
//                       <div class="table-cell-hover container">
//                         {collection.username}
//                       </div>
//                     </td>
//                     <td class="subtitle is-6 has-text-centered">
//                       <div class="table-cell-hover container">
//                         {collection.first_name}
//                       </div>
//                     </td>
//                     <td class="subtitle is-6 has-text-centered">
//                       <div class="table-cell-hover container">
//                         {collection.last_name}
//                       </div>
//                     </td>
//                     <td class="subtitle is-6 has-text-centered">
//                       <div class="table-cell-hover container">
//                         {collection.full_name}
//                       </div>
//                     </td>
//                     <td class="subtitle is-6 has-text-centered">
//                       <div class="table-cell-hover container">
//                         {collection.city}
//                       </div>
//                     </td>
//                     <td class="subtitle is-6 has-text-centered">
//                       <div class="table-cell-hover container">
//                         {collection.followers_count}
//                       </div>
//                     </td>
//                     <td class="subtitle is-6 has-text-centered">
//                       <div class="table-cell-hover container">
//                         {collection.followings_count}
//                       </div>
//                     </td>
//                     <td class="subtitle is-6 has-text-centered">
//                       <div class="level">
//                         <div class="level-item">
//                           <div class="buttons">
//                             <button class="button is-link is-hoverable">
//                               <span class="icon is-medium is-left">
//                                 <i class="fas fa-user-plus"></i>
//                               </span>
//                               <span>Follow</span>
//                             </button>
//                             <button
//                               class="second-btn button is-danger"
//                               onClick={() => props.deleteUser(collection.id)}
//                             >
//                               <span class="icon is-medium is-left">
//                                 <i class="fas fa-trash"></i>
//                               </span>
//                               <span>Delete</span>
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={8}>
//                     <div className="container">
//                       <div class="subtitle is-6 has-text-centered">
//                         No Lists of Following
//                       </div>
//                     </div>
//                   </td>
//                   <td class="subtitle is-6 has-text-centered">
//                     <div class="level">
//                       <div class="level-item">
//                         <button class="second-btn button is-danger" disabled>
//                           <span class="icon is-medium is-left">
//                             <i class="fas fa-trash"></i>
//                           </span>
//                           <span>Delete</span>
//                         </button>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListOfUsersFollowedTable;

// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchUsers } from "../../redux/user/userActions";
// // import PropTypes from "prop-types";

// import ListOfUsersFollowedTable from "./ListOfUsersFollowedTable";
// import UserProfile from "../forms/UserProfile";
// import EditUserForm from "../forms/EditUserForm";

// const ListOfUsersTobeFollowedTable = ({ usersData, fetchUsers }) => {
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   console.log(usersData);
//   const handleClickDeleteUser = id => {
//     fetch("http://localhost:3000/users/" + id, { method: "DELETE" })
//       .then(response => {
//         response.json();
//         // .then(response => {
//         //   console.log(response);
//         // });
//         fetchUsers();
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   const [isModalActive, setIsModalActive] = useState(false);

//   const user = useState([]);
//   const [editUser, setEditUser] = useState({
//     id: user.id,
//     username: user.username,
//     first_name: user.first_name,
//     last_name: user.last_name
//   });

//   const handleClickEditUser = id => {
//     // try {
//     //   const response = await fetch("http://localhost:3000/users/" + id, {
//     //     headers: {
//     //       "Content-type": "application/json; charset=UTF-8"
//     //     },
//     //     method: "PUT",
//     //     body: JSON.stringify(editUser)
//     //   });
//     //   fetchUsers();
//     //   console.log(response);
//     // } catch (error) {
//     //   console.log(error);
//     // }

//     fetch("http://localhost:3000/users/" + id, {
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       },
//       method: "PUT",
//       body: JSON.stringify(editUser)
//     })
//       .then(response => {
//         response.json();

//         console.log(response);

//         fetchUsers();
//       })
//       .catch(error => {
//         console.log(error);
//       });

//     if (isModalActive) {
//       setIsModalActive(false);
//     } else {
//       setIsModalActive(true);
//     }
//   };

//   const handleInputChangeId = e => {
//     setEditUser({ ...editUser, id: e.target.value });
//     console.log({ id: e.target.value });
//   };
//   const handleInputChangeUsername = e => {
//     setEditUser({ ...editUser, username: e.target.value });
//     console.log({ username: e.target.value });
//   };
//   const handleInputChangeFirstName = e => {
//     setEditUser({ ...editUser, first_name: e.target.value });
//     console.log({ first_name: e.target.value });
//   };
//   const handleInputChangeLastName = e => {
//     setEditUser({ ...editUser, last_name: e.target.value });
//     console.log({ last_name: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // if (!user.username) return;
//   };

//   console.log("handleSubmit");

//   // const handleClickEdit = id => {
//   //   fetch("http://localhost:3000/users/" + id, {
//   //     headers: {
//   //       "Content-Type": "application/json;charset-utf-8"
//   //     },
//   //     method: "PUT",
//   //     body: JSON.stringify({
//   //       id: "",
//   //       username: "",
//   //       first_name: "",
//   //       last_name: ""
//   //     })
//   //   })
//   //     .then(response => {
//   //       response.json();
//   //       // .then(response => {
//   //       //   console.log(response);
//   //       // });
//   //       fetchUsers();
//   //     })
//   //     .catch(error => {
//   //       console.log(error);
//   //     });
//   // };
//   // console.log(handleClickEdit());

//   // // useEffect(async () => {
//   // //   const response = await fetch(
//   // //     "https://api.soundcloud.com/users/3207/followings?client_id=f0sxU3Az3dcl0lS1M9wFJ00SqawVL72n"
//   // //   );
//   // //   const listUsers = await response.json();
//   // //   setListUsers(listUsers.data);
//   // //   // console.log(listUsers.data);
//   // // }, []);

//   // ListOfUsersTobeFollowedTable.prototype = {
//   //   fetchUsers: PropTypes.func.isRequired,
//   //   users: PropTypes.object.isRequired
//   // };

//   return (
//     <div>
//       <div className="columns is-mobile is-centered">
//         <div className="box">
//           <div className="table-container">
//             <table className="table is-bordered is-fullwidth">
//               <thead>
//                 <tr className="table-row">
//                   {/* <th className="title is-6 has-text-centered">
//                     <div className="table-cell container">User ID</div>
//                   </th> */}
//                   <th className="title is-6 has-text-centered">
//                     <div className="table-cell container">Avatar</div>
//                   </th>
//                   <th className="title is-6 has-text-centered">
//                     <div className="table-cell container">Username</div>
//                   </th>
//                   <th className="title is-6 has-text-centered">
//                     <div className="table-cell container">First Name</div>
//                   </th>
//                   <th className="title is-6 has-text-centered">
//                     <div className="table-cell container">Last Name</div>
//                   </th>
//                   {/* <th className="title is-6 has-text-centered">
//                     <div className="table-cell container">Full Name</div>
//                   </th>
//                   <th className="title is-6 has-text-centered">
//                     <div className="table-cell container">City</div>
//                   </th>
//                   <th className="title is-6 has-text-centered">
//                     <div className="level">
//                       <div className="level-item">
//                         <div className="table-cell container">Followers</div>
//                       </div>
//                     </div>
//                   </th>
//                   <th className="title is-6 has-text-centered">
//                     <div className="level">
//                       <div className="level-item">
//                         <div className="table-cell container">Followings</div>
//                       </div>
//                     </div>
//                   </th> */}
//                   <th className="title is-6 has-text-centered">
//                     <div className="table-cell container">Actions</div>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {usersData.map(user => (
//                   <tr className="table-row-hover" key={user.id}>
//                     {/* <td className="subtitle is-6 has-text-centered">
//                       <div className="table-cell-hover container">
//                         {user.id}
//                       </div>
//                     </td> */}
//                     <td className="subtitle is-6 has-text-centered">
//                       <div className="table-cell-hover container">
//                         <img src={user.avatar_url} />
//                       </div>
//                     </td>
//                     <td className="subtitle is-6 has-text-centered">
//                       <div className="table-cell-hover container">
//                         {user.username}
//                       </div>
//                     </td>
//                     <td className="subtitle is-6 has-text-centered">
//                       <div className="table-cell-hover container">
//                         {user.first_name}
//                       </div>
//                     </td>
//                     <td className="subtitle is-6 has-text-centered">
//                       <div className="table-cell-hover container">
//                         {user.last_name}
//                       </div>
//                     </td>
//                     {/* <td className="subtitle is-6 has-text-centered">
//                       <div className="table-cell-hover container">
//                         {data.full_name}
//                       </div>
//                     </td>
//                     <td className="subtitle is-6 has-text-centered">
//                       <div className="table-cell-hover container">
//                         {data.city}
//                       </div>
//                     </td>
//                     <td className="subtitle is-6 has-text-centered">
//                       <div className="table-cell-hover container">
//                         {data.followers_count}
//                       </div>
//                     </td>
//                     <td className="subtitle is-6 has-text-centered">
//                       <div className="table-cell-hover container">
//                         {data.followings_count}
//                       </div>
//                     </td> */}
//                     <td className="subtitle is-6 has-text-centered">
//                       <div className="container">
//                         <div className="level">
//                           <div className="level-item">
//                             <div className="buttons">
//                               <button
//                                 className="button is-link is-hoverable"
//                                 onClick={() => handleClickEditUser(user.id)}
//                               >
//                                 <span className="icon is-medium is-left">
//                                   <i className="fas fa-pen"></i>
//                                 </span>
//                                 <span>Edit</span>
//                               </button>
//                               <div
//                                 class={`modal ${
//                                   isModalActive ? "is-active" : ""
//                                 }`}
//                               >
//                                 <form onSubmit={() => handleSubmit()}>
//                                   <div class="modal-background"></div>
//                                   {/* <div class="modal-content"> */}
//                                   <div class="modal-card">
//                                     <header class="modal-card-head">
//                                       <p class="modal-card-title">Edit User</p>
//                                       <button
//                                         // class="delete"
//                                         class="modal-close is-large"
//                                         aria-label="close"
//                                         onClick={handleClickEditUser}
//                                       ></button>
//                                     </header>
//                                     <section class="modal-card-body">
//                                       <div className="field has-text-left">
//                                         <label className="subtitle is-6 has-text-centered">
//                                           User ID
//                                         </label>
//                                         <div className="control is-clipped">
//                                           <input
//                                             className="input is-black is-normal is-clipped"
//                                             type="number"
//                                             name="id"
//                                             value={user.id}
//                                             onChange={handleInputChangeId}
//                                           />
//                                         </div>
//                                       </div>

//                                       <div className="field has-text-left">
//                                         <label className="subtitle is-6 has-text-centered">
//                                           Username
//                                         </label>
//                                         <div className="control">
//                                           <input
//                                             className="input is-black is-normal"
//                                             type="text"
//                                             name="username"
//                                             value={user.username}
//                                             onChange={handleInputChangeUsername}
//                                           />
//                                         </div>
//                                       </div>
//                                       <div className="field has-text-left">
//                                         <label className="subtitle is-6 has-text-centered">
//                                           First Name
//                                         </label>
//                                         <div className="control">
//                                           <input
//                                             className="input is-black is-normal"
//                                             type="text"
//                                             name="first_name"
//                                             value={user.first_name}
//                                             onChange={
//                                               handleInputChangeFirstName
//                                             }
//                                           />
//                                         </div>
//                                       </div>
//                                       <div className="field has-text-left">
//                                         <label className="subtitle is-6 has-text-centered">
//                                           Last Name
//                                         </label>
//                                         <div className="control">
//                                           <input
//                                             className="input is-black is-normal"
//                                             type="text"
//                                             name="last_name"
//                                             value={user.last_name}
//                                             onChange={handleInputChangeLastName}
//                                           />
//                                         </div>
//                                       </div>
//                                     </section>
//                                     <footer class="modal-card-foot">
//                                       <button
//                                         class="button is-success is-fullwidth is-rounded is-medium"
//                                         type="submit"
//                                         onClick={() =>
//                                           handleClickEditUser(user.id)
//                                         }
//                                       >
//                                         <span className="icon is-medium is-left">
//                                           <i className="fas fa-plus"></i>
//                                         </span>
//                                         <span>Save Changes</span>
//                                       </button>
//                                     </footer>
//                                   </div>
//                                 </form>
//                               </div>
//                               {/* </div> */}
//                               <button
//                                 className="second-btn button is-danger"
//                                 onClick={() => handleClickDeleteUser(user.id)}
//                               >
//                                 <span className="icon is-medium is-left">
//                                   <i className="fas fa-trash"></i>
//                                 </span>
//                                 <span>Delete</span>
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 {/* // ) : (
//                 //   <tr>
//                 //     <td colSpan={4}>
//                 //       <div classNameName="container">
//                 //         <div className="subtitle is-6 has-text-centered">
//                 //           No Lists of Following
//                 //         </div>
//                 //       </div>
//                 //     </td>
//                 //     <td className="subtitle is-6 has-text-centered">
//                 //       <div className="level">
//                 //         <div className="level-item">
//                 //           <button className="second-btn button is-danger" disabled>
//                 //             <span className="icon is-medium is-left">
//                 //               <i className="fas fa-trash"></i>
//                 //             </span>
//                 //             <span>Delete</span>
//                 //           </button>
//                 //         </div>
//                 //       </div>
//                 //     </td>
//                 //   </tr>
//                 // )} */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {/* <ListOfUsersFollowedTable />
//       <UserProfile /> */}
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     usersData: state.users
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ListOfUsersTobeFollowedTable);
