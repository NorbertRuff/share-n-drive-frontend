import axios from 'axios';

export let dataHandler = {

    _data: {},

    _api_get: function (url, callback, errorCallback) {
        axios
            .get(url, {
                method: 'GET',
                credentials: 'same-origin'
            })
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => {
                errorCallback(error.message);
                console.error(
                    `The request was made and the server responded
        with a status code that falls out of the range of 2xx ` + error.message
                );
            });
    },

    _api_get_selectOptions: function (url, callback, callbackOfTheCallback, errorCallback) {
        axios
            .get(url, {
                method: 'GET',
                credentials: 'same-origin'
            })
            .then((response) => {
                callback(response.data, callbackOfTheCallback);
            })
            .catch((error) => {
                errorCallback(error.message);
                console.error(
                    `The request was made and the server responded
        with a status code that falls out of the range of 2xx ` + error.message
                );
            });
    },

    _api_get_results: function (url, callback, errorCallback) {
        axios
            .get(url)
            .then((response) => {
                callback(response.data.results);
            })
            .catch((error) => {
                errorCallback(error.message);
                console.error(
                    `The request was made and the server responded
        with a status code that falls out of the range of 2xx ` + error.message
                );
            });

    },
    _api_post: function (url, data, callback, errorCallback) {
        axios
            .post(url, data)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    callback(response.data);
                }
            })
            .catch((error) => {
                errorCallback(error.message);
                console.error(
                    `The request was made and the server responded with a status code that falls out of the range of 2xx `
                    + error.message
                );
            })
    },

    _api_delete: function (url, data, callback) {
        axios
        .delete(url, data)
        .then(response => {
            callback(response.data);
        })
        .catch(error => 
            `The request was made and the server responded with a status code that falls out of the range of 2xx `
            + error.message
            );
    },
}
