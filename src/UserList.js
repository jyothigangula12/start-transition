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
/* const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product) => (
        <li>{product}</li>
      ))}
    </ul> */
export default UserList;
