/* eslint-disable linebreak-style */
const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'http://localhost:3000';

export default {
  URL_BACKEND_TOP,
};
