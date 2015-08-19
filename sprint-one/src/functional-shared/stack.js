var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = {
  	index:0,
  	storage:{}
  };
  _.extend(stack,stackMethods);
  return stack;
};

var stackMethods = {
	push: function(value){
		this.storage[this.index++]=value;
	},
	pop : function(){
		return this.storage[--this.index];
	},
	size : function(){
		return (this.index >= 0) ? this.index : 0;
	}
};
setTimeout(function(){
	var s = Stack();
	s.push('a');
	console.log(s.pop());
	s.push('b');
	console.log(s.pop());
	console.log(s.size());
},300)

