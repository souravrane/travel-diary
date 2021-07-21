import React from "react";
import { UserItem } from "../UserItem";
import User from "../../../models/User";
import "./UserList.css";
import Card from "../../../shared/components/Card/Card";

type Props = {
  users: User[];
};
export const UserList = ({ users }: Props) => {
  if (!users.length) {
    return (
      <div className="users-list__container">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <div className="users-list__container">
      {users.map((user: User) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          places={user.places}
        />
      ))}
    </div>
  );
};
