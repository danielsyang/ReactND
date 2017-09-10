const api = "http://localhost:5001";

let token = localStorage.token;
if (!token) {
    token = localStorage.token = 'readable-token';
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

export const get = () => fetch(`${api}/posts`, { headers });

export const createPost = post => fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post })
});
