//変数
let unco = 'Hello';
// unco = 'Hello2';

//定数
const bigUnco = 'Hello!!';

const superUnco = ['a', 'b', 'c' ];

console.log(superUnco[1]);

//ループ分
// let index = 0;
// while(index < superUnco.length){
//     //繰り返したい命令
//     console.log(index);
//     index++;
// }

//if else
// if(superUnco.length > 4){
//     console.log('うんこ');
// }
// else{
//     console.log('うんち');
// }

//関数
const test = (arg) => {
    //実行したい内容
    if(superUnco.length > arg){
        console.log('うんこ');
    }
    else{
        console.log('うんち');
    }
};

//引数
// test(2);
// test(4);

//オブジェクト
const unco2 = {
    color: 'brown',
    size: 'large',
    cleanUnco: () => {
        console.log('Hello');
    }
};
// console.log(unco2.cleanUnco())

// window.alert('keikoku');

//event:アクションをしたタイミングで何かをしたい時に使う
console.log(document.getElementsByTagName('button')[2].addEventListener('click', () => {
    window.alert('keikoku');
}));
