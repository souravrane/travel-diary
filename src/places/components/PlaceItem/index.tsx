import React, { useState } from "react";
import Place from "../../../models/Place";
import Card from "../../../shared/components/Card/Card";
import Button from "../../../shared/components/FormElements/Button";
import Modal from "../../../shared/components/Modal";
import GoogleMap from "../../../shared/components/GoogleMap";
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
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">{/* <GoogleMap /> */}</div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>
              View on map
            </Button>
            <Button to={`/places/${id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
