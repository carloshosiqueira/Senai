import axios from 'axios';
import md5 from 'md5';

const publickey = "d15996648f97ffe80dc69ebbeac659c6"
const privatekey = "d1283a9d72081a963f7ea9989cbf46558f136cf8"
const ts = new Date().getTime();
const hash = md5(ts + privatekey + publickey);

const api = axios.create ({
    baseURL: "https://gateway.marvel.com/v1/public",
    params:{
        ts,
        apikey: publickey,
        hash,
    },

});

export const getCharacters = async (offset = 0, limit = 100) => {
    try{
        const responde = await api.get('/characters', {
            params:{
                offset,
                limit,
            },
        });
        return Response.data.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
};