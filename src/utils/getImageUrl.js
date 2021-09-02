import { environment } from "../environment";

const getImageUrl = async (image, width = 400) => {
  if (image) {
    return fetch(`${environment.apiUrl}/images/${width}x0/${image.fullpath}`)
      .then((res) => {
        if (res.ok) {
          return res.url;
        } else {
          throw Error("nepodarilo sa nacitat obrazok");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return "#d4d4d4";
  }
};

export default getImageUrl;
