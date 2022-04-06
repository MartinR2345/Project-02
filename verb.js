//Create a function, give it a name called "changeColor" that passes an argument in the parenthesis called event.  This "changeColor()" name is actually the name used in my HTML file of my <select> element.
//When a user changes the selected option of an <select> element, it will execute my JavaScript function. 
//Inside my function will hold a variable named "color" and assigned to it will be my argument (event) as well with the value property.  This value property will set or return the value of the selected option in the <select> tag.  
//As soon as the option of the <select> tag is changed, a change event will occur and it will trigger the "changeColor()" JavaScript function.
//I'm selecting the HTML <body> tag from the DOM with the getElementsByTagName.  This code will target the body's background color.
//Attach to this is the HTML DOM style backgroundColor property which will be use to change the color of the body tag.  This is also equal to my variable "color".

function changeColor(event){
    var color = event.value;
    document.getElementsByTagName('BODY')
    [0].style.backgroundColor=color;
}