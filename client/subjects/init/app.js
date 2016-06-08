// define app module
var app =  angular
 .module("artooInit",[]);
 
 var app = angular
 .module('artooInit')
 .run(() =>{
   console.info('I run in the getter!');    
 });
// define a run function
app.run(function(){
    console.info('I run from the module in the var! ');
});
