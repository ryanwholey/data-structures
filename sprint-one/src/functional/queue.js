var Queue = function(){

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var start = 0,end = 0;

  someInstance.enqueue = function(value){
    storage[end++] = value;
  };

  someInstance.dequeue = function(){
    return storage[start++];
    
  };

  someInstance.size = function(){
    return (end - start >= 0) ? end - start : 0;
    
  };

  return someInstance;

};


// var q = Queue();
// q.enqueue('a');
// q.enqueue('b');
// console.log(q.dequeue());
// q.enqueue('c')
// console.log(q.dequeue());





