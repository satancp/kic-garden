'use strict';

const Controller = require('../../../custom_module/Basic/BasicController');

class HotNewsController extends Controller {
    async getHotNews() {
        const { ctx, app } = this;
        const paramRule = {
            language: { type: 'string' }
        };
        this.validate(paramRule, ctx.request.query);
        const param = ctx.request.query;
        if (app.validLanguage.filter(v => v === param.language).length === 0) {
            param.language = app.defaultLanguage;
        }
        const result = await ctx.service.information.hotNewsService.getHotNews(param);
        this.success(result);
    }
}

module.exports = HotNewsController;
