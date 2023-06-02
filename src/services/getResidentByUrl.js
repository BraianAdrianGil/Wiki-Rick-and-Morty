import axios from "axios";

export const getResidentByUrl = async (residentUrls) => {
  try {
    const requests = residentUrls.map((url) => axios.get(url));
    const responses = await Promise.all(requests);
    const residents = responses.map((response) => response.data);
    return residents;
  } catch (error) {
    console.error("Error getting residents:", error);
    throw error;
  }
};
