/* Write the code necessary to do the following:

1. Select the section with an id of container without using querySelector.
2. Select the section with an id of container using querySelector.
3. Select all of the list items with a class of “second”.
4. Select a list item with a class of third, but only the list item inside of the ol tag.
5. Give the section with an id of container the text “Hello!”.
6. Add the class main to the div with a class of footer.
7. Remove the class main on the div with a class of footer.
8. Create a new li element.
9. Give the li the text “four”.
10. Append the li to the ul element.
11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
12. Remove the div with a class of footer*/

// 1. Select the section with an id of container without using querySelector.

document.getElementById("container");

// 2. Select the section with an id of container using querySelector.

document.querySelector("#container");

// 3. Select all of the list items with a class of “second”.

document.querySelectorAll(".second");

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.

document.querySelectorAll("ol .third");

// 5. Give the section with an id of container the text “Hello!”.

const containerId = document.querySelector("#container");
containerId.innertext = "Hello!";

// 6. Add the class main to the div with a class of footer.
const footerClass = document.querySelector(".footer");
footerClass.classList.add("main");

// 7. Remove the class main on the div with a class of footer.
footerClass.classList.remove("main");

// 8. Create a new li element.
const newLiElement = document.createElement("li");

// 9. Give the li the text “four”.
newLiElement.innerText = "four";

// 10. Append the li to the ul element.
const ulElement = document.querySelector("ul");
ulElement.appendChild(newLiElement);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const allLisInOl = document.querySelectorAll("ol li")
for(let i = 0; i < allLisInOl.length; i = i + 1){
  allLisInOl[i].style.backgroundColor = "green";
}

// 12. Remove the div with a class of footer
footerClass.remove();