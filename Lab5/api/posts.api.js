const UUID = require('uuid');

const posts = new Map();

const createPost = ({name, description}) =>{
    const post = {
        name,
        description,
        id: UUID.v4(),
        date:new Date()
    };
    posts.set(post.id,post);
};

const getPosts = () =>{
    // for(let post in posts){
    //
    // }
    return [...posts.values()] // posts -> Map
};

const getPost = (id) => {
    return posts.get(id); //id -> key
};

module.exports = {createPost,getPost,getPosts};
