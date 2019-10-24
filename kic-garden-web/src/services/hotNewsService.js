import axios from 'axios';
import base from './base';
import handlers from '../handlers';
import LAN from '../strings';
import cookie from 'react-cookies';

let lan = 'en';
if (cookie.load('language')) {
    lan = cookie.load('language');
}

const toastHandler = handlers.toastHandler;

const getHotNews = async language => {
    try {
        const result = await axios({
            method: 'GET',
            url: `${base.baseUrl}get_hot_news`,
            params: {
                language,
            },
        });
        if (result.data.code === 0) {
            return result.data.data;
        } else {
            toastHandler.showToast(LAN[lan].TOAST.ERROR.TITLE, 'error', result.data.msg);
        }
    } catch (e) {
        console.log(e);
    }
};

export default {
    getHotNews,
};
