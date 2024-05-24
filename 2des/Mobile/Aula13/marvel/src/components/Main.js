import React, {useState, useEffect} from 'react';
import {Card} from './card';
import axios from 'axios';
//import {serialize} from "v8";

const BASE_URL = "http://gateway.marvel.com/v1/characters";
const API_KEY = "d15996648f97ffe80dc69ebbeac659c6";
const HASH = "d1283a9d72081a963f7ea9989cbf46558f136cf8";

export const Main = () => {

    const [item, setItem] = useState([]);
    const [search, setSearch] = useState("");

    const fetchCharacters = async (url) => {
        try{
            const res = await axios.get(url);
            setItem(res.data.data.results);
        } catch(error) {
            console.log("erro ao buscar dados ", error);
        }
        };
  
        useEffect (() => {
            const ts = Date.now();
            const initialUrl = `${BASE_URL}?ts=${ts}&apikey=${API_KEY}&hash=${HASH}`;
            fetchCharacters(initialUrl);
        }, []);

const searchMarvel = (e) => {
    if(e.key === "Enter"){
        const ts = Date.now();
        const searchUrl = `${BASE_URL}?nameStartsWith=${search}&ts=${ts}&apikey=${API_KEY}&hash=${HASH}`;
        fetchCharacters(searchUrl);
    }
};

return (
    <>
    <div className="header">
        <div className='bg'>
            <img src='../images/bg.gif' alt="" />
        </div>
        <br></br>
        <div className='search-bar'>
            <img className='logo' src='../images/logo.png' alt='logo'/>
            <p> </p>
            <input
            type='search'
            placeholder='Procurar Herói'
            className='search'
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchMarvel}
            />
        </div>
    </div>
    <div className='content'>
        {!item.lenght ? <p>Não Encontrado</p> : <Card data={item} />}
    </div>
    </>
);
}