require('dotenv').config();
const express = require('express');

const github_data={
  "login": "Death-Raider-2829",
  "id": 175216595,
  "node_id": "U_kgDOCnGX0w",
  "avatar_url": "https://avatars.githubusercontent.com/u/175216595?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Death-Raider-2829",
  "html_url": "https://github.com/Death-Raider-2829",
  "followers_url": "https://api.github.com/users/Death-Raider-2829/followers",
  "following_url": "https://api.github.com/users/Death-Raider-2829/following{/other_user}",
  "gists_url": "https://api.github.com/users/Death-Raider-2829/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Death-Raider-2829/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Death-Raider-2829/subscriptions",
  "organizations_url": "https://api.github.com/users/Death-Raider-2829/orgs",
  "repos_url": "https://api.github.com/users/Death-Raider-2829/repos",
  "events_url": "https://api.github.com/users/Death-Raider-2829/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Death-Raider-2829/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Simar Singh Bonsra",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-07-10T11:59:36Z",
  "updated_at": "2026-09-04T11:44:42Z"
}

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('HELLO FROM RENDER');
});

app.get("/data",(req,res)=>{
    res.send(github_data);
});

app.get('/test', (req, res) => {
    res.status(200).json({
        message: 'This is definitely my server',
        port: port
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});