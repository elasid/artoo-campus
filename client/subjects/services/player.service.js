        angular.module('artoo').service('player',function(){
        var player ={
            name:'kyrat',
            hp: 100,
            exp: 20,
            level:2,
            race:'orch'
        }   
        
        this.die = () => {
            player.hp = 0;
            console
        };
        
        this.drinkPotion = () => {
            if(this.isDead()) return;
            var newHp = player.hp + 50;
            palyer.hp = (newHp > 100) ? 100:newHp
        };
        
        this.gainExp = () => {};
        
        this.get = () => {
            return player.hp;
        };
        
        this.takeHit = () => {
            var hp = player.hp-damage;
            player.hp = (hp) ? hp:0;
        };
        
        this.levelUp = () => {
            player.level += 1;
        };
        
        this.isDead = () => {
            return !(!!player.hp);
        };
        
        this.respawn = () => {
           if(this.isDead()) return;
            player.hp = 10;
        };
        
        });