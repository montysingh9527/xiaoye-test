/**
 * watch 监听对象中某几个值变化，执行某个方法
 * @param {*} opt 参数
 *      key：要监听的对象值
 *      val：要监听的对象
 *      cb：回调函数
 */
 function watchObj(opt){
    let { key , val, cb } = opt;
    let obj = {};
    for(let i = 0,len = key.length; i < len; i++ ){
        obj[`${val}.${key[i]}`] = cb;
    }
    return obj;
}

export {
    watchObj,
}