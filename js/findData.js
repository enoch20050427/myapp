function show(){     var data = myCollection.find({         date:{
$gte:$("#from").val(),             $lte:$("#to").val()         }     },{
$orderBy:{date:-1}     });
    
    $("#percent").text("");
    $("#myTbody").text("");
    console.log(data);
    for(var i=0; i<data.length ; i++){
        $("#myTbody").append(
            "<tr>"+
                "<td>"+(i+1)+"</td>"+
                "<td>"+data[i].date+"</td>"+
                "<td>"+data[i].kind+"</td>"+
                "<td>"+data[i].money+"</td>"+
            "</tr>"
        )
    }
    var num = 0;
    for (var i=0; i<data.length ; i++){
        num=num+(data[i].money)*1;
    }
    var transMoney=0;
    for (var i=0; i<data.length ; i++){
        if (data[i].kind=='transportation'){
            transMoney = transMoney+(data[i].money)*1;
        }
    }
    var foodMoney=0;
    for (var i=0; i<data.length ; i++){
        if (data[i].kind=='transportation'){
            foodMoney = transMoney+(data[i].money)*1;
        }
    }
    var writeMoney=0;
    for (var i=0; i<data.length ; i++){
        if (data[i].kind=='transportation'){
            writeMoney = writeMoney+(data[i].money)*1;
        }
    }
    var num1 = num/data.length;
    console.log(num);
    var all=transMoney+foodMoney+writeMoney;
    $("#percent").append(
        "<tr>"+
            "<td>"+"transportation"+"</td>"+
            "<td>"+transMoney+"</td>"+
            "<td>"+(transMoney/all*100).toFixed(2)+"%"+"</td>"+
        "</tr>"
    )
    $("#percent").append(
        "<tr>"+
            "<td>"+"food"+"</td>"+
            "<td>"+foodMoney+"</td>"+
            "<td>"+(foodMoney/all*100).toFixed(2)+"%"+"</td>"+
        "</tr>"
    )
    $("#percent").append(
        "<tr>"+
            "<td>"+"writing"+"</td>"+
            "<td>"+writeMoney+"</td>"+
            "<td>"+(writeMoney/all*100).toFixed(2)+"%"+"</td>"+
        "</tr>"
    )
}

function updateView(){
    myCollection.load(show);
}
$("#bbb").on("click",updateView);

// $("#bbb").on("click",function(){
//     myCollection.load(show);
// });

var fdb = new ForerunnerDB();
var myDb = fdb.db("myDb");
var myCollection = myDb.collection("myCollection")

