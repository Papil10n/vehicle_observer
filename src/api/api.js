import axios from "axios";
import cars from "../components/Cars/Cars";

const API_KEY = "apikey=pYFlAVIXjLOca5xS1RtMfxJrYaBCbZRN54Nh72J4";

const instance = axios.create({
    baseURL: `https://api.api-ninjas.com/v1`,
    headers: {
        "X-Api-Key": "UZjMxDqsauBwOSl3w60VLoLOAgT6InSukfAmQPYu"
    }
});

export const carsAPI = {
    getCars: (line) => {
        return instance(`/cars?${line}&limit=8`)
            .then(response => response.data);
    },

}

