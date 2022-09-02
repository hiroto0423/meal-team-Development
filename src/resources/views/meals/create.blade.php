<!DOCTYPE html>
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
        <h1>料理登録</h1>
        <div class="meal-register">
          <form action="/register" method="POST" id='form' name="meal_form">
            <div class="meal-name">
              <label>料理名</label>
              <input type="text" placeholder="オムライス" name="meal_name">
            </div>

            <div class="meal-img">
              <label>画像</label>
              <input type="file" accept="image/*" id="fileselect">
              <input type="hidden" id="base64text" name="meal_image">
              <img id="image">
            </div>

            <div class="meal-Ingredients_Memo">
              <label>材料メモ</label>
              <textarea type="text" placeholder="卵二個・牛乳" name="meal_ingredients"></textarea>
            </div>

            <div class="meal-way">
              <label>作り方</label>
              <textarea placeholder="卵を割って～～～" name="meal_way"></textarea>
            </div>

            <div class="meal-cost">
              <label>コスト</label>
              <input type="number" placeholder="500" name="meal_cost">
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
        <canvas
                width="480"
                height="320"
                id="canvasresize"
                style="visibility: hidden;"
        ></canvas>
      </div>
      <script src="js/front_form_validation.js"></script>
      <script src="js/meal_card.js"></script>
      <script src="js/image_control.js"></script>
    </body>
</html>
