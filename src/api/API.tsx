import { Candidate } from "../interfaces/Candidate.interface";

const searchGithub = async (): Promise<Candidate[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;

    console.log("Fetching users with token:", import.meta.env.VITE_GITHUB_TOKEN);

    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const users: Candidate[] = await response.json();
    console.log("Basic Users Data:", users); // Log basic users data

    if (!users || users.length === 0) {
      console.error("No users found.");
      return [];
    }

    // Fetch detailed user info with proper type annotations
    const detailedUsers = await Promise.all(
      users.map(async (user: Candidate) => {
        const userResponse = await fetch(
          `https://api.github.com/users/${user.login}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          }
        );

        if (!userResponse.ok) {
          console.warn(`Failed to fetch details for ${user.login}: ${userResponse.status}`);
          return null; // Return null to filter out failed requests
        }

        const detailedUser: Candidate = await userResponse.json();
        return detailedUser;
      })
    );

    // Filter out null values (failed API calls)
    const validUsers: Candidate[] = detailedUsers.filter(user => user !== null) as Candidate[];
    console.log("Detailed Users Data:", validUsers);

    return validUsers;
  } catch (err) {
    console.error("An error occurred in searchGithub:", err);
    return [];
  }
};

export { searchGithub };
