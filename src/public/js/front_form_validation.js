window.onload = function() {
  console.log('loading validation file')
  // 画面オブジェクト
  const btnSubmit        = document.getElementById('meal_create');
  const inputMealName    = document.getElementById('inputMealName');
  const inputIngredients = document.getElementById('inputIngredients');
  const inputWay         = document.getElementById('inputWay');
  const inputCost        = document.getElementById('inputCost');

  btnSubmit.addEventListener('click', function() {
    //　エラーメッセージを格納する配列を定義
    let message = [];
    // 数値のみをマッチさせる正規表現
    const REGEX = /[0-9]/
    // フォームの入力値チェック

    // 画像添付に関するバリデーションは料理登録画面修正時にまた別途行います。

    if(inputMealName.value == "") {
      message.push("料理名が未入力です。");
    }
    if(inputIngredients.value == "") {
      message.push("材料メモが未入力です。")
    }
    if(inputWay.value == "") {
      message.push("作り方が未入力です。")
    }
    if(inputCost.value == "") {
      message.push("コストが未入力です。")
    }
    if(!REGEX.test(inputCost.value)) {
      message.push("コストには数値を入力してください。")
    }

    if(message.length > 0) {
      console.log(message.length);
      alert(message.join('\n'));   // バリデーションメッセージの表示
      return;
    }
  })
}
