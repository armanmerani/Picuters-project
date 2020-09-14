import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID U-i6NU98xnDOqo5AWh7eshbRtpfmdhu1zLFXKK_lMeE'
    }
});