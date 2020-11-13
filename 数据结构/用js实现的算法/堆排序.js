// 建堆：自下而上的下滤
function heapify(array) {
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
        percolatedown(array, i)
    }
    return array
}
// 下滤
function percolatedown(array, i) {
    let temp, max = getMax(array, i)
    while (i != max) {
        temp = array[max]
        array[max] = array[i]
        array[i] = temp
        i = max
        max = getMax(array, i)
    }
    function getMax(array, i) {
        let lChild = array[(i << 1) + 1] ? array[(i << 1) + 1] : -1
        let rChild = array[(1 + i) << 1] ? array[(1 + i) << 1] : -1
        if (array[i] >= lChild && array[i] >= rChild) {
            return i
        } else {
            return lChild >= rChild ? (i << 1) + 1 : (1 + i) << 1
        }
    }
}

function genArray(n) {
    let array = []
    while (n > 0) {
        array.unshift(Math.floor(Math.random() * 1000))
        n--
    }
    console.log(`生成的数组：${array}\n`)
    return array
}

// 堆排序
function heapSort(array) {
    let temp, sortedArray = [], last = array.length-1
    heapify(array)
    while (last > 0) {
        sortedArray.unshift(array[0]) // 取出最大者
        // 删除已排序的元素
        temp = array[0]
        array[0] = array[last]
        array[last] = temp
        array.splice(last, 1)
        percolatedown(array, 0)
        last--
    }
    sortedArray.unshift(array[0])
    return sortedArray
}

console.log(heapSort(genArray(100)))
debugger
