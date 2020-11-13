function genArray(n) {
    let array = []
    while (n > 0) {
        array.unshift(String.fromCharCode(65 + Math.floor(Math.random() * 26)))
        n--
    }
    console.log(`生成的数组：${array}\n`)
    return array
}

function countSort(array) {
    let table = setTable() // 生成字母表
    // 计数
    for (i of array) {
        table[i].count++
    }
    // 求积分
    let temp = 0
    for (k in table) {
        table[k].accum = temp + table[k].count
        temp = table[k].accum
    }
    // 排序：accum指出末位置，count指出有多少个
    for (k in table) {
        if(table[k].count){
            for(i=table[k].count;i>0;i--){
                array.splice(table[k].accum-i,table[k].accum-i+1,k)
            }
        }
    }

    return array
}

function setTable() {
    let table = {}
    for (i = 0; i < 26; i++) {
        table[String.fromCharCode(65 + i)] = {
            'count': 0,
            'accum': 0
        }
    }
    return table
}

console.log(countSort(genArray(26)))
debugger
