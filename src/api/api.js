import axios from "axios";

const API_KEY = "apikey=pYFlAVIXjLOca5xS1RtMfxJrYaBCbZRN54Nh72J4";

const instance = axios.create({
    baseURL: `https://api.api-ninjas.com/v1`,
    headers: {
        "X-Api-Key": "UZjMxDqsauBwOSl3w60VLoLOAgT6InSukfAmQPYu"
    }
});

export const API = {
    getCars: (data) => {
        return instance(`/cars?${data}&limit=50`)
            .then(response => response.data);
    },
    getMotos: (data) => {
        return instance(`/motorcycles?${data}`)
            .then(response => response.data);
    },
    getHelicopters: (data) => {
        return instance(`/helicopter?${data}`)
            .then(response => response.data);
    }
}

