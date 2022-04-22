import { useState, useTransition } from "react";
import "./App.css";
import UserList from "./UserList";
import { users } from "./Users";

const list = users();
const filterUsersList = (filteruser) => {
  console.log(list);
  if (!filteruser) {
    return list;
  }
  return list.filter((user) => user.includes(filteruser));
};
function App() {
  const [filterUser, setFilterUser] = useState("");
  const [isPending, startTransition] = useTransition();
  function filterInput(e) {
    startTransition(() => {
      setFilterUser(e.target.value);
    });
  }
  const filterdUser = filterUsersList(filterUser);
  console.log(filterdUser);
  return (
    <div className="App">
      <input type="text" onChange={filterInput} />
      {isPending && <p>Updating List...</p>}
      <UserList filterdUsers={filterdUser} />
    </div>
  );
}

export default App;
