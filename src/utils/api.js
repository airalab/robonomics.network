import axios from "axios";

export async function getContributors() {
  try {
    const result = await axios.get(
      "https://crowdloan-info.robonomics.network/api/contributor"
    );
    return result.data.result;
  } catch (error) {
    console.log(error);
    return [];
  }
}
