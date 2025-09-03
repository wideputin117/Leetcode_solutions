
var MinStack = function() {
    this.stack =[]
};

 
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    // console.log(this.stack)
};
 
MinStack.prototype.pop = function() {
    return this.stack.pop()
};

 
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};
 
MinStack.prototype.getMin = function() {
    let temp=[]
    let min=this.stack[this.stack.length-1]
  
    while(this.stack.length >0){
      min= Math.min(min,this.stack[this.stack.length-1])
      temp.push(this.stack.pop())
    }
    while(temp.length>0){
      this.stack.push(temp.pop())
    }
    return min
};

  var obj = new MinStack()
  obj.push(2)
  obj.push(3)
  obj.push(-13)
  obj.push(32)
  obj.push(31)
  obj.push(3.4)
  // console.log(obj.po/p())
  var param_3 = obj.top()
  // console.log(param_3)
  var param_4 = obj.getMin()
  // console.log(param_4,"the min val is")

