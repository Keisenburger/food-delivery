import { NewFood } from "@/types";

const baseUrl = "http://localhost:4000/";

export const postFood = async (food: NewFood) => {
  try {
    console.log(food);
    const response = await fetch(`${baseUrl}food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food), // send directly
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Successfully posted:", data);
    return data;
  } catch (error) {
    console.error("Error posting food:", error);
  }
};
