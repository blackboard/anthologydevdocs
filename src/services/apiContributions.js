const URL =
  "https://z9yn4qiqgk.execute-api.us-east-1.amazonaws.com/contributions";

export async function apiGetContributions() {
  try {
    const response = await fetch(URL);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      console.log(`Error status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to get the repositories", error);
  }
}
