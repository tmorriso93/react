import axios from 'axios';

const KEY = 'YOUR_YOUTUBE_API_KEY_GOES HERE';

  export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

