const findTheOldest = function(arr) {
   const old = arr.reduce((oldest, person)=>{
        let age = 0;
        
        if(!person.yearOfDeath){
            age = new Date().getFullYear() - person.yearOfBirth;
            console.log(new Date().getFullYear)
        }else{
            age = person.yearOfDeath - person.yearOfBirth
        }
        person.age = age;
        if (age > oldest.age || oldest.age === 0){
            return person 
        }else{
            return oldest
        }
        
    },{age:0})
    console.log(old)
    return old
};

// Do not edit below this line
module.exports = findTheOldest;
