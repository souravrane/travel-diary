import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State building",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
    description: "description",
  },
  {
    id: "p2",
    title: "White house",
    image:
      "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTU3ODc5MDg3MjM1ODY3OTc3/hith-white-house-attacks.jpg",
    address: "262 Central Park West, New York, NY 10024, United States",
    location: {
      lat: 38.8976763,
      lng: -77.0452845,
    },
    creator: "u1",
    description: "description",
  },
];

export const UserPlaces = () => {
  const params: any = useParams();
  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.creator === params.userId
  );
  return <PlaceList places={loadedPlaces} />;
};
