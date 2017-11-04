var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  listItems();

});

var listItems= function() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i=0; i < res.length; i++) {
    	console.log("Item Number: " + res[i].item_id + 
    				"\n Product: " + res[i].product_name + 
    				"\n Department: " + res[i].department_name +
    				"\n Price: " + res[i].price +
    				"\n Amount Left: " + res[i].stock_quantity + "\n")
    }
    askQuestions(res);
	});
};

var askQuestions= function(res) {
	inquirer.prompt([{
		type: "input",
		name: "name",
		message: "What would you like to buy?"
	}]).then(function(answer){
		var correct = false;
		for (var i=0; i<res.length; i++) {
			if (res[i].product_name=== answer.name){
				correct = true;
				var product = answer.name;
				var id=i;
				inquirer.prompt({
					type: "input",
					name: "quant",
					message: "How many would you like to buy?",
					validate: function(value) {
						if(isNaN(value) == false){
							return true;
						} else {
							return false;
						}
					}
					}).then(function(answer){
						if ((res[id].stock_quantity- answer.quant)>0){
							connection.query("UPDATE products SET stock_quantity='"
								+(res[id].stock_quantity- answer.quant)
								+ "' WHERE product_name='"+ product
								+ "'", function(err,res2) {
									console.log("Bought!");
									listItems();
								})
						} else {
							console.log("There is not enough in stock.")
							askQuestions(res);
						};
					})
				}
			}
			if (i==res.length && correct===false) {
				console.log("Sorry, we dont have that item.")
				askQuestions(res);
			}
		});
	};






