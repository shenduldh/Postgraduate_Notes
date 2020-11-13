function genArray(n) {
    let array = []
    while (n > 0) {
        array.unshift(Math.floor(Math.random() * 1000))
        n--
    }
    console.log(`生成的数组：${array}\n`)
    return array
}

function quickSort(array, lo, hi) {
    if (hi - lo < 1) { return }
    let mi = getPivot(array, lo, hi)
    quickSort(array, lo, mi - 1)
    quickSort(array, mi + 1, hi)
    return array
}

function getPivot(array, lo, hi) {
    let temp = array[lo] // 将首元素作为轴点并取出
     // 让轴点归位
    while(lo<hi){
        while(lo<hi&&array[hi] >= temp){hi--}
        array[lo]=array[hi]
        while(lo<hi&&array[lo] < temp){lo++}
        array[hi]=array[lo]
    }
    array[lo]=temp
    // 返回此时轴点的秩
    return lo
}

console.log(quickSort(genArray(50),0,49))
debugger
