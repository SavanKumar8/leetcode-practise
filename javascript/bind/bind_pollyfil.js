let user={
    name:"savan",
    age:29
}

function showUserDetails(place,city){
    console.log(user.name + ' ' + user.age+ ' '+place+ ' '+city)
}

//result = showUserDetails.bind(user)
//result()


//--------------------------------------------

Function.prototype.myBind = function(obj){
    const fun = this;
    return function (args) {
      return fun.call(obj, args);
    };
}

// myBindResult =  showUserDetails.myBind(user)
// myBindResult('rehlu')

//--------------------------------------------
Function.prototype.myBind = function (obj,...args1) {
  const fun = this;
  return function (...args2) {
    return fun.apply(obj, [...args1,...args2]);
  };
};

myBindResult = showUserDetails.myBind(user,'dharamshala');
myBindResult("rehlu");