import { axiosInstance } from "@/utils/axios";

export async function fetchAllImages() {
  try {
    const response = await axiosInstance.get("");
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
