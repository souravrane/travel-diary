import React from "react";
import { UserList } from "../components/UserList";
import User from "../../models/User";

export const Users = () => {
  const USERS: User[] = [
    {
      id: "u1",
      name: "Sourav",
      image:
        "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      places: 3,
    },
    {
      id: "u2",
      name: "Abhishek",
      image:
        "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      places: 3,
    },
  ];
  return <UserList users={USERS} />;
};
