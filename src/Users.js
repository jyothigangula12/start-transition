export const users = () => {
  const userList = [];
  for (let i = 0; i < 1000; i++) {
    userList.push(`UserList ${i + 1}`);
  }
  return userList;
};
