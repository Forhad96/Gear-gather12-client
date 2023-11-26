import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
// this utils for upload image in imgbb
const imageUpload = async (photo) => {
  try {
    // Create FormData for Image Upload
    const imageFormData = new FormData();
    imageFormData.append("key", image_hosting_key);
    imageFormData.append("image", photo);

    // Upload image to ImageBB
    const imageUploadResponse = await axios.post(
      image_hosting_api,
      imageFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return imageUploadResponse.data.data.url;
  } catch (error) {
    console.log(error);
  }

  return;
};
export default imageUpload;
