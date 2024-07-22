const mainURL = "https://next-react-course-server.onrender.com";

export const getAllUsers = async (): Promise<any> => {
  const route = "/getAllUsers";

  try {
    const response = await fetchAPI(route, "GET");
    return response;
  } catch (error) {
    console.error("Error fetching all users:", error);
  }
};

const fetchAPI = async (route: string, method: string = "GET", body: any = null): Promise<any> => {
  const url = mainURL + route;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};