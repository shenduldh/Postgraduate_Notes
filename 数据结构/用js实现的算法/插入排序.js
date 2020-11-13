function genArray(n) {
    let array = []
    while (n > 0) {
        array.unshift(Math.floor(Math.random() * 1000))
        n--
    }
    console.log(`生成的数组：${array}\n`)
    return array
}

function insertSort(array) {
    let temp, len = array.length
    for (let i = 1; i < len; i++) {
        temp = array[i] // 取出array[i]作为当前要排序的元素，array[i]可看出空的
        for (var k = i - 1; k >= 0; k--) {
            if (array[k] > temp) {
                array[k + 1] = array[k] // 将比temp大的元素移至空位
            } else { break }
        }
        array[k + 1] = temp // 将temp插入在比其小的最大者后的空位上
    }
    return array
}

console.log(insertSort(genArray(20)))
debugger
