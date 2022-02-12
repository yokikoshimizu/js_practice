//複数のプロパティを持つのがオブジェクト
const taro = {
    name: "Taro",
    age: 19,
    sex: "male",
};
const hanako = {
    name: "Hanako",
    age: 24,
    sex: "female",
};
console.log(taro, hanako);

//複数の値を格納するのが配列
const users = ["Taro", "Hanako", "Jiro"];
const classList = ["A", "B", "c"];

    users.map((user) => {
        console.log(user);
    });
    classList.map((a) => {
        console.log(a);
    });
//配列に何の値もない場合はundefindと出る


// for(let step =0; step <5; step++ ) 
// console.log("Hello");

// const uncoA = 2
// const uncoB = 3
// console.log(uncoA + uncoB)

// const testPoint = 56
// if( testPoint >= 40){
//     console.log("OK")
// }
// else{
//     console.log("NG")
// }