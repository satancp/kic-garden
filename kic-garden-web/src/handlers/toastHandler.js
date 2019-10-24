import { notification } from 'antd';

const showToast = (title, type, desc) => {
    notification[type]({
        message: title,
        description: desc,
    });
};

export default {
    showToast,
};
