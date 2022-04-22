import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <>
      <ul>
        {props.filterdUsers.map((user, i) => (
          <li className={classes.users} key={i}>
            {user}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
