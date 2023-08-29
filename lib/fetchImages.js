import { ImageSchemaWithPhotos } from "@/models/Images";

export default async function fetchImages(url) {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    });

    if (!res.ok) throw new Error("Fetch Images error!\n");

    const ImagesResults = await res.json();

    const parsedData = ImageSchemaWithPhotos.parse(ImagesResults);

    if (parsedData.total_results === 0) return undefined;

    return parsedData;
  } catch (error) {
    console.log(error);
  }
}
