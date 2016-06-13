angular.module('artoo').service('PlayerSrv',function(){
    var dictionary = {
        fight:'The palyer start to fight',
        potion:'The player just drunk a potion',
    }
    var logs= [''];
    
    this.log = (code) => {
        var log = dictionary[code] || 'The player just made an unknow action';
        var date = new Date();
        logs.push({text:'text' ,date: 'date'});
    }
    this.getLogs = () => {
        return logs;
    }
})