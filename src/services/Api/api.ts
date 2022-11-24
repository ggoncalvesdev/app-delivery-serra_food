import axios from "axios";

export const api = axios.create({
    baseURL: "https://3eb4-2804-1b3-6440-7336-e936-cb02-9b75-41d2.sa.ngrok.io/",
    headers: {
        "Content-Type": "application/json",
    },
});
