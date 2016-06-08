angular.module('artoo').controller('PlayerCtrl',($scope) => {
  $scope.player = {
    name:'Legolas',
    hp: 100,
    mp: 200,
    lv: 30,
    exp: 18,
    race:'elf',
  };
  
  $scope.isDead = () => {
    return ($scope.player.hp) ? 'No':'Yes'
  };
  //take damage
  $scope.takeDamage = (damage) => {
      $scope.player.hp = ($scope.player.hp <= damage) ? 0 :$scope.palyer.hp - damage ;
  };
  //level up
  $scope.levelUp = () => {
    $scope.player.lv += 1; 
    $scope.player.exp = 0;
  };
  //gain exp 
  $scope.gainExp = (exp) => {
    var totalExp = $scope.player.exp + exp;
    $scope.player.exp += exp;
    
    
    
    if(totalExp >= 100){
      $scope.levelUp();
      totalExp  -= 0;
    }
    $scope.player.exp = totalExp;
  };
  
});
 