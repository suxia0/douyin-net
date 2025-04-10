const express = require('express');
const serverless = require('serverless-http');

const app = express();
const port = 3000;

// 用于解析 JSON 格式的请求体
app.use(express.json());

const responseData = {
    "code": 200,
    "msg": "success",
    "comDY": "",
    "conYT": "https://su.tuanyougou.com/app/index.php?i=3&t=0&v=2.0.0&from=wxapp&c=entry&a=wxapp&do=query&m=tommie_duanshiping&sign=40844e75b870eb6ab8195a831063d5d0&url=",
    "dy": "https://uu.yyymvp.com/query?url=",
    "fgdy": "https://cn.apihz.cn/api/fun/douyin.php?id=88888888&key=88888888&url=",
    "download": "✅已保存",
    "download2": "张图片到照片",
    "video": "✅视频已保存到照片",
    "failed": "❌保存失败请重试",
    "news": "⚠️解析失败请重试(疯果科技)",
    "low7": "⚠️该视频清晰度低于720,不提供下载(疯果科技)",
    "data": {
        "version": "公众号:疯果科技(1元)8",
        "updata": "点击按钮更新⬇️(公众号:疯果科技)",
        "updat": "点击按钮更新⬇️⬇️⬇️(作者:疯果科技)",
        "newmsg": "公众号：疯果科技(1元)8",
        "vcode": "419",
        "title": "⚠️盗用死全家",
        "url": "https://www.icloud.com/shortcuts/72b2716453944c3abde59ff242332ae9"
    }
};

// 处理 GET 请求
app.get('/', (req, res) => {
    res.send('望谟县');
});

// 处理 POST 请求
app.post('/', (req, res) => {
    const { field1, field2 } = req.body;

    if (field1 === '你好' && field2 === '我好') {
        res.json(responseData);
    } else {
        res.send('望谟县');
    }
});

const handler = serverless(app);

module.exports.handler = async (event, context) => {
    return await handler(event, context);
};    
