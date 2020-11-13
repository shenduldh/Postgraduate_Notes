function genArray(n) {
    let array = []
    while (n > 0) {
        array.unshift(Math.floor(Math.random() * 1000))
        n--
    }
    console.log(`生成的数组：${array}\n`)
    return array
}

function selectSort(array) {
    let temp, n = array.length
    while (n > 0) {
        for (var max = 0, i = 1; i < n; i++) {
            max = array[i] > array[max] ? i : max
        }
        temp = array[max]
        array[max] = array[n - 1]
        array[n - 1] = temp
        n--
    }
    return array
}

console.log(selectSort(genArray(20)))
debugger
