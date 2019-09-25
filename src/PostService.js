// import axios from "axios";
import {API_ENDPOINT} from "../http-constants"
const url = "api/posts/";
console.log("API_ENDPOINT",API_ENDPOINT)
class PostService {
  //get posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await API_ENDPOINT.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  //create post
  static insertPost(text) {
    return API_ENDPOINT.post(url, {
      text: text
    });
  }

  //delete post
  static deletePost(id) {
    return API_ENDPOINT.delete(`${url}${id}`);
  }
}

export default PostService;
