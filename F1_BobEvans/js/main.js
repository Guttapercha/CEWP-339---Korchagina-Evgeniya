//---create objects of classes Brain and Order in order to appply corresponf=ding methods
const order = new Order();
const brain = new Brain();
let result;
//------------------------------
$(function() {
	loadJSONFile();
	$("#order").click(function(){
		order.showHideOrderCart("#order_cart", true);
	});
   $("#close").click(function(){
		order.showHideOrderCart("#order_cart", false);
	});
});		

//----------loading JSON file--------------
const loadJSONFile = () =>{
	let previous = null;
	let current = null;
	
	if (localStorage.getItem("retry") !== "false" && localStorage.getItem("retry")!==null) {
		let timer = setInterval(function(){
			$.getJSON('json/menu.json', function(res) {
				current = JSON.stringify(result);
				if (previous && current && previous!==current) {
					clearInterval(timer);
					localStorage.clear();
					location.reload();
				}
				previous = current;
				console.log("Retry");
				});
			
		}, 1000);		
		}
	
	$.getJSON('json/menu.json', function(res) {
		result = res;
		brain.createInterface(result);
//-----create event lister for each price----------
		for (let i = 0; i < Object.keys(result).length; i++)
			{
				$("#price_" + i).click(priceClicked);
			}
	});
};
			  
//--------------------	
const priceClicked = (evt) => {
		const id = evt.target.id;
		const index = id.substring(6,id.lenght);
		const keys = Object.keys(result);
		const breakfast = keys[index];
		const price = Number(result[breakfast].PRICE);
		order.addOrder(breakfast, price);
		order.showHideOrderCart("#order_cart", true);
				
	};
			  
//-------------------