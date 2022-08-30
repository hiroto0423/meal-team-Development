window.onload = function() {

  // フォームオブジェクト
  const btnSubmit        = document.meal_form.btn_submit
  const inputMealName    = document.meal_form.meal_name
  const inputIngredients = document.meal_form.meal_ingredients
  const inputWay         = document.meal_form.meal_way
  const inputCost        = document.meal_form.meal_cost

  btnSubmit.addEventListener('click', function() {
    let errorMessages = [];

    // フォームの入力値チェック

      // 画像添付に関するバリデーションは料理登録画面修正時にまた別途行います。

    if(inputMealName.value == "") {
      errorMessages.push("料理名が未入力です。");
    }

    if(inputMealName.value.length > 50) {
      errorMessages.push("料理名は50文字以内で記入してください。 現在の文字数:" + inputMealName.value.length + "文字")
    }

    if(inputIngredients.value == "") {
      errorMessages.push("材料メモが未入力です。")
    }
    if(inputIngredients.value.length > 200) {
      errorMessages.push("材料メモは200文字以内で記入してください。 現在の文字数:" + inputIngredients.value.length + "文字")
    }

    if(inputWay.value == "") {
      errorMessages.push("作り方が未入力です。")
    }
    if(inputWay.value.length > 500) {
      errorMessages.push("作り方は500文字以内で記入してください。 現在の文字数:" + inputWay.value.length + "文字")
    }

    if(inputCost.value == "") {
      errorMessages.push("コストが未入力です。")
    }

    if(!/[0-9]/.test(inputCost.value)) {
      errorMessages.push("コストには数値を入力してください。")
    }

    if(errorMessages.length > 0) {
      alert(errorMessages.join('\n'));   // バリデーションメッセージの表示
      return;
    }
  })
}
