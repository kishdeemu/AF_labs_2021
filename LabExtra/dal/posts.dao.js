const posts = require('./').db('posts').collection('posts');

const save = async ({id, name, description, date}) => {
    const result = await posts.insertOne({id, name, description, date});
    return result.ops[0];
}

const getAll = async () => {
    const cursor = await posts.find();
    return cursor.toArray();
}

const getById = async (id) => {
    return await posts.findOne({id});
}

const deleteById = async (id) => {
    return await posts.deleteOne({id});
}

const updateById = async (id, {name, description, date}) => {
    const result = await posts.replaceOne({id}, {id, name, description, date});
    return result.ops[0];
}

module.exports = {save, getAll, getById, deleteById, updateById};