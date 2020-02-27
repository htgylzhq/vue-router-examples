export default {
    login(email, pass, cb) {
        if (localStorage.token) {
            cb && cb(true)
            this.onChange(true)
            return
        }

        pretendRequest(email, pass, res => {
            if (res.authenticated) {
                localStorage.token = res.token
                cb && cb(true)
                this.onChange(true)
            } else {
                cb && cb(false)
                this.onChange(false)
            }
        })
    },
    getToken() {
        return localStorage.token
    },
    logout(cb) {
        delete localStorage.token
        cb && cb()
        this.onChange(false)
    },
    loggedIn() {
        return !!localStorage.token
    },
    onChange() {

    }
}

function pretendRequest(email, pass, cb) {
    setTimeout(() => {
        if (email && pass) {
            cb({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            })
        } else {
            cb({
                authenticated: false
            })
        }
    }, 0)
}