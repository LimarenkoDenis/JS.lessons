var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


function printList(list) {
   var tmp = list;
   
   while(tmp){
   	console.log(tmp.value);
   	tmp = tmp.next
   }
};

printList(list);