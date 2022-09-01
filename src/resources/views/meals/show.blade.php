<!DOCTYPE html>
<html lang="{{ str_replace('', '-', app()->getLocale()) }}">
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

    <div class="meal-wrapper">
        <div class="name-block">
            <p class="meal-name" id="meal_name"></p>
            <div class="infomation">
                <div class="cost orange_column">
                    <p>コスト</p>
                    <p id="meal_cost"></p>
                </div>
                <div class="satiety orange_column">
                    <p>満腹度</p>
                    <p id="meal_satiety"></p>
                </div>
                <div class="diffyculty orange_column">
                    <p>難易度</p>
                    <p id="meal_difficulty"></p>
                </div>
            </div>
        </div>
        <div class="memo">
            <!-- <img class="ao" src="/image/chicken.png" alt="" width="440" height="440"> -->
            <div class="ao" width="440" height="440"></div>
            <div class="memonoNakami">
                <h2>材料メモ</h2>
                <p id="meal_Ingredients_Memo"></p>
                <h2>作り方</h2>
                <p id="meal_way"></p>
            </div>
        </div>
        <button type="button"id="meal_delete">消去</button>
    </div>
  <script src="../js/meal_read.js"></script>
  <script src='../js/meal_delete.js'></script>
</body>

