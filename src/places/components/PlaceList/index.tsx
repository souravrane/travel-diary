import React from "react";
import Place from "../../../models/Place";
import Card from "../../../shared/components/Card/Card";
import PlaceItem from "../PlaceItem";

import "./PlaceList.css";

type Props = {
  places: Place[];
};

const PlaceList = ({ places }: Props) => {
  if (!places.length) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one ??</h2>
          <button>Shared Places</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {places.map((place: Place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          address={place.address}
          creator={place.creator}
          location={place.location}
          description={place.description}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
