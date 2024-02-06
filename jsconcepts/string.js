let str = "geeks"

let res = [];
for(let i=0; i<str.length;i++){
res.push(str.charCodeAt(i)-2)
}
console.log(res)
for(let i=0; i<res.length;i++){
    console.log(String.fromCharCode(res[i]))
}

// console.log(res)

 // 103