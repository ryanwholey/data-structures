var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var index = 0;
  someInstance.push = function(value){
    storage[index++]=value;
  };

  someInstance.pop = function(){
    return storage[--index];
  };

  someInstance.size = function(){
    return (index>=0)?index : 0;
  };

  return someInstance;
};

// var s = Stack();
// s.push('a');
// s.push('b');
// console.log(s.pop());
// console.log(s.size());
