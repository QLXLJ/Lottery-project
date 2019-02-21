//定时器模块
//需要服务端返回来一个时间戳
class Timer {
    countdown(end, update, handle) {
        const now = new Date().getTime() //获取当前时间
        const self = this //当前指针
        if (now - end > 0) { //如果当前时间大于结束时间，回调这个函数
            handle.call(this)
        } else { //否则计算剩余时间
            let last_time = end - now
            let px_d = 1000 * 60 * 60 * 24 //一天的毫秒
            let px_h = 1000 * 60 * 60
            let px_m = 1000 * 60
            let px_s = 1000
            let d = Math.floor(last_time / px_d)
            let h = Math.floor((last_time - d * px_d) / px_h)
            let m = Math.floor((last_time - d * px_d - h * px_h) / px_m)
            let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s)
            let r = [];
            if (d > 0) {
                r.push(`<em>${d}</em>天`)
            }
            if (r.length || (h > 0)) {
                r.push(`<em>${h}</em>时`)
            }
            if (r.length || (m > 0)) {
                r.push(`<em>${m}</em>分`)
            }
            if (r.length || (s > 0)) {
                r.push(`<em>${s}</em>秒`)
            }
            self.last_time = r.join('')
            update.call(self, r.join(''))
            setTimeout(function() {
                self.countdown(end, update, handle)
            }, 1000)
        }
    }
}
export default Timer