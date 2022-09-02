console.log('load validate')

// フォームオブジェクト
const btnStartValidate = document.meal_form.btn_submit
const inputMealName    = document.meal_form.meal_name
const inputMealImage   = document.meal_form.meal_image
const inputIngredients = document.meal_form.meal_ingredients
const inputWay         = document.meal_form.meal_way
const inputCost        = document.meal_form.meal_cost

btnStartValidate.addEventListener('click', function() {
  let errorMessages = [];

  // フォームの入力値チェック

  if(inputMealName.value == "") {
    errorMessages.push("料理名が未入力です。");
  }

  if(inputMealImage.innerText == "") {
    errorMessages.push("画像が選択されていません。")
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
