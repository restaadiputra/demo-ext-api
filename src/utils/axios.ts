import axios from "axios"

const BASE_URL = "https://api.devteam.kadray.app/xapi/v1";
const ORG_ID = "ea7e0ffa-f4c2-476a-b26d-bd11fc4d3e0c";
const SVC_KEY = "if6j4tCD0LL+jGTKHyw9DAccE6mATdxdBgUBO7EpWKo=";
const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYW4iOiJSZXN0YSB0ZXN0In0.6T3Q1oSK528RQcS2bYO1IiDcTYWoU9NdC3oxJ80ewd0";

const headers = {
    'Content-Type': 'application/json',
    'OrgId': ORG_ID,
    'Authorization': JWT,
};

export default axios.create({
    baseURL: BASE_URL,
    headers,
})
