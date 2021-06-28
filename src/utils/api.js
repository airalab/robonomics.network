import axios from "axios";

export async function getStat(data) {
  try {
    const result = await axios.get(
      "https://crowdloan-info.robonomics.network/api/statistic"
    );
    return result.data.result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function saveEmail(data) {
  try {
    const result = await axios.post(
      "https://crowdloan-info.robonomics.network/api/email",
      data
    );
    return result.data.result;
  } catch (error) {
    console.log(error);
    return [];
  }
}
