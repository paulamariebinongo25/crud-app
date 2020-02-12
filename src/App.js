import React from "react";
import "./App.css";
import "bulma/css/bulma.css";

import ListOfUsersToBeFollowedTable from "./components/tables/ListOfUsersToBeFollowedTable";
import UserProfile from "./components/forms/UserProfile";

const App = () => {
  return (
    <div>
      <ListOfUsersToBeFollowedTable />
      <UserProfile />
    </div>
  );
};

export default App;
