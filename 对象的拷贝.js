let copy = function (obj,cho){ // obj代表传入的对象，cho代表选择的拷贝形式 默认为false表浅拷贝
    let newObj = obj instanceof Array ? [] : {};
    for (const key in obj) {
        let temp = obj[key];
        if(cho && typeof temp === "object"){
            newObj[key] = copy(temp,cho)
        }else{
            newObj[key] = temp
        }
    }
    return newObj;
};