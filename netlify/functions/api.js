// 定义响应数据
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

// 导出处理函数
exports.handler = async (event, context) => {
    // 处理 GET 请求
    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: '望谟县'
        };
    } 
    // 处理 POST 请求
    else if (event.httpMethod === 'POST') {
        try {
            const { field1, field2 } = JSON.parse(event.body);
            if (field1 === '你好' && field2 === '我好') {
                return {
                    statusCode: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(responseData)
                };
            } else {
                return {
                    statusCode: 200,
                    body: '望谟县'
                };
            }
        } catch (error) {
            return {
                statusCode: 400,
                body: 'Invalid JSON in request body'
            };
        }
    }
    // 处理不支持的请求方法
    return {
        statusCode: 405,
        body: 'Method Not Allowed'
    };
};
