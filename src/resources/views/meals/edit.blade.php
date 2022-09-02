!<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="/css/style.css" >
    </head>
    <body>
      <div class="header">
        <div class="header-logo">男の自炊アプリ</div>
      <div class="header-list">
          <button><a href="/register">レシピ登録</a></button>
          <button><a href="/meals">料理一覧</a></button>
          <button><a href="/categoly">カテゴリー</a></button>
      </div>
    </div>
      <div class="main">
        <div class="meal-register">
          <form action="/register" method="PUT" id='form' name="meal_form">

            <h1>料理編集</h1>

            <!-- 画像投稿機能は後ほど実装します -->

            <div class="meal-name">
              <label>料理名</label>
              <input type="text" id='meal_name'placeholder="オムライス" name="meal_name">
            </div>

            <div class="meal-img">
              <label>画像</label>
              <input type="file" id="uploadImage" onchange="changeImageToBase64()">
              <input type="hidden" id="base64text" name="meal_image">
              <div id="uploadImageArea"></div>
            </div>

            <div class="meal-Ingredients_Memo">
              <label>材料メモ</label>
              <textarea type="text" id='meal_Ingredients_Memo'placeholder="卵二個・牛乳" name="meal_ingredients"></textarea>
            </div>

            <div class="meal-way">
              <label>作り方</label>
              <textarea id='meal_way' placeholder="卵を割って～～～" name="meal_way"></textarea>
            </div>

            <div class="meal-cost">
              <label>コスト</label>
              <input type="number" id='meal_cost'placeholder="500" name="meal_cost">
            </div>

            <div class="meal-diffyculty">
              <label>難易度</label>
              <input type="radio"name="meal_diffyculty"value=1 checked> レベル1
              <input type="radio"name="meal_diffyculty"value=2> レベル２
              <input type="radio"name="meal_diffyculty"value=3> レベル3
            </div>

            <div class="meal-satiety">
              <label>満腹度</label>
              <input type="radio"name="meal_satiety"value=1 checked> ちょっと食べたい
              <input type="radio"name="meal_satiety"value=2> ちょうどいい
              <input type="radio"name="meal_satiety"value=3> がっつり
            </div>

            <input type="button" value="登録する" class="postBtn" id="meal_create" name="btn_submit">

          </form>
        </div>
      </div>
      <script src="../../js/meal_edit.js"></script>

      <script>
      function changeImageToBase64() {
        const uploadImage = document.querySelector('#uploadImage')
        const file = uploadImage.files[0]

        const reader = new FileReader()
        reader.onload = (event) => {
          const base64Text = event.currentTarget.result;
          // const base64Text_nonMIME = event.currentTarget.result.split(',')[1];
          console.log(base64Text);

          document.querySelector('#base64text').innerHTML = base64Text;
          document.querySelector('#uploadImageArea').innerHTML = `<img src="${base64Text}" width="100%" />`
        }
        reader.readAsDataURL(file)
      }
      </script>
    </body>
</html>
