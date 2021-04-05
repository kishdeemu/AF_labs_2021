const UUID = require('uuid');


const {save, getAll, getById, deleteById, updateById} = require('../dal/posts.dao')

const createPost = async ({name, description}) => {
    const post = {
        name,
        description,
        id: UUID.v4(),
        date: new Date()
    };
    return await save(post);
};

const getPosts = async () => {
    return await getAll();
};

const getPost = async (id) => {
    return getById(id);
};

const deletePost = async (id) => {
    return await deleteById(id);
};

const updatePost = async (id, {name, description,date}) => {
    return await updateById(id, {id,name, description,date});
};

module.exports = {createPost, getPost, getPosts, deletePost, updatePost};
