// テキストを読み上げる
// 特別なライブラリとかは使ってない。標準JSだけで可能。
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
	//SpeechSynthesisUtteranceは用意されているクラス
	let convert = new SpeechSynthesisUtterance(input.value);
	//読み上げ速度を変更0～2の間（あまり変わらん気がするな）
	convert.pitch = 0.1;
	//音量を変更0～2の間
	convert.volume = 1.5;
	speechSynthesis.speak(convert);
})