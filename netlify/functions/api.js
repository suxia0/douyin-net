// 定义响应数据
const responseData = {
    "wm": "‼️王墨寻‼️妈妈被轮奸女儿被轮奸，全家死光光🤬",
    "md": "‼️接口每调用一次王墨寻的妈妈被轮奸女儿被轮奸一次🤬",
    "code": 200,
    "msg": "success",
    "comDY": "",
    "dypic": "https://uu.yyymvp.com/query?url=",
    "dyvid": "https://api.pearktrue.cn/api/video/douyin/?url=",
    "download": "✅已保存",
    "download2": "张图片到照片",
    "video": "✅视频已保存到照片",
    "failed": "❌保存失败请重试",
    "news": "⚠️解析失败请重试(疯果科技)",
    "low7": "⚠️该视频清晰度低于720,不提供下载(疯果科技)",
    "data": {
        "version": "公众号:疯果科技(1元)",
        "updata": "点击按钮更新⬇️(公众号:疯果科技)",
        "updat": "点击按钮更新⬇️⬇️⬇️(作者:疯果科技)",
        "newmsg": "公众号：疯果科技(1元)",
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
            body: '‼️王墨寻‼️妈妈被轮奸女儿被轮奸，全家死光光🤬'
        };
    } 
    // 处理 POST 请求
    else if (event.httpMethod === 'POST') {
        try {
            const { field1, field2 } = JSON.parse(event.body);
            if (field1 === '王墨寻妈妈被轮奸+1' && field2 === '倒卖者妈妈被轮奸+1') {
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
                    body: '‼️王墨寻‼️妈妈被轮奸女儿被轮奸，全家死光光🤬'
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
