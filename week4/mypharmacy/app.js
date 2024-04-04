// Insert your code here
const data = require('./data')

function getDrugDescriptionByName(name) {
    for(let i=0; i<data.length; i++) {
        if (data[i].name === name){
            return data[i].description

        }

    }

}

function getDrugTypeByName(name) {
    for(let i=0; i<data.length; i++) {
        if(data[i].name === name){
            return data[i].type

        }
    }
}

function getDrugNamesByGroup(group){
   let arr = []
    for(let i=0; i<data.length; i++) {
        if(data[i].groups.includes(group)){
            arr.push(data[i].name)
            arr.sort()


        }

    }
    return arr;

}
getDrugNamesByGroup("Illicit");

module.exports = {getDrugDescriptionByName, getDrugTypeByName, getDrugNamesByGroup}