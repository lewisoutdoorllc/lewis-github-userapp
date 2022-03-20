import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        "login": "lewisoutdoorllc",
        "id": 74194707,
        "node_id": "MDQ6VXNlcjc0MTk0NzA3",
        "avatar_url": "https://avatars.githubusercontent.com/u/74194707?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/lewisoutdoorllc",
        "html_url": "https://github.com/lewisoutdoorllc",
        "followers_url": "https://api.github.com/users/lewisoutdoorllc/followers",
        "following_url": "https://api.github.com/users/lewisoutdoorllc/following{/other_user}",
        "gists_url": "https://api.github.com/users/lewisoutdoorllc/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/lewisoutdoorllc/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/lewisoutdoorllc/subscriptions",
        "organizations_url": "https://api.github.com/users/lewisoutdoorllc/orgs",
        "repos_url": "https://api.github.com/users/lewisoutdoorllc/repos",
        "events_url": "https://api.github.com/users/lewisoutdoorllc/events{/privacy}",
        "received_events_url": "https://api.github.com/users/lewisoutdoorllc/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Cody",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": "Full Stack Developer: Knowledge includes: HTML, CSS, JavaScript, ReactJS, NextJS, Bootstrap, TailwindCSS, Node, SQL, NoSQL, Heroku, and more...",
        "twitter_username": null,
        "public_repos": 62,
        "public_gists": 1,
        "followers": 4,
        "following": 0,
        "created_at": "2020-11-09T14:22:29Z",
        "updated_at": "2022-03-15T23:30:13Z"
        }
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUserData } = userDataSlice.actions

export default userDataSlice.reducer
