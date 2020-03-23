
module.exports = app => {
    const config = {};
    config.keys =  'xxx';
    config.news = {
        pageSize:10,
        listUrl:"https://www.easy-mock.com/mock/5e788cb31c4fd747cbb0eecb/api/user/list"
    }
    //配置模板引擎
    config.view = {
        defaultExtension:'.html',
        defaultViewEngine:'nunjucks',
        mapping:{
            ".html":"nunjucks",
            ".ejs":"ejs"
        }
    }

    config.cache = {
        url:"https://www.easy-mock.com/mock/5e788cb31c4fd747cbb0eecb/api/title"
    }

    config.mysql = {
        client:{
            host:'localhost',
            port:'3306',
            user:'root',
            password:'123456',
            database:'cms'
        },
        app:true//mysql这个变量挂载到app
    }

    return config;
}