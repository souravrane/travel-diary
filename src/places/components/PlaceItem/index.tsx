import React from "react";
import Place from "../../../models/Place";
import Card from "../../../shared/components/Card/Card";
import Button from "../../../shared/components/FormElements/Button";
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
          <Button inverse>View on map</Button>
          <Button to={`/places/${id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
