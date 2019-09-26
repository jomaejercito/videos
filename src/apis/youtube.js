import axios from 'axios';

const KEY = 'AIzaSyCqDjuliEu5M6cuC8wWCP-aPSHFchTqIk8';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3/',
   params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
   }
});