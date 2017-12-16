function show(){
	var data = myCollection.find();
	console.log(data);
}

var fdb = new ForerunnerDB();
var myDb = fdb.db("myDb");
var myCollection = myDb.collection("myCollection")
myCollection.load(show);

$("#submit").on("click",function(){
	var newdate = $("#date").val();
	var newkind = $("#my_select").val();
	var newmoney= $("#Money").val();
	var text = $("#my_select").val();
	var newData = {
		date : newdate,
		kind : newkind,
		money: newmoney
	}
	myCollection.insert(newData);
	myCollection.save();
	console.log(newData)
});	
