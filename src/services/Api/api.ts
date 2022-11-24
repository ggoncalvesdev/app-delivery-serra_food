import axios from "axios";

export const api = axios.create({
    baseURL: "https://f761-2804-1b3-6440-7336-f924-b5df-b4e2-f348.sa.ngrok.io/",
    headers: {
        "Content-Type": "application/json",
    },
});
