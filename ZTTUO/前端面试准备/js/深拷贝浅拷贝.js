const isComplexDataType = obj => typeof obj === 'object' && obj !== null

function deepClone(obj, hash = new WeakMap) {
    if (obj.constructor === 'Date') return new Date(obj)
    if (obj.constructor === 'RegExp') return new RegExp(obj)

    if (hash.has(obj)) return obj
    hash.set(obj)

    let cloneObj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptor(obj))

    Reflect.ownKeys(obj).forEach(key => {
        cloneObj[key] = isComplexDataType(obj[key]) ? deepClone(obj[key], hash) : obj[key]
    })

    return cloneObj
}
