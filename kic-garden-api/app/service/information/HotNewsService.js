'use strict';

const Service = require('../../../custom_module/Basic/BasicService');
const Exception = require('../../../custom_module/Exception/Exception');

class HotNewsService extends Service {
    async getHotNews(params) {
        const { ctx } = this;
        const hotNews = await ctx.dao.information.HotNewsDao.select({
            hn: ['id', 'img_url', 'sort_index', 'created_at', 'updated_at'],
        })
            .where({
                and: [
                    {
                        ele: 'hn.is_delete',
                        condition: 0,
                    },
                ],
            })
            .order({ key: 'hn.sort_index', order: 'asc' })
            .exec();
        for (let i = 0; i < hotNews.length; i++) {
            const translations = await ctx.dao.translation.TranslationDao.select({
                t: ['relevant_id', 'relevant_key', 'relevant_type', 'content', 'language'],
            })
                .where({
                    and: [
                        {
                            ele: 't.relevant_id',
                            condition: hotNews[i].id,
                        },
                        {
                            ele: 't.relevant_type',
                            condition: 'hot_news',
                        },
                        {
                            ele: 't.language',
                            condition: params.language,
                        },
                    ],
                })
                .exec();
            hotNews[i].translations = translations.reduce((s, v) => {
                s[v.relevant_key] = v.content;
                return s;
            }, {});
        }
        return hotNews;
    }
}

module.exports = HotNewsService;
