menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Veg Supreme Pizza",
                        "Paneer Tikka Pizza",
                        "Deluxe Veggie Pizza",
                        "Veg Extravaganza Pizza"];

drink_list_array = ["Beer","Fruit Juice","Mocktail","Iced Lemon Tea","Red Wine"];
    
    function getmenu(){
        var htmldata="";
        var drinkdata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        for(var i=0;i<drink_list_array.length;i++){
            drinkdata=drinkdata+ drink_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        document.getElementById("drink_menu").innerHTML = drinkdata;
        //give the appropriate id name as display_menu 
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        // use the sort function as - menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

    function add_drinkitem(){
        var drinkdata;
		var drinktags='<img id="im2" src="Drinks-PNG-Transparent.png">'
        var drinkitem=document.getElementById("add_drinkitem").value;
        drink_list_array.sort();
        // use the sort function as - menu_list_array.sort();
        drinkdata="";
        for(var i=0;i<drink_list_array.length;i++){
            drinkdata=drinkdata+drinktags+ drink_list_array[i]+'<br>';
        }
         document.getElementById("drink_addedmenu").innerHTML = drinkdata;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

function add_drink(){
	var drinkitem=document.getElementById("add_drinkitem").value;
    drink_list_array.push(drinkitem);
	add_drinkitem();
}