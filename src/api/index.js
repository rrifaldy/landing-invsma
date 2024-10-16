import { baseUrl } from "./apiurl";

export const getDataProject = async () => {
  const response = await fetch(`${baseUrl}/projects`);
  if (!response.ok) {
    throw new Error("Failed to fetch Data");
  }
  const data = await response.json();
  return data;
};

export const postData = async (data) => {
  const api = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!api.ok) {
    throw new Error("Failed to Post Data");
  }

  const response = await api.json();
  return response;
};
