// object destructuring

const obj = {
    name :"Tom",
    age: "20",
    place:"UK"
};
function nwe(){
    const{name,...others}=obj;
    console.log(name,others)
}
nwe();

// array destructuring with spread operator...
const marks=[52,30,90,3];
function mark(){
    const [a, b,...others]=marks;
    console.log(a,b,others)
}
mark();