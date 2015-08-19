

var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var queue = {
  	start:0,
  	end:0,
  	storage: {}
  };

  _.extend(queue,queueMethods);

  return queue;
};

var queueMethods = {

	enqueue: function(value){
		this.storage[this.end++]=value;
	},
	dequeue: function(){
		return this.storage[this.start++];

	},
	size: function(){
		return ((this.end-this.start)>=0) ? this.end-this.start : 0;
	}
};

// setTimeout(function(){
// 	var q = Queue();
// 	console.log(q);
//  	q.enqueue('a');
//  	q.enqueue('b');
//  	console.log(q.size());
// },200);




