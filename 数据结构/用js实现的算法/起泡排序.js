function genArray(n) {
    let array = []
    while (n > 0) {
        array.unshift(Math.floor(Math.random() * 1000))
        n--
    }
    console.log(`生成的数组：${array}\n`)
    return array
}

function bubbleSort(array) {
    let temp
    let n = array.length
    let sorted = true // 如果上一次循环无任何交换，则提前终止循环
    while (n > 0) {
        for (i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                sorted = false
            }
        }
        if (sorted) { break } else { sorted = true }
        n--
    }
    return array
}

console.log(bubbleSort(genArray(100)))
