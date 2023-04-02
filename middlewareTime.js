const middlewareTime = function (req, res, next) {

    const date = new Date();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();

    if (( hour < 17 && hour > 9) && ( dayOfWeek > 0 && dayOfWeek < 6)){
        console.log('working time is on now', hour, dayOfWeek)
        next();
    }else(
        console.log('off work now')
    )
}

module.exports = middlewareTime;