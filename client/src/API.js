const API_HOST = 'http://localhost:3000/cms/';

const getApiUrlFromRoute = (route) => {
    return API_HOST + route;
}

module.exports = { getApiUrlFromRoute };