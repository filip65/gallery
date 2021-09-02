import { environment } from "../environment";

const getImageUrl = async (image, width = 400) => {
  if (image) {
    return fetch(
      `${environment.apiUrl}/images/${width}x0/${image.fullpath}`
    ).then((res) => res.url);
  } else {
    return "#797979";
  }
};

export default getImageUrl;
