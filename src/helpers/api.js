const json = `application/json`;
const multPart = `multipart/form-data`;

const token = localStorage.getItem("token");

const request = async (contentType, method, url, data, options = {}) => {
    try {    
        const response = await fetch(url, {
            method: method,
            credentials: 'include',
            headers: {
                'Content-Type': contentType,
                'Authorization': 'Bearer ' + token,
            },
            body: data,
            ...options
        });    
            let jsonResponse = await response.json();
            return jsonResponse;    
    } catch (error) {
        console.log(error)
    } 
};

const unAuthRequest = async (contentType, method, url, data) => {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': contentType,
        },
        body: data
    })
    if (response)
        return response.json();
    throw new Error("Api call failed");
};

// request Auth
export const getRequest = (url) => request(json, 'GET', url);
export const postRequest = (url, data) => request(json, 'POST', url, data);
export const putRequest = (url, data) => request(json, 'PUT', url, data);
export const deleteRequest = (url, data) => request(json, 'DELETE', url, data);

//request  multipart/formData
export const putRequestFormData = (url, data, options = {}) => request(multPart, 'PUT', url, data, options);
export const postRequestFormData = (url, data, options = {}) => request(multPart, 'POST', url, data, options);

//request unAuth
export const postUnauthRequest = (url, data) => unAuthRequest(json, 'POST', url, data);
export const getUnauthRequest = (url, data) => unAuthRequest(json, 'GET', url);
