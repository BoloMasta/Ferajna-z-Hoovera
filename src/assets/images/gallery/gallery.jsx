import moment from "moment";

import bemowo01082022 from "./bemowo01082022.json";
import skwer03052022 from "./skwer03052022.json";
import studio19032022 from "./studio19032022.json";
import niepodlegla11112021 from "./niepodlegla11112021.json";
import flora19012020 from "./flora19012020.json";

const gallery = [bemowo01082022, skwer03052022, studio19032022, niepodlegla11112021, flora19012020];

export const gallerySorted = gallery.sort((a, b) => moment(b.date, "DD.MM.YYYY") - moment(a.date, "DD.MM.YYYY"));
