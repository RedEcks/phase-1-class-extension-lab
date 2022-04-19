// Your code here
class Polygon{
    constructor(sides){
        this.sides=sides
    }
    
    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let totalPerimeter =0
        for(let i=0;i<this.sides.length;i++){
            totalPerimeter+=this.sides[i]
        }
        return totalPerimeter
    }
}

class Triangle extends Polygon{
    get isValid(){
         if((this.sides[0]+this.sides[1]>this.sides[2]) &&( this.sides[1]+this.sides[2]>this.sides[0]) &&( this.sides[2]+this.sides[0]>this.sides[1])){
             return true
        }else{
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.sides.length==4){
            if((this.sides[0]==this.sides[0])&&(this.sides[0]==this.sides[1])&&(this.sides[0]==this.sides[2])&&(this.sides[0]==this.sides[3])){
                return true
            }else{
                return false
            }
        }
    }

    get area(){
        return this.sides[0]*this.sides[1]
    }
}