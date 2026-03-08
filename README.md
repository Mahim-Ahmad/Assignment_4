1.The difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

(i) getElementById()

getElementsById() selects an element based on its id, and it only return one element.

For example: document.getElementById("header");

(ii) getElementsByClassName()

getElementsByClassName() select elements based on their class name, and it returns a collection of elements.

For example: document.getElementsByClassName("card");

(iii) querySelector()

querySelector() selects only the first element in the page that matches a specific CSS selector.

For example: document.querySelector(".card");

(iv) querySelectorAll()

querySelectorAll() selects all elements in the page that match a specific CSS selector.

For example: document.querySelectorAll(".card");




2.How to Create and Install a New Element in the DOM: 

step:

i.create a new element.
ii.add content
3.insert it into the doccument

example:
const newdiv=doccument.createElement("div");
newDiv.textContent="abcd";
document.body.appendChild(newDiv);


this will create a new div element and add it to the webpage.




3. Event Bubbling Definition:
When an event is triggered on a child node it propagates to its parent nodes.

Example:
<div id="parent">
  <button id="child">Click Me</button>
</div>


document.getElementById("child").addEventListener("click", function(){
    console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", function(){
    console.log("Div clicked");
});


If you click the button, both messages will appear because the event bubbles to the parent.




4.what is Event Delegation?
Event delegation refers to linking a single event handler for a parent object instead of an individual event handler for each child object.

To illustrate:

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  /<ul>


document.getElementById("list").addEventListener("click", function(e) {
    console.log(e.target.innerHTML);
});

Now the parent can respond to click events from all the child items inside the parent.




5. Difference between preventDefault() and stopPropagation()

Differences in Using preventDefault() and stopPropagation() 

PreventDefault() Method
This method will stop your browser from performing its default actions.


Example: 

document.querySelector("a").addEventListener("click", function(e){ e.preventDefault() });
StopPropagation() Method 

This method will prevent the event that has been created from propagating (moving) to any of its parent elements.


Example: 

document.getElementById("child").addEventListener("click", function(e){ e.stopPropagation() });
