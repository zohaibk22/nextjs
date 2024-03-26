import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res: User[] = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((data) => data.json());
  return (
    <>
      <h1>Users</h1>
      <ul>
        {res.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
