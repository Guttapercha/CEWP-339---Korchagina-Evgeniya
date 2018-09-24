//LANGUAGE BUTTON HERE

$(function(){
	let global_result;
	$.getJSON("json/data.json", function(result){
		global_result = result;
		$("h3").text(global_result.ENGLISH.title);		
	}); 
	$("#lan").click(function(){
		if ($("h3").text() === global_result.FRENCH.title) {
			$("h3").text(global_result.ENGLISH.title);
			$("h4#a1").text(global_result.ENGLISH.direct);			$("h4#a2").text(global_result.ENGLISH.reverse);			$("p#p1").text(global_result.ENGLISH.no_taxes);			$("p#p2").text(global_result.ENGLISH.with_taxes);			$("h4#h1").text(global_result.ENGLISH.QST);			$("h4#h2").text(global_result.ENGLISH.Calc_formula);			$("h5#t1").text(global_result.ENGLISH.Cal_with);			$("h5#t2").text(global_result.ENGLISH.Cal_without);			$("p#d1").text(global_result.ENGLISH.d1);
			$("p#d2").text(global_result.ENGLISH.d2);
			$("p#d3").text(global_result.ENGLISH.d3);
			$("p#d4").text(global_result.ENGLISH.d4);
			$("p#d5").text(global_result.ENGLISH.d5);
			$("p#d6").text(global_result.ENGLISH.d6);
			$("p#d7").text(global_result.ENGLISH.d7);
			$("p#d8").text(global_result.ENGLISH.d8);
			$("p#d9").text(global_result.ENGLISH.d9);
			$("p#d10").text(global_result.ENGLISH.d10);
			$("#lan").val(global_result.FRENCH.button_text);			$("#before_button").val(global_result.ENGLISH.button_text_cal);			$("#after_button").val(global_result.ENGLISH.button_text_cal);
			$("#g").val(global_result.ENGLISH.g);
			$("#q").val(global_result.ENGLISH.q);
			
			
		} else {
			$("h3").text(global_result.FRENCH.title);
			$("h4#a1").text(global_result.FRENCH.direct);			$("h4#a2").text(global_result.FRENCH.reverse);			$("p#p1").text(global_result.FRENCH.no_taxes);			$("p#p2").text(global_result.FRENCH.with_taxes);			$("h4#h1").text(global_result.FRENCH.QST);$("h4#h2").text(global_result.FRENCH.Calc_formula);			$("h5#t1").text(global_result.FRENCH.Cal_with);
			$("h5#t2").text(global_result.FRENCH.Cal_without);
			$("p#d1").text(global_result.FRENCH.d1);
			$("p#d2").text(global_result.FRENCH.d2);
			$("p#d3").text(global_result.FRENCH.d3);
			$("p#d4").text(global_result.FRENCH.d4);
			$("p#d5").text(global_result.FRENCH.d5);
			$("p#d6").text(global_result.FRENCH.d6);
			$("p#d7").text(global_result.FRENCH.d7);
			$("p#d8").text(global_result.FRENCH.d8);
			$("p#d9").text(global_result.FRENCH.d9);
			$("p#d10").text(global_result.FRENCH.d10);
			$("#lan").val(global_result.ENGLISH.button_text);						$("#before_button").val(global_result.FRENCH.button_text_cal);			$("#after_button").val(global_result.FRENCH.button_text_cal);
			$("p#g").text(global_result.FRENCH.g);
			$("p#q").text(global_result.FRENCH.q);
			
		}
	});
});


//CLACULATOR HERE
$(function() {
	$("#before_button").click(clickEvent);
	$("#after_button").click(clickEvent);
});

const clickEvent = (evt) =>{
	let amount=$("#before").val();
	let amount_=$("#after").val();
	switch (evt.target.name){
		case "toAfter":
			$("#result_GST_after").text(After(amount)[0]);
			$("#result_QST_after").text(After(amount)[1]);
			$("#result_after").text(After(amount)[2]);
			$("#before").text(After(amount)[0]);
			$("#er1").text("");
			if (After(amount)[0]==="undefined") {
				$("#er1").text("Enter a valid amount");
			}			
			break;			
	
		case "toBefore":
			$("#result_GST_before").text(Before(amount_)[0]);
			$("#result_QST_before").text(Before(amount_)[1]);
			$("#result_before").text(Before(amount_)[2]);
			$("#er2").text("");
			if (After(amount_)[0]==="undefined") {
				$("#er2").text("Enter a valid amount");
			} 
			break;
			
		default:
	}
	
};
//DIRECT
// calculating GST, QST and total amount after taxes
const After = (value)=>{
	let amount=[];
	if (value===undefined || $.isNumeric(value)===false){
		amount[0]="undefined";
		amount[1]="undefined";
		amount[2]="undefined";
} else {
	let GST=`$ ${(Number(value) * 0.05).toFixed(2)}`;
    let QST=`$ ${(Number(value) * 0.09975).toFixed(2)}`;
	let total_amount=`$ ${(Number(value) * 1.14975).toFixed(2)}`;
	//create an array containing 3 elements: GST, QST and total_amount
	
	amount[0]=GST;
	amount[1]=QST;
	amount[2]=total_amount;
}
	return amount;
};			  
 //REVERSE
// calculating GST, QST and total amount before taxes
const Before = (value)=>{
	let amount=[];
	if (value===undefined || $.isNumeric(value)===false){
		amount[0]="undefined";
		amount[1]="undefined";
		amount[2]="undefined";
} else {
	let total_amount=(Number(value) / 1.14975).toFixed(2);
	let GST=`$ ${(total_amount * 0.05).toFixed(2)}`;
    let QST=`$ ${(total_amount * 0.09975).toFixed(2)}`;
	//create an array containing 3 elements: GST, QST and total_amount
	
	amount[0]=GST;
	amount[1]=QST;
	amount[2]=`$ ${total_amount}`;	
}
	return amount;
};