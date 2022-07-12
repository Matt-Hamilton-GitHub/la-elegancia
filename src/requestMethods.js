import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWI5M2U2ZDE3OTZjMzFiNDE5NmRjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzY1MzY2OCwiZXhwIjoxNjU3Njc1MjY4fQ.Fb5dWHLW3U4vNXGwSkq-L71nSmqeKN93jRsCIGHeiw4';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
})