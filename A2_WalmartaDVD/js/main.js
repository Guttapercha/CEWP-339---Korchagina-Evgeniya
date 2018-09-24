$(function() {
executeJSON();	
});		

////language switcher procedure with further page loading (default language - french)
	const executeJSON = (LANG="FRENCH")=> {
	    let LANGUAGE = LANG;
		this.counter;
		if (!$.isNumeric(this.counter)) this.counter=0;
		let result;
		$.getJSON('json/movies.json', function(res) {
	        result = res;
			execute(LANGUAGE);
			$("#button").click(function(){
				if (LANGUAGE === "FRENCH") 
				{
					LANGUAGE = "ENGLISH"; 
				} else {
				LANGUAGE = "FRENCH";
				}   
		document.body.innerHTML = ''; //clear the page
		executeJSON(LANGUAGE);
		});
		//calling click function of "ADD TO CART" button by its class
		$('.movieAdd').click(function(){
				alert(result[LANGUAGE]["alert"]);
		});
		});
		
			///CREATE WEB PAGE FROM JSON FILE//
	const execute = (LANGUAGE) =>{	
		
	  let body = document.getElementsByTagName("BODY")[0];
	  //////////////////header/////////////////
	  let header = document.createElement("HEADER");
	  //logo
	  let logo = document.createElement("IMG");
	  logo.setAttribute("src", "images/WalmartLogo2.png");
	  logo.setAttribute("class", "logo");
//	  //page title and slogan
	  let titleSlogan = document.createElement("DIV");
	  let title = document.createElement("H1");
	  let slogan = document.createElement("H3");
	  let titleText = document.createTextNode(result[LANGUAGE]["title"]);
	  let sloganText = document.createTextNode(result[LANGUAGE]["slogan"]);
	  title.setAttribute("class", "title");
	  title.setAttribute("id", "title");
	  slogan.setAttribute("class", "slogan");
	  slogan.setAttribute("id", "sl ogan");
	  titleSlogan.setAttribute("class", "titleSlogan");
	  titleSlogan.setAttribute("id", "titleSlogan");
//	  //language button
	  let langButton = document.createElement("BUTTON");
	  langButton.setAttribute("class", "button");
	  langButton.setAttribute("id", "button");
	  let buttonText = document.createTextNode(result[LANGUAGE]["button_text"]); 
      langButton.appendChild(buttonText);
	  let cartImage = document.createElement("IMG");
	  cartImage.setAttribute("src", "images/CartImage.png");
      cartImage.setAttribute("class", "cartImage");
//	  appending elements to header
	  header.appendChild(logo);	  	  
      title.appendChild(titleText);
	  slogan.appendChild(sloganText);
	  titleSlogan.appendChild(title);
	  titleSlogan.appendChild(slogan);
      header.appendChild(langButton);
	  header.appendChild(cartImage);
	  header.appendChild(titleSlogan);
	  body.appendChild(header);		  
		
///////////load data from  JSON file (to SECTION TAG)///////////////////////////////////				  
      let movieSection = document.createElement("SECTION");
	  movieSection.setAttribute("class", "movieSection");
	  for (let key in result[LANGUAGE]) {
	  //except header section and alert
		  if (key=="title" || key=="slogan" || key=="button_text" || key=="alert" || key=="add")
			  continue;

	  let movieArticle = document.createElement("ARTICLE");      
	  movieArticle.setAttribute("class", "movieArticle");
      let movieFigure = document.createElement("IMG");
	  movieFigure.setAttribute("src", result[LANGUAGE][key]["image"]);
      movieFigure.setAttribute("class", "movieFigure");
	  let movieAside = document.createElement("ASIDE");
      movieAside.setAttribute("class", "movieAside");
	  let movieTitle = document.createElement("P");
	  let movieTitlelText = document.createTextNode(result[LANGUAGE][key]["title"]);
      movieTitle.appendChild(movieTitlelText);
      movieTitle.setAttribute("class", "movieTitle");
	  let movieStarring = document.createElement("P");
	  let movieStarringText = document.createTextNode(result[LANGUAGE][key]["starring"]);      movieStarring.appendChild(movieStarringText);
      movieStarring.setAttribute("class", "movieStarring");
	  let movieBy = document.createElement("P");
	  let movieByText = document.createTextNode(result[LANGUAGE][key]["by"]);
      movieBy.appendChild(movieByText);
      movieBy.setAttribute("class", "movieBy");
	  let moviePrice = document.createElement("P");
	  let moviePriceText = document.createTextNode(result[LANGUAGE][key]["price"]);
      moviePrice.appendChild(moviePriceText);
      moviePrice.setAttribute("class", "moviePrice");
//BUTTON "ADD TO CART"
	  let toCart = document.createElement("DIV");
      toCart.setAttribute("class", "toCart");
	  let cartFigure = document.createElement("IMG");
	  cartFigure.setAttribute("src", "images/CartImage.png");
      cartFigure.setAttribute("class", "cartFigure");	  
	  let movieAdd = document.createElement("BUTTON");
      movieAdd.setAttribute("class", "movieAdd");
	  movieAdd.setAttribute("id", "movieAdd");
	  let movieAddText = document.createTextNode(result[LANGUAGE]["add"]);
	  movieAdd.appendChild(movieAddText);
	  toCart.appendChild(cartFigure);
	  toCart.appendChild(movieAdd);
	  movieAside.appendChild(movieTitle);
      movieAside.appendChild(movieStarring);
      movieAside.appendChild(movieBy);
	  movieAside.appendChild(moviePrice);
	  movieAside.appendChild(toCart);
	  movieArticle.appendChild(movieFigure);
	  movieArticle.appendChild(movieAside);
	  movieSection.appendChild(movieArticle);  
		};
		body.appendChild(movieSection);
	};
};