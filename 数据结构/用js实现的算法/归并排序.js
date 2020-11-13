function genArray(n) {
    let array = []
    while (n > 0) {
        array.unshift(Math.floor(Math.random() * 1000))
        n--
    }
    console.log(`生成的数组：${array}\n`)
    return array
}

function mergeSort(array, lo, hi) {
    if (hi - lo < 1) {
        return
    }
    let mi = Math.floor((lo + hi) / 2)
    mergeSort(array, lo, mi)
    mergeSort(array, mi + 1, hi)
    merge(array, lo, mi, hi)
    return array
}
function merge(array, lo, mi, hi) {
    let A = array.slice(lo, mi + 1)
    let B = array.slice(mi + 1, hi + 1)
    let i = 0, j = 0, k = lo

    while (i < A.length && j < B.length) {
        if (A[i] <= B[j]) {
            array[k++] = A[i++];
        } else {
            array[k++] = B[j++];
        }
    }
    while (i < A.length) {
        array[k++] = A[i++]
    }
    while (j < B.length) {
        array[k++] = B[j++]
    }

    console.log('(' + A + ') +', '(' + B + ')', '==> (' + array.slice(lo, hi + 1)+')')
}

console.log(mergeSort(genArray(10), 0, 9))
debugger
