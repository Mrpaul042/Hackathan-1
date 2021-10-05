





function book(){
    let cc=document.getElementById("bname").value;
    console.log(cc);
    async function book1(){
        let data=await fetch(`https://www.anapioficeandfire.com/api/books/${cc}`);
        let result=await data.json()
        console.log(result)
        for(var i in result){
            console.log(`${cc}:${result[i].name} :  ${result[i].isbn}:  ${result[i].numberOfPages}  :  ${result[i].authors}  :  ${result[i].publisher}  :  ${result[i].released} `)
            var name1=result[i].name
            var isbn1=result[i].isbn
            var numberOfPages1=result[i].numberOfPages
            var author1=result[i].authors
            var publisher1=result[i].publisher
            var released1=result[i].released
            var character1=result[5].characters

            var div=document.createElement("div")
            div.innerHTML=`The API Data:  ${name1}:  ${isbn1}  :${numberOfPages1}  : ${author1} : ${publisher1} : ${released1} : ${character1}`
             

            document.body.append(div)

            
        }
    }
    book1()

}
