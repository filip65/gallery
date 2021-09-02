import { environment } from "../environment";

const getImageUrl = async (image) => {
  if (image) {
    return fetch(`${environment.apiUrl}/images/300x0/${image.fullpath}`).then(
      (res) => res.url
    );
  } else {
    return "#797979";
  }
};

export default getImageUrl;
