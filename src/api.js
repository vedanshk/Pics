import axios from "axios";
const key = "uGlk_UEg3pAklXD5p__4OWq8iBF5Lyp2spGMddTfPuw";
const baseUrl = "https://api.unsplash.com";
const searchImages = async(term) => {
  const  response = await axios.get(`${baseUrl}/search/photos`, {
    headers: {
      Authorization: `Client-ID ${key}`,
    },
    params: {
      query:term,
    },
  });

  return response.data.results;
};

export default searchImages;
