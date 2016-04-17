// JavaScript Document
function check_form(){

var guestName = document.forms["myForm"]["fullname"].value;
var guestAddress = document.forms["myForm"]["address"].value;
var guestPhoneNumber = document.forms["myForm"]["phoneNumber"].value;
var guestEmail = document.forms["myForm"]["email"].value;
var guestBirthDay = document.forms["myForm"]["bDay"].value;
var guestMessage = document.forms["myForm"]["message"].value;
 
 validateEmail(guestEmail);
 ValidateNumber(guestPhoneNumber);
 ValidateBD();
 validateNotBlank(guestName, "Name", guestAddress, "Address", guestPhoneNumber, "Phone",
guestEmail, "Email", guestBirthDay, "Birth Day", guestMessage, "Message");
 
 
}

function validateNotBlank(value, label, value2, label2, value3, label3, value4, label4, 
value5, label5, value6, label6){
	
	if (value == null || value == ""){
	alert("Please enter a value for " + label);
	return false;
	}
	if (value2 == null || value2 == ""){
	alert("Please enter a value for " + label2);
	return false;
	}
	if (value3 == null || value3 == ""){
	alert("Please enter a value for " + label3);
	return false;
	}
	if (value4 == null || value4 == ""){
	alert("Please enter a value for " + label4);
	return false;
	}
	if (value5 == null || value5 == ""){
	alert("Please enter a value for " + label5);
	
	return false;
	}
	if (value6 == null || value6 == ""){
	alert("Please enter a value for " + label6);
	return false;
	}
	
	return true;
}
function validateEmail(value)
 {
 var x=value;
 var atpos=x.indexOf("@");
 var dotpos=x.lastIndexOf(".");
 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
   {
   alert("Not a valid e-mail address");
   return false;
   }
   return true;
 }


// Declaring required variables
var digits = "0123456789";
// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";
// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = phoneNumberDelimiters + "+";
// Minimum no of digits in an international phone no.
var minDigitsInIPhoneNumber = 10;

function isInteger(s)
{   var i;
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}
function trim(s)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not a whitespace, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (c != " ") returnString += c;
    }
    return returnString;
}
function stripCharsInBag(s, bag)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function checkInternationalPhone(strPhone){
var bracket=3
strPhone=trim(strPhone)
if(strPhone.indexOf("+")>1) return false
if(strPhone.indexOf("-")!=-1)bracket=bracket+1
if(strPhone.indexOf("(")!=-1 && strPhone.indexOf("(")>bracket)return false
var brchr=strPhone.indexOf("(")
if(strPhone.indexOf("(")!=-1 && strPhone.charAt(brchr+2)!=")")return false
if(strPhone.indexOf("(")==-1 && strPhone.indexOf(")")!=-1)return false
s=stripCharsInBag(strPhone,validWorldPhoneChars);
return (isInteger(s) && s.length >= minDigitsInIPhoneNumber);
}

function ValidateNumber(value){
	var Phone=value;
	
	if ((Phone==null)||(Phone=="")){
		alert("Please Enter your Phone Number")
		
		return false
	}
	if (checkInternationalPhone(Phone)==false){
		alert("Please Enter a Valid Phone Number")
		Phone=""
		
		return false
	}
	return true;
 }

var dtCh= "/";
var minYear=1900;
var maxYear=2011;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strMonth=dtStr.substring(0,pos1)
	var strDay=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		alert("The date format should be : mm/dd/yyyy")
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		alert("Please enter a valid month")
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		alert("Please enter a valid day")
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		alert("Please enter a valid date")
		return false
	}
return true
}

function ValidateBD(){
	var dt=document.myForm.bDay
	if (isDate(dt.value)==false){
		dt.focus()
		return false
	}
    return true
 }
 
 
var a = Math.ceil(Math.random() * 10); 
var b = Math.ceil(Math.random() * 10); 
var c = a + b; 
function captcha(){ 
 document.getElementById('text').innerHTML='How much is ' + a + ' + ' + b + '?'; 
} 

function checkCaptcha(){ 
    var d = document.getElementById('captchaEdit').value; 
    if(d != c) { 
    alert('Not correct answer for security question ! Try again') 
    } 
	
} 

function newPage()
{
 value1=""+document.forms["myForm"]["fullname"].value;
 value2=""+document.forms["myForm"]["address"].value;
 value3=""+document.forms["myForm"]["phoneNumber"].value;
 self.location="java2.html?="+value1;
}

