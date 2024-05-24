import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

const BASE_URL = "http://gateway.marvel.com/v1/characters";
const API_KEY = "d15996648f97ffe80dc69ebbeac659c6";
const HASH = "d1283a9d72081a963f7ea9989cbf46558f136cf8";