function genArray(n) {
    let array = []
    while (n > 0) {
        array.unshift(Math.floor(Math.random() * 1000))
        n--
    }
    console.log(`生成的数组：${array}\n`)
    return array
}

// 按数值位对数组进行排序
function radixSort(array) {
    let maxDigit = getMaxDigit(array)
    let bucket = new Array(10)
    for (let i = 0, base = 10; i < maxDigit; i++, base *= 10) {
        // 收集
        for (var k = 0; k < array.length; k++) {
            let n = Math.floor((array[k] % base) / (base / 10))
            if (!bucket[n]) { bucket[n] = [] }
            bucket[n].push(array[k])
        }

        // 分配
        for (var j = 0, pos = 0; j < bucket.length; j++) {
            if (bucket[j]) {
                while (value = bucket[j].shift()) {
                    array[pos++] = value
                }
            }
        }
    }
    return array
}

function getMaxDigit(array) {
    for (var max = array[0], i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    console.log('最大值：' + max)
    let maxDigit = 1
    while (max / 10 > 1) {
        maxDigit++
        max /= 10
    }
    console.log('最大值位数：' + maxDigit)
    return maxDigit
}

console.log(radixSort(genArray(100)))
debugger
