
class Job{
    constructor(title, place){
        this.title = title; 
        this.place = place; 
    }

   static randomText(lorem){
    console.log('test')
      let loremArray = [ 'ipusum','lorem','dolor','sit','elit','daniel', 'erik','elmin','marko','mirwais','jobb','dröm','sol','vind','vatten','skog']; 
      let minimumWord = 0;
      let maxWord = 16;  


     
     let output = ' ';

     for (let i = 0; i < loremArray.length; i++) {
        let random = Math.floor(Math.random()*(maxWord - minimumWord)) + minimumWord;
        console.log(random)
         output += loremArray[random] 
     }

     output = output.split('')
     console.log(output)

    }
}

Job.randomText();

class Ui{


}





 document.querySelector('form').addEventListener('submit',(e) =>{

    e.preventDefault();

    const title = document.querySelector('.title').value;
    const place = document.querySelector('.place').value;











}) 