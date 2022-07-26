import axios from "axios";

const getUsers = (number) => {
    return new Promise( async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/" + number);

        resolve(data)
    });
};

const getPosts = (number) => {
    return new Promise( async (resolve, reject) => {
        const {dataPost} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number);

        resolve(dataPost)
    });
};

async function getData(userId) {
    try {
        const users = await getUsers(userId);
        const posts = await getPosts(userId);

        users.posts=posts;
        return users;

      } catch (e) {
        console.log(e);
      }
}



export default getData;


