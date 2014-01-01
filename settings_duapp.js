module.exports = {
    cookieSecret : 'myblog', // cookieSecret 用于 Cookie 加密与数据库无关，我们留作后用。
    db : 'OadwPAEvxzryVDDHYZgL',
    host :  process.env.BAE_ENV_ADDR_MONGO_IP,      // 数据库地址
    db_port :  process.env.BAE_ENV_ADDR_MONGO_PORT,   // 数据库端口
    username : process.env.BAE_ENV_AK,                 // 用户名
    password : process.env.BAE_ENV_SK                 // 密码
}
