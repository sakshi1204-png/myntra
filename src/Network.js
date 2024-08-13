import axios from 'axios';

// Define the base URL from environment variables
const BASE_URL = process.env.REACT_APP_BASE || '';

// Uncomment this function if you need to handle authentication tokens
// const getToken = async () => {
//   const userInfo = await getFromLocalStorage('token');
//   return userInfo || '';
// };

const post = async (url, params, headers = {}) => {
  try {
    // Uncomment if you use authentication
    // const token = await getToken();
    const _headers = {
      ...headers,
      Authorization: '' // Add token if needed
    };

    const response = await axios.post(BASE_URL + url, params, { headers: _headers });
    return response.data;
  } catch (error) {
    // Handle error properly
    console.error('POST request failed:', error);
    throw error;
  }
};

const get = async (url, params = {}, headers = {}, cancelToken) => {
  try {
    // Uncomment if you use authentication
    // const token = await getToken();
    const config = {
      params,
      headers: { ...headers, Authorization: '' }, // Add token if needed
      cancelToken: cancelToken,
    };

    const response = await axios.get(BASE_URL + url, config);
    return response.data;
  } catch (error) {
    // Handle error properly
    console.error('GET request failed:', error);
    throw error;
  }
};

const deleteApi = async (url, params = {}, headers = {}) => {
  try {
    // Uncomment if you use authentication
    // const token = await getToken();
    const response = await axios.delete(BASE_URL + url, {
      params,
      headers: { ...headers, Authorization: '' }, // Add token if needed
    });
    return response.data;
  } catch (error) {
    // Handle error properly
    console.error('DELETE request failed:', error);
    throw error;
  }
};

const put = async (url, params = {}, headers = {}, query = {}) => {
  try {
    // Uncomment if you use authentication
    // const token = await getToken();
    const _headers = {
      ...headers,
      Authorization: '' // Add token if needed
    };

    const response = await axios.put(BASE_URL + url, params, {
      headers: _headers,
      params: query,
    });
    return response.data;
  } catch (error) {
    // Handle error properly
    console.error('PUT request failed:', error);
    throw error;
  }
};

export const API = {
  post,
  get,
  put,
  deleteApi,
};
