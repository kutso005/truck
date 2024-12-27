import axios from "axios";

const api = axios.create({
    baseURL: "http://109.123.253.64:8085/api/v1/"
});

const requester = async (url) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const get = {
    getBunner: () => requester('banners/'),
    getAbout: () => requester('about-us/'),
    getWork: () => requester('our-works/'),
    getReview: () => requester('reviews/'),
    getSecvice: () => requester('services/'),
    getNumber: () => requester('active-number/'),
    getFooter: () => requester('footer/'),
    getLogo: () => requester('site-logo/'),
};
