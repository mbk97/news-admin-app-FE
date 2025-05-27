export const getImageSrcFromBase64 = (
  base64String: string,
  mimeType = "image/jpeg"
) => {
  return `data:${mimeType};base64,${base64String}`;
};
