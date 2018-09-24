function Order(){
	//-------------
	this.arr_order = [];
	this.arr_prices = [];
	//-------------
	this.showHideOrderCart = (id, show) => {
		if (show) {
			$(id).animate({top:"0px"});
		}
		else 
			{
			$(id).animate({top:"-1365px"});	
			}
	};
	//---------
	this.addOrder = (breakfast, price) =>{
		this.arr_order.push(breakfast);
		this.arr_prices.push(price);
		const total_without_taxes = this.addTotal();
		const total_with_taxes = total_without_taxes+this.calculateTaxes(total_without_taxes);
		const tip = this.tipSuggestion(total_without_taxes);
		const total_tax_and_tip = total_with_taxes + tip;
		this.createOrderString(total_without_taxes, total_with_taxes, tip, total_tax_and_tip);
		//----------------
		
		//---------------
		};
	//------------------
	this.addTotal = () => {
			let total = 0;
			for (let i in this.arr_prices) {
				total +=this.arr_prices[i];
			}
			return total;
		};
	//--------------------	
	//------------------
	this.calculateTaxes = (initial_amount) => {
			return Number((initial_amount*0.06).toFixed(2));
		};
	//--------------------
		
	//------------------
	this.tipSuggestion = (initial_amount) => {
			return Number((initial_amount*0.2).toFixed(2));
		};
	//--------------------
	this.createOrderString = (t_without, t_with, tip, with_and_tip) => {
			let order_string = "";
			for (let i in this.arr_order) {
				const button_id = `b${i}`;
				order_string +=`<button class="delete" id ="${button_id}">X</button> - ${this.arr_order[i]} : ${this.arr_prices[i]}<br>`;
			} 
			order_string += "<hr>";
			order_string +=`Total Without Taxes : $${t_without.toFixed(2)}<br>`;
			order_string +=`Total With Taxes (6%): $${t_with.toFixed(2)}<br>`;
			order_string +=`Tip Suggestion (20%): $${tip.toFixed(2)}<br>`;
			order_string +=`Total With Taxes and Tip: $${with_and_tip.toFixed(2)}<br>`;
			
			$("#order_to_display").html(order_string);
			$("button").click(function(evt) {
				if (evt.target.id !=="close"){
					const id = evt.target.id;
					const index = id.substring(1, id.length);
					order.removeOrder(index);
				}
			});
		};
	//-------------------	  
	this.removeOrder = (index) => {
		this.arr_order.splice(index,1);
		this.arr_prices.splice(index,1);
		this.reCalculate();
	};
	//-----------------
	this.reCalculate = () => {
		const total_without_taxes = this.addTotal();
		const total_with_taxes = total_without_taxes+this.calculateTaxes(total_without_taxes);
		const tip = this.tipSuggestion(total_without_taxes);
		const total_tax_and_tip = total_with_taxes + tip;
		if (total_without_taxes === 0) {
			$("#order_to_display").html("");
		} else {
		    this.createOrderString(total_without_taxes, total_with_taxes, tip, total_tax_and_tip);
		}
	}						  
};	