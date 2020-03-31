import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
    headers: {
      Authorization: 'Client-ID LrCXacIA1MNIqBvPjr1gPTp4LGdF4E3W6fHeSSnwVzA'
    }
});
