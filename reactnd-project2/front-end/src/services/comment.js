const api = "http://localhost:5001";

let token = localStorage.token;
if (!token) {
    token = localStorage.token = 'readable-token';
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

export const getCommentPost = id => (
    fetch(`${api}/posts/` + id + `/comments`, { headers })
        .then(res => res.json())        
);