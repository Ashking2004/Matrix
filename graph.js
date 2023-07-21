const input = prompt("Input:");
const path = [];
const graphInfo = [];
const distances = [];
var newInput = input.split("  ");
console.log(input.split("  "));
console.log(i);
for (var i = 0; i < newInput.length; i++) {

    if (i == 1) {
        const size = newInput[i];
        const number = size.split(" ");
        for (var i = 1; i <= number[0]; i++) {
            graphInfo.push({ verticeNo: i });
        }
        break;
    }
}
// create graph info
for (var i = 2; i < newInput.length; i++) {
    const distinfo = newInput[i].split(" ");
    console.log("at" + distinfo[0] + "dest" + distinfo[1] + "distance" + distinfo[2]);
    for (var i = 0; i < graphInfo.length; i++) {
        if (graphInfo[i].verticeNo == distinfo[0]) {
            graphInfo[i].destination = [];
            graphInfo[i].destination.push({ dest: distinfo[1], dist: distinfo[2] });
        }
    }
    for (var i = 0; i < graphInfo.length; i++) {
        if (graphInfo[i].verticeNo == distinfo[1]) {
            graphInfo[i].destination = [];
            graphInfo[i].destination.push({ dest: distinfo[0], dist: distinfo[2] });
        }
    }
}

// for(var i=0;i<graphInfo.length;i++){
// for(var i=0;i<graphInfo[i].destination.length;i++){
// var currentpath=[];
// currentpath.push(graphInfo[i].verticeNo);

// }



function checkLoop(path) {

    if (path[0] == path[path.length - 1]) {
        return true;
    } else {
        return false;
    }
}


// recusice function for traversing
// var currentpath=[];
var totalsum = 0;
// function traverse(startVertex){

//      var node=  graphInfo.find(({verticeNo})=>{return verticeNo==startVertex});

//      currentpath.push(node.verticeNo);
//      if(checkLoop(currentpath)){
//         distances.push(totalsum);
//         totalsum=0;
//         currentpath=[];
//         return;
//        }
//      for(var i=0;i<node.destination;i++){
//         totalsum+=node.destination[i].dist;
//         traverse(node.destination[i].dest);

//      }


// }


//
var tempPath = [];

function findandAdd(ptr) {
    if (tempPath.length > 1) {
        if (checkLoop(tempPath)) {
            distances.push(totalsum);
            tempPath = [];
            totalsum = 0;
            return;
        }
    }
    var x = graphInfo.find(({ verticeNo }) => { return ptr == verticeNo });
    ptr = x.destination[0].dest;
    tempPath.push(ptr);
    totalsum += x.destination[0].dist;

    findandAdd(ptr);
}







// for (var i = 0; i < graphInfo.length; i++) {
//     findandAdd(graphInfo[i].verticeNo);
// }
console.log(distances + "the distance is");
console.log(graphInfo);

