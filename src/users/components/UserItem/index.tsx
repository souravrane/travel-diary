import React from "react";
import { Link } from "react-router-dom";
import User from "../../../models/User";
import Avatar from "../../../shared/components/Avatar/Avatar";
import Card from "../../../shared/components/Card/Card";
import "./UserItem.css";

type Props = User;

export const UserItem = ({ id, image, name, places }: Props) => {
  return (
    <div>
      <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${id}/places`}>
            <div className="user-item__image">
              <Avatar image={image} alt={name} />
            </div>
            <div className="user-item__info">
              <h2>{name}</h2>
              <h3>
                {places}
                {places === 1 ? " Place" : " Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    </div>
  );
};
