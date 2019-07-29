import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ca1fbce216d293d73b8e8e8fd9e517a5e9a9f8a5a53486c159c4496ad457f113 '
    }
});