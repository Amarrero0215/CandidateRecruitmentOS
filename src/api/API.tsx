const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    
    console.log("GitHub Token:", import.meta.env.VITE_GITHUB_TOKEN); // Check if token is loaded

    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    console.log("Response Status:", response.status); // Check API response status
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error("Invalid API response, check the network tab");
    }

    console.log("Fetched Users Data:", data); // Log fetched users
    return data;
  } catch (err) {
    console.error("An error occurred:", err); // Log errors
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    console.log("Response Status:", response.status); // Check API response status
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Invalid API response, check the network tab");
    }

    console.log(`User Data for ${username}:`, data); // Log fetched user data
    return data;
  } catch (err) {
    console.error("An error occurred:", err); // Log errors
    return {};
  }
};

export { searchGithub, searchGithubUser };
