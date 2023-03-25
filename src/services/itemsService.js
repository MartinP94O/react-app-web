import * as request from "./requester"

const baseUrl = 'http://localhost:3030/jsonstore/items'

export const getAll = async () => {
    const result  = await request.get(baseUrl)
    const items = Object.values(result)

    return items
}

export const getOne = async (itemId) => {
    const result = await request.get(`${baseUrl}/${itemId}`);
    console.log(result)
    return result
}

export const create = async (ietmData) => {
    const result = await request.post(baseUrl, ietmData);

    console.log(result)
    return result
}

export const addComment = async (itemId, data) => {
    const result = await request.post(`${baseUrl}/${itemId}/comments`, data)

    return result
}