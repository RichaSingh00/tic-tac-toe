class Cell{
    constructor(){
        this.mark='E'
    }
    isEmpty(){
        return this.mark==='E'
    }
    markCell(symbol){
        this.mark=symbol
    }
    getMark(){
        return this.mark
    }
}
module.exports=Cell
