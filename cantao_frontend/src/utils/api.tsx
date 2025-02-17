import axios from 'axios';
import {Feedback} from '../interfaces/feedback';

const BASE_URL = "http://localhost:4000/feedbacks";

export const getFeedbacks = async (): Promise<Feedback[]> => {
    const response = await axios.get(BASE_URL + '/feedback');
    return response.data;
};

export const postFeedbacks = async (formData: FormData): Promise<Feedback[]> => {
    const response = await axios.post(BASE_URL + '/feedback', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    return response.data;
}
