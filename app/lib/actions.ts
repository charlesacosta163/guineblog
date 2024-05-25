// MongoDB
import { Blog } from "@/server/schemas/postSchema.js"

export async function postComment(id: string, name: string, comment: string) {
  try {
    if (id && name && comment) {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: id,
          name: name,
          comment: comment
        })
      }
      const response = await fetch("http://localhost:5000/api/posts", options)
      const data = await response.json()

      if (response.ok)
        console.log("Data has been updated!", data)

      else
        console.log("Data update failed!")
    } else
        console.log("Fields not filled!")

  } catch (err) {
    console.log(err)
  }
}