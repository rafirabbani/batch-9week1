function timeConversion(clock){
    let time = clock.slice(0,8)
    let [hrs, mins, secs] = time.split(':')
    if (hrs == "12"){
        hrs == "00"
    }
    if (clock.endsWith('PM')){
        hrs = parseInt(hrs, 10) + 12
    }
    return hrs + ":" + mins + ":" + secs
}

console.log(timeConversion('01:02:03PM'))