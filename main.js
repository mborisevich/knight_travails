function knightMoves(start,end){
    let queueList = []
    let queueList2 = []
    queueList.push(start)
    queueList2.push(end)
    function knightHelper(start,end){
        if (start==end){
            return start
        } else if (Array.isArray(start[0])){
            let move1=start.concat( [[start[start.length - 1][0] + 1, start[start.length - 1][1] + 2]])
            let move2=start.concat( [[start[start.length - 1][0] - 1, start[start.length - 1][1] + 2]])
            let move3=start.concat( [[start[start.length - 1][0] - 2, start[start.length - 1][1] + 1]])
            let move4=start.concat( [[start[start.length - 1][0] + 2, start[start.length - 1][1] + 1]])
            let move5=start.concat([[start[start.length - 1][0] - 2, start[start.length - 1][1] - 1]])
            let move6=start.concat( [[start[start.length - 1][0] - 2, start[start.length - 1][1] + 1]])
            let move7=start.concat([[start[start.length - 1][0] + 1, start[start.length - 1][1] - 2]])
            let move8=start.concat([[start[start.length - 1][0] + 2, start[start.length - 1][1] - 1]])
            let moves = [move1, move2, move3, move4, move5, move6, move7, move8]
            let validMoves = moves.filter((moveChain) => {
                return moveChain[moveChain.length -1 ][0] <= 7 && moveChain[moveChain.length -1 ][0] >= 0 && moveChain[moveChain.length -1 ][1] >= 0  && moveChain[moveChain.length -1 ][1] <= 7
            })
            console.log("Valid moves are:")
            console.log(`${validMoves}`)
            return validMoves
        }
        else {
            let move1=[start[0] + 1, start[1] + 2]
            let move2=[start[0] - 1, start[1] + 2]
            let move3=[start[0] - 2, start[1] + 1]
            let move4=[start[0] + 2, start[1] + 1]
            let move5=[start[0] - 2, start[1] - 1]
            let move6=[start[1] - 2, start[0] + 1]
            let move7=[start[0] + 1, start[1] - 2]
            let move8=[start[0] + 2, start[1] - 1]
            let moves = [[start, move1],[start, move2], [start, move3], [start, move4], [start, move5], [start, move6], [start, move7], [start, move8]]
            let validMoves = moves.filter((moveChain) => {
                return moveChain[moveChain.length -1 ][0] <= 7 && moveChain[moveChain.length -1 ][0] >= 0 && moveChain[moveChain.length -1 ][1] >= 0  && moveChain[moveChain.length -1 ][1] <= 7
            })
            return validMoves
        }
    }
    let firstItem
    let found = 0
    while (queueList.length > 0 && found == 0){
        console.log(queueList)
        console.log(queueList2)
        firstItem = queueList.shift()
        secondItem = queueList2.shift()
        if (Array.isArray(firstItem[firstItem.length -1]) && firstItem[firstItem.length - 1][0] == secondItem[secondItem.length - 1][0] && firstItem[firstItem.length - 1][1] == secondItem[secondItem.length -1][1] ){
            found = 1
            console.log("The shortest path is:")
            temp = []
            firstItem.forEach((element) => {
                temp.push(element)
            })
            secondItem.forEach((element) =>{
                temp.push(element)
            })
            temp.sort((a,b) => {
                return (a[0]**2 + a[1]**2)**(1/2) - (b[0]**2 + b[1]**2)**(1/2)
            })
            for (let i = 0; i < temp.length - 2; i++){
                let j = i + 1
                if (j < temp.length - 1 && temp[i][0] == temp[j][0] && temp[i][1] == temp[j][1]){
                    temp.splice(i,1)
                }
            }
            temp.forEach((element) =>{
                console.log(element)
            })
            console.log(`with a total of ${firstItem.length + secondItem.length - 2} move${firstItem.length - 1 > 1 ? "s" : ""}.`)
            break
        } else {
            let newMoves = knightHelper(firstItem, end)
            let newMovesEnd = knightHelper(secondItem, start)
            newMoves.forEach((element) => {
                queueList.push(element)
            })
            newMovesEnd.forEach((element) => {
                queueList2.push(element)
            })
        } 
    }

}

// let move1 = knightMoves([start[0] + 1, start[1] + 2], end)
//let move2 = knightMoves([start[0] - 1, start[1] + 2], end)
//let move3 = knightMoves([start[0] - 2, start[1] + 1], end)
//let move4 = knightMoves([start[0] + 2, start[1] + 1], end)
//let move5 = knightMoves([start[0] - 2, start[1] - 1], end)
//let move6 = knightMoves([start[0] - 1, start[1] -2], end)
//let move7 = knightMoves([start[0] + 1, start[1] - 2], end)
//let move8 = knightMoves([start[0] + 2, start[1] - 1], end)
console.log(knightMoves([0,0],[3,3]))
console.log(knightMoves([0,0],[7,7]))