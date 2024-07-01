import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.metadata = { startTime: new Date() }
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(response => {
  const endTime = new Date();
  const duration = endTime - response.config.metadata.startTime;
  response.durationInMs = duration;

  console.log(
    `${response.config.method.toUpperCase()} request under URL ${response.config.url} took: ${response.durationInMs} ms`
  );

  return response
}, (error) => {
    if (error.config && error.config.metadata) {
    const endTime = new Date();
    const duration = endTime - error.config.metadata.startTime;
    error.durationInMs = duration;

    console.log(
        `${response.config.method.toUpperCase()} request under URL ${response.config.url} failed after: ${response.durationInMs} ms`
      );
    }
    return Promise.reject(error);
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
