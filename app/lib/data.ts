import dotenv from "dotenv";
import { unstable_noStore as noStore } from "next/cache";

dotenv.config();

const localURL = process.env.LOCAL_URL;

export type Post = {
  _id: string;
  category: string;
  title: string;
  content: string;
  imageLink: string | "";
  imageCaption: string | "";
};

/*

*****************    ACTIONS FOR GET REQUESTS  ***********************

*/

// GET all posts
export async function getAllPosts(): Promise<Post[]> {
  noStore();
  try {
    const response = await fetch(`http://localhost:5000/api/posts`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    console.log(data.posts)

    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Return an empty array or throw the error to handle it in the calling code
    return [];
    // throw error;
  }
}

// GET a specific post by ID
export async function getSpecificPost(id: string) {
  noStore();
  try {
    const response = await fetch(`http://localhost:5000/api/posts/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return data.post;
  } catch (err) {
    console.log(err);
    return [];
  }
}

// GET posts by thread
export async function getPostsByThread(thread: string) {
  noStore();
  try {
    const response = await fetch(
      `http://localhost:5000/api/posts?category=${thread}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const filteredPosts = await response.json();

    console.log(filteredPosts.posts)

    return filteredPosts.posts;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getPostsBySearch(title: string) {
  noStore();
  try {
    if (title.length >= 3) {
      const response = await fetch(
        `http://localhost:5000/api/search?title=${title}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status})}`);
      }

      const allPosts = await response.json();

      return allPosts.posts;

    } else {
      return []
    }

  } catch (err) {
    console.log(err);
    return [];
  }
}