import axios from "axios";

const API_KEY = "apikey=pYFlAVIXjLOca5xS1RtMfxJrYaBCbZRN54Nh72J4";

const instance = axios.create({
    baseURL: `https://api.api-ninjas.com/v1`,
    headers: {
        "X-Api-Key": "UZjMxDqsauBwOSl3w60VLoLOAgT6InSukfAmQPYu"
    }
});

export const carsAPI = {
    getCars: (data) => {
        return instance(`/cars?${data}&limit=8`)
            .then(response => response.data);
    },
}

