function genArray(n) {
    let array = []
    while (n > 0) {
        array.unshift(Math.floor(Math.random() * 1000))
        n--
    }
    console.log(`生成的数组：${array}\n`)
    return array
}

function shellSort(array) {
    let len = array.length
    let width = Math.floor(len / 2)
    let temp, n = 1

    while (width > 0) {
        for (var i = width; i < len; i++) {
            /**
             * 按顺序取出每一个元素，并在其所在组内进行插入排序，相当于各组之间交替进行插入排序
             * 如果要一个组一个组地进行排序，则还需增加一个for循环，比较麻烦
             * 每组的第一个元素不必排序，因此直接略过这些，只需令i=width
             */
            temp = array[i] // 取出当前要排序的元素（可以想象该位置已空），下面进入其所在组内进行插入排序
            for (var k = i - width; k >= 0; k -= width) { // 从该组已排序区的末元素（i-width）向前进行比较
                if (array[k] > temp) { // 比当前要排序的元素temp大的元素均后移一个位置，以空出位置进行插入
                    array[k + width] = array[k] // 仅仅就是后移操作
                } else {
                    break // 说明当前比较元素比要排序元素temp要小，其后的空位就是temp要插入的位置
                }
            } // 循环结束后，array[k + width]就是比当前要排序元素temp要小的最大者后的一个空位
            array[k + width] = temp // 将temp插入腾出的空位上
        }

        console.log(`当前宽度：${width}\n第${n}趟排序结果：${array}\n`)
        width = Math.floor(width / 2)
        n++
    }
    return array
}

shellSort(genArray(25))
debugger
