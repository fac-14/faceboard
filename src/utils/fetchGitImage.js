import "whatwg-fetch";
// import token from "../../env";

const fetchGitImage = username => {
    const query = {
        query: `query { user(login:"${username}") { avatarUrl(size:310) name }}`
    };

    const headers = {
        authorization: "bearer " + process.env.TOKEN,
        "content-type": "application/json"
    };

    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(query),
        mode: "cors",
        cache: "default"
    };

    const url = "https://api.github.com/graphql";

    return fetch(url, options)
        .then(res => res.json())
        .catch(err => `OH NO: ${err}`);
};

export default fetchGitImage;
