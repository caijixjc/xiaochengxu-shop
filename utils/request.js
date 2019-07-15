
const request = (params) => {
    const baseURL = "https://api.zbztb.cn/api/public/v1/";
    wx.showLoading({
        title: "正在加载中",
        mask: false

    });
    return new Promise((resolve, reject) => {
        wx.request({
            //把所有的数据都解构出来
            ...params,
            // 现有路径加传递过来的路径
            url: baseURL + params.url,

            // 请求成功时
            success: res => {
                    // 请求成功时获得的数据
                const { message } = res.data;
                resolve(message)
            },
            fail: err => {
                reject(err)
            },
            complete: res => {
                wx.hideLoading();
            }
        })
    })

}

module.exports = {
    request
}