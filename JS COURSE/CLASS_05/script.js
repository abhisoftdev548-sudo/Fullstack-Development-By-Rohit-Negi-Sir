//  console.log(Math.floor(Math.random()*100000+1000), Math.floor(Math.random()*10000+1000))

for(let n=0; n<=10000000; n++){

    let first = Math.floor(Math.random()*10000+1000)
    let second = Math.floor(Math.random()*10000+1000)
    console.log(first, second)
    if(first == second){
        return (
            console.log(`find match in ${n} number`)
        )
    }
    if(n==1000 && first != second){
        return console.log("dont find match")
    }

}