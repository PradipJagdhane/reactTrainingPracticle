import React from "react";

const ListKeyEx = () => {
  const users = [
    { id: 1, name: "Pradip" },
    { id: 2, name: "Adarsh" },
    { id: 3, name: "Abhi" },
  ];

  console.log("UserList", users);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListKeyEx;
