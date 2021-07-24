import React from "react";
import Place from "../../../models/Place";
import Card from "../../../shared/components/Card/Card";
import "./PlaceItem.css";

type Props = Place;

const PlaceItem = ({
  id,
  image,
  title,
  address,
  creator,
  location,
  description,
}: Props) => {
  return (
    <li className="place-item">
      <Card>
        <div className="place-item__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <button>View on map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
