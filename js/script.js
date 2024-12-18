// Long Duc Nguyen
function nav_animation()
{
    
    const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('nav');
            menuToggle.addEventListener('click', () => {
            if (nav.className != 'active') { nav.className = 'active'; }
            else { nav.className = ''; }
            });
}

function order(field, id) {
    var radioDeliver = document.getElementsByName(field);

    if ((radioDeliver[1].checked)) {
        $(id).show();
    }
    else {
        $(id).hide();
    }
}

function initMap() {
    const uluru = { lat: -36.84538532748032, lng: 174.76398697955955 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

function validate_register() {
    var email = $("#email").val();
    var pwd1 = $("#pwd1").val();
    var pwd2 = $("#pwd2").val();
    var full_name = $("#full_name").val();
    var username = $("#username").val();
    var phonenumber = $("#phonenumber").val();
    
    var errMsg = "";							
    var result = true;
						
    var pattern = /^[a-za-z ]+$/;	

    if (username == "") {
        errMsg += "Username cannot be empty.\n";
    }
    if (full_name == "") {
        errMsg += "Full name cannot be empty.\n";
    }

    if (email == "") {
        errMsg += "Email cannot be empty.\n";
    }
    if (phonenumber == "") {
        errMsg += "Phone Number cannot be empty.\n";
    }

    if (pwd1.length < 8) {
        errMsg += "Password must be at least 8 characters long\n";
    }
    if (pwd1 != pwd2) {
        errMsg += "Passwords do not match.\n";
    }
    if (pwd1.match(new RegExp("[A-Z]")) == null) {
        errMsg += "Passwords needs an Uppercase character.\n";
    }
    if (pwd1.match(new RegExp("[a-z]")) == null) {
        errMsg += "Passwords needs an lowercase character.\n";
    }
    if (email.indexOf('@') == 0) {
        errMsg += "Email cannot start with an @ symbol.\n";
    } if (email.indexOf('@') < 0) {
        errMsg += "Email must contain an @ symbol.\n";
    }
    

    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }

    return result;
}


function validate_order() {
    var delivery_type_pickup = $("#delivery_type_pickup").prop("checked");
    var delivery_type_delivery = $("#delivery_type_delivery").prop("checked");

    var delivery_address = $("#delivery_address").val();
    var delivery_dist = $("#delivery_dist").val();
    var delivery_postcode = $("#delivery_postcode").val();

    var billing_address = $("#billing_address").val();
    var billing_dist = $("#billing_dist").val();
    var billing_postcode = $("#billing_postcode").val();

    var pizza_order = $("#pizza_order").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    var payment_type_pickup = $("#payment_type_pickup").prop("checked");
    var payment_type_online = $("#payment_type_online").prop("checked");

    var full_name = $("#full_name").val();
    var cardno = $("#cardno").val();
    var ccmon = $("#ccmon").val();
    var ccyear = $("#ccyear").val();
    var cvv = $("#cvv").val();

    var genm = $("#genm").prop("checked");
    var genf = $("#genf").prop("checked");

    var errMsg = "";		
					
    var result = true;				
				
    var pattern = /^[a-za-z ]+$/;					

    if ((delivery_type_delivery)) {
        if (delivery_address == "") {
            errMsg += "Delivery Address cannot be empty.\n";
        }

        if (delivery_dist == "") {
            errMsg += "Delivery District cannot be empty.\n";
        }

        if (delivery_postcode == "") {
            errMsg += "Delivery PostCode cannot be empty.\n";
        }

        if (delivery_postcode.length != 6) {
            errMsg += "Delivery Post code must be 6 digits long.\n";
        }

    }

    if (billing_address == "") {
        errMsg += "Billing Address cannot be empty.\n";
    }

    if (billing_dist == "") {
        errMsg += "Billing District cannot be empty.\n";
    }

    if (billing_postcode.length != 6) {
        errMsg += "Billing Post code must be 6 digits long.\n";
    }

    if (pizza_order == "") {
        errMsg += "Pizza Order cannot be empty.\n";
    }

    if (email == ""){
        errMsg += "Email cannot be empty.\n";
    }

    if (phone == "") {
        errMsg += "Phone Number cannot be empty.\n";
    }

    if ((!delivery_type_pickup) && (!delivery_type_delivery)) {
        errMsg += "A Delivery type must be selected.\n";
    }

    if ((!payment_type_pickup) && (!payment_type_online)) {
        errMsg += "A Payment type must be selected.\n";
    }
    if ((payment_type_online)) {
        if (full_name == "") {
            errMsg += "Owner's Name cannot be empty.\n";
        }

        if (cardno == "") {
            errMsg += "Card Number cannot be empty.\n";
        }

        if (ccmon == "") {
            errMsg += "Credit Card Month cannot be empty.\n";
        }

        if (cvv.length != 3) {
            errMsg += "CCV/CVC must be 3 numbers long.\n";
        }
        if (ccyear == "") {
            errMsg += "Credit Card Year cannot be empty.\n";
        }
    }

    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }


    return result;
}

function cop() {
    var valueToCopy = $("#delivery_address").val();
    $("#billing_address").val(valueToCopy);

    var valueToCopy = $("#delivery_dist").val();
    $("#billing_dist").val(valueToCopy);

    var valueToCopy = $("#delivery_postcode").val();
    $("#billing_postcode").val(valueToCopy);
}
function caution() {
    var delivery_address = $("#delivery_address").val();
    var delivery_dist = $("#delivery_dist").val();
    var delivery_postcode = $("#delivery_postcode").val();
    var errMsg = "";						
    var result = true;					
    var pattern = /^[a-za-z ]+$/;				

    if (delivery_address == "") {
        errMsg += "Delivery Address cannot be empty.\n";
    }

    if (delivery_dist == "") {
        errMsg += "Delivery District cannot be empty.\n";
    }

    if (delivery_postcode == "") {
        errMsg += "Delivery PostCode cannot be empty.\n";
    }

    if (delivery_postcode.length != 6) {
        errMsg += "Delivery Post code must be 6 digits long.\n";
    }
    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }

    return result;

}


function creditcard_1() {
    var Vdigits = $("#Vdigits").val();
    var cardno = $("#cardno").val();

    var errMsg = "";
    var result = true;
    var pattern = /^[a-za-z ]+$/;


    if (Vdigits.length != 16) {
        errMsg += "VISA is chosen and must be 16 digits.\n";
    }
    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }
    $("#cardno").attr("maxlength", 16)

    return false;
}

function creditcard_2() {
    var Vdigits = $("#Mdigits").val();
    var cardno = $("#cardno").val();

    var errMsg = "";
    var result = true;
    var pattern = /^[a-za-z ]+$/;


    if (Mdigits.length != 16) {
        errMsg += "Master Card is chosen and must be 16 digits.\n";
    }
    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }
    $("#cardno").attr("maxlength", 16)

    return false;
}

function creditcard_3() {
    var Vdigits = $("#Adigits").val();
    var cardno = $("#cardno").val();

    var errMsg = "";
    var result = true;
    var pattern = /^[a-za-z ]+$/;


    if (Adigits.length != 15) {
        errMsg += "AMEX is chosen and must be 15 digits.\n";
    }
    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }
    $("#cardno").attr("maxlength", 15)

    return false;
}

function init() {
    scroll();
    $("#regform").submit(validate_order);
    $("#regform2").submit(validate_register);
}
$(document).ready(init);


function payment_form() {

    $('#payment-form input:radio').addClass('input_hidden');
    $('#payment-form label').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
}
