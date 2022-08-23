const isFunction = variable => typeof variable === 'function'

class MyPromies {
    constructor(handle) {
        if (!isFunction(handle)) {
            throw new Error('MyPromise must accept a function as a parameter')
        }

        this._state = PENDING
        this._value = undefined

        try {
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (err) {
            this._reject(err)
        }
    }

    _resolve(val) {
        if (this._state != PENDING) return
        this._state = FULFILLED
        this._value = val
    }
    
    _reject(val) {
        if (this._state != PENDING) return
        this._state = REJECTED
        this._value = val
    }
}