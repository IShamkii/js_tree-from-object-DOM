"use strict";
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
document.body.setAttribute("id", "tree");
const tree = document.querySelector("#tree");
function createTree(element, data) {
    const list = document.createElement("ul");
    for(const key in data){
        const li = document.createElement("li");
        li.textContent = key;
        list.append(li);
        if (Object.values(data[key]).length > 0) createTree(li, data[key]);
    }
    element.append(list);
}
createTree(tree, food);

//# sourceMappingURL=index.f75de5e1.js.map
