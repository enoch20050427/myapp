var fdb = new ForerunnerDB();
var myDb = fdb.db("myDb");
var myCollection = myCollection.find
function show(){
	var data = myCollection.find();
	console.log(data);
}


$("#submit").on("click",function(){
	var newdate = $("#date").val();
	var newkind = $("#my_select").val();
	var newmoney= $(".money").val();
	var text = $("#my_select").val();
	alert(text);
	var newData = {
		date : newdate,
		kind : newkind,
		money: newmoney,
	}
	myCollection.insert(newData);
	myCollection.save();
	console.log(newData)
});	
