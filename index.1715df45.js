document.body.setAttribute("id","tree"),function e(t,n){var r=document.createElement("ul");for(var a in n){var c=document.createElement("li");c.textContent=a,r.append(c),Object.values(n[a]).length>0&&e(c,n[a])}t.append(r)}(document.querySelector("#tree"),{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.1715df45.js.map
