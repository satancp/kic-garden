'use strict';

module.exports = app => {
    const { router, controller } = app;
    router.get('/api/get_hot_news', controller.information.hotNewsController.getHotNews);
};
