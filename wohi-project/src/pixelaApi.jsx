const BASE_URL = 'https://pixe.la/v1/users';
//vite.pixela information imported from .env file 
const username = import.meta.env.VITE_PIXELA_USERNAME;
const token = import.meta.env.VITE_PIXELA_TOKEN;
const graphId = import.meta.env.VITE_PIXELA_GRAPH_ID

export const createPixel = async (date, quantity) => {
  try {
    const response = await fetch(`${BASE_URL}/${username}/graphs/${graphId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-USER-TOKEN': token,
      },
      body: JSON.stringify({
        date,
        quantity,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating pixel:", error);
    return null;
  }
};

export const getGraphStats = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${username}/graphs/${graphId}/stats`, {
      method: 'GET',
      headers: {
        'X-USER-TOKEN': token,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching graph stats:", error);
    return null;
  }
};
