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
      <h1>レシピ一覧</h1>
      <div class="index-container" id="addListBox">

        <div class="item-wrapper">
          <div class="image-wrapper">
            <div class="tmp-image">ここに画像が入る</div>
          </div>
          <div class="meal-name-block">
            <a href="#" class="tmp-name" id="meal_url">料理名</a>
          </div>
        </div>

      </div>
    </div>
      <script src="js/meal_index.js"></script>
    </body>
</html>
