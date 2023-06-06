import moment from "moment";

import bemowo010822 from "./bemowo010822.json";
import skwer030522 from "./skwer030522.json";
import studio190322 from "./studio190322.json";
import niepodlegla111121 from "./niepodlegla111121.json";
import flora190120 from "./flora190120.json";

export const galleries = [bemowo010822, skwer030522, studio190322, niepodlegla111121, flora190120];

export const galleriesSortedCovers = galleries
  .sort((a, b) => moment(b.date, "DD.MM.YYYY") - moment(a.date, "DD.MM.YYYY"))
  .map((images) => ({
    cover: images.images[0].url,
    coverAlt: images.images[0].alt,
    location: images.location,
    date: images.date,
    galeryId: images.galeryId,
  }));
