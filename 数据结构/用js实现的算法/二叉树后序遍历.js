class Stack{
    constructor(){
        this.array=[];
    }
    push(obj){
        return this.array.push(obj)
    }
    pop(){
        return this.array.pop()
    }
    top(){
        return this.array[this.array.length-1]
    }
    empty(){
        return this.array.length?false:true
    }
}

class BinNode{
    constructor(data,lChild,rChild,parent){
        this.data=data
        this.lChild=lChild
        this.rChild=rChild
        this.parent=parent
    }
    insertLC(data){
        this.lChild=new BinNode(data,null,null,this)
        return this.lChild
    }
    insertRC(data){
        this.rChild=new BinNode(data,null,null,this)
        return this.rChild
    }
}
class BinTree{
    constructor(rootData){
        this.rootBinNode=new BinNode(rootData,null,null,null)
    }
    root(){
        return this.rootBinNode
    }
    traverse(){
        let stack=new Stack()
        let x=this.rootBinNode
        this.goAlongLeftBranch(x,stack)
        while(!stack.empty()){
            x=stack.top()
            if(x.rChild){
                this.goAlongLeftBranch(x.rChild,stack)
                x.rChild=null
            }else{
                console.log(stack.pop())
            }
        }
    }
    goAlongLeftBranch(bNode,stack){
        stack.push(bNode)
        let x=bNode.lChild
        while (x){
            stack.push(x)
            x=x.lChild
        }
    }
}

function initBinTree(){
    let btree=new BinTree('K')
    btree.root().insertRC('J')
    let temp=btree.root().insertLC('I').insertRC('H')
    temp.insertLC('B').insertRC('A')
    let temp1=temp.insertRC('G')
    temp1.insertRC('F')
    let temp2=temp1.insertLC('E')
    temp2.insertLC('C')
    temp2.insertRC('D')
    return btree
}
let exampleBTree=initBinTree()
exampleBTree.traverse()
debugger
