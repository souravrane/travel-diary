interface Location {
  lat: string;
  lon: string;
}

export default interface Place {
  id: string;
  image: string;
  title: string;
  address: string;
  creator: string;
  location: Location;
  description: string;
}
