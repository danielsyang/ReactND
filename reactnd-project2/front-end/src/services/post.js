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
    body: JSON.stringify(post)
});

export const editPost = post => {console.log(post); return fetch(`${api}/posts/` + post.id, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(post)
})};

export const getPost = (id) => fetch(`${api}/posts/` + id, {
    method: 'GET',
    id: id,
    headers: headers,
});

export const getPostCategory = cat => fetch(`${api}/` + cat + `/posts`, {
    method: 'GET',
    headers: headers,
});

export const upVotePost = id => fetch(`${api}/posts/` + id, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        option: 'upVote',
    }),
});

export const downVotePost = id => fetch(`${api}/posts/` + id, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        option: 'downVote',
    }),
});

export const deletePost = id => (
    fetch(`${api}/posts/` + id, {
        method: 'DELETE',
        headers: headers,
    })
)
