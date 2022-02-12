const question = '次のうち、関西地方ではない都道府県はどれ？';
const answers = ['大阪府', '京都府', '兵庫県', '滋賀県'];
const correct = '滋賀県';

document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

$button[0].addEventListener('click', () => {
    answers[0] === correct ? window.alert('正解') : window.alert('不正解');
});
$button[1].addEventListener('click', () => {
    answers[1] === correct ? window.alert('正解') : window.alert('不正解');
});
$button[2].addEventListener('click', () => {
    answers[2] === correct ? window.alert('正解') : window.alert('不正解');
});
$button[3].addEventListener('click', () => {
    answers[3] === correct ? window.alert('正解') : window.alert('不正解');
});