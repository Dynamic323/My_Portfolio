const backendUrl = "http://localhost:2000";
export const loginuser = async (cridentials) => {
  try {
    const res = fetch(`${backendUrl}/api/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "applicatiion/json",
      },

      body: JSON.stringify(cridentials),

      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Login error:", error);
    throw error; // Re-throw for handling in component
  }
};
