const getImageUrl = async (fullpath) => {
  if (fullpath) {
    fetch(`http://api.programator.sk/images/300x0/${fullpath}`).then((res) => {
      return res.url;
    });
  } else {
    return "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png";
  }
};

export default getImageUrl;
