const { Service } = require('egg');

class NewService extends Service {
    async list(pageNum = 1, pageSize) {
        const { ctx } = this;
        /* let result = await ctx.curl(this.config.news.listUrl,
            {
                method: 'get',
                data: {
                    pageNum, pageSize
                },
                dataType: 'json'
            }); */

            //读取数据库

        const result = ctx.app.mysql.query('select * from news');

        return  result;
    }

}
module.exports = NewService;