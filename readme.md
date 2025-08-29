1.	What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer:
getElementById - returns a single element defined by the following id mentioned in the getElementById(id) code.

getElementsByClassName - returns all the element defined by the following class-name in a HTML-collection mentioned in the getElementsByClassName(class-name) code.

querySelector - returns the first selector matched with the mentioned selector-name in the querySelector(selector) code.

querySelectorAll - returns all the selectors that matched the mentioned selector name in the querySelectorAll(selector) code 

2.	How do you create and insert a new element into the DOM?

answer:
 Step-1: create an element using document.createElement()
 Step-2: add text or Html code using innerText or innerHTML
 step-3: add the element to the DOM using appendChild

3.	What is Event Bubbling and how does it work?

answer: 
Bubbling is a process where an event triggers an element to run through its parent element and the to ancestor element, this process continues until the process is stopped deliberately or the bubbling reaches to the highest possible element in the DOM.


4.	What is Event Delegation in JavaScript? Why is it useful?

answer:
Event delegation is the process of managing events of multiple child element through a common parent element.


5.	What is the difference between preventDefault() and stopPropagation() methods?

answer:
preventDefault() - Stops an event from using its default behavior. Like preventing form submitting.

stopPropagation() - stops the event bubbling from happening.