import axios from 'axios';

export default async function getRequest(endpoint) {
    try {
        const res = await axios.get(endpoint);
        const result = res.data;
        return {result};
    } catch (error) {
        return {error};
    }

}
