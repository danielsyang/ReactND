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

export const createComment = comment => (
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
    })
)

export const deleteComment = id => (
    fetch(`${api}/comments/` + id, {
        method: 'DELETE',
        headers: headers
    })
)

export const editComment = comment => (
    fetch(`${api}/comments/` + comment.id, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
    })
)

export const upVoteComment = id => (
    fetch(`${api}/comments/` + id, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            option: 'upVote',
        }),
    })
)

export const downVoteComment = id => (
    fetch(`${api}/comments/` + id, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            option: 'downVote',
        }),
    })
)