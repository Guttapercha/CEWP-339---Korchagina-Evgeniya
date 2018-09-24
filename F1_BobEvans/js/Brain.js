function Brain(){
//----creating interface----------------
	this.createInterface = (result) => {
		let menu = document.getElementById("menu");
		const keys = Object.keys(result);
		for (let index in keys) {
			let breakfast = document.createElement("ARTICLE");
			breakfast.setAttribute("class", "breakfast");
			let breakfast_price = document.createElement("DIV");
			breakfast_price.setAttribute("class", "price");
			breakfast_price.setAttribute("id", "price_" + index);
			let dollar_price_text = document.createTextNode(`$${result[keys[index]].PRICE}`);
			breakfast_price.appendChild(dollar_price_text);
			let breakfast_img = document.createElement("IMG");
			breakfast_img.setAttribute("class", "image");
			breakfast_img.setAttribute("src", `${result[keys[index]].IMG}`);
			let breakfast_info = document.createElement("ASIDE");
			breakfast_info.setAttribute("class", "info");
			let breakfast_title = document.createElement("H4");
			breakfast_title.setAttribute("class", "breakfast_title");
			let breakfast_title_text = document.createTextNode(keys[index]);		breakfast_title.appendChild(breakfast_title_text);
			let breakfast_description = document.createElement("P");
			breakfast_description.setAttribute("class", "description");
			let breakfast_description_text = document.createTextNode(`${result[keys[index]].DESC}`);	breakfast_description.appendChild(breakfast_description_text);
			breakfast_info.appendChild(breakfast_title);	breakfast_info.appendChild(breakfast_description);
			
//----append price, image, title and description of the breakfast to breakfast element-------------			
			breakfast.appendChild(breakfast_price);
			breakfast.appendChild(breakfast_img);
			breakfast.appendChild(breakfast_info);
//----append breakfast element to menu element
		menu.appendChild(breakfast);
		};
	};
}