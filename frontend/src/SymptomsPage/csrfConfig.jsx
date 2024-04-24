import axios from 'axios';

function getCSRFToken() {
    const name = 'csrftoken';
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(name))
        ?.split('=')[1];
    return cookieValue || null;
}

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
    const csrftoken = getCSRFToken();
    if (csrftoken) {
        config.headers['X-CSRFToken'] = csrftoken;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;
