import axios from 'axios';

const api = "http://localhost:5001";

let token = localStorage.token;
if (!token) {
    token = localStorage.token = 'readable-token';
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

export const getAll = () => (
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
);