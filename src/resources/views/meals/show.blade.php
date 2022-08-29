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
            <p class="meal-name">チキンステーキ</p>
            <div class="infomation">
                <div class="cost orange_column">
                    <p>コスト</p>
                    <p id="">500円</p>
                </div>
                <div class="satiety orange_column">
                    <p>満腹度</p>
                    <p id="">がっつり</p>
                </div>
                <div class="diffyculty orange_column">
                    <p>難易度</p>
                    <p id="">レベル2</p>
                </div>
            </div>
        </div>
        <div class="memo">
            <img class="ao" src="/image/chicken.png" alt="" width="440" height="440">
            <div class="memonoNakami">
                <h2>材料メモ</h2>
                <p id="">ここに材料メモが入る</p>
                <h2>作り方</h2>
                <p id="">ここに作り方が入る</p>
            </div>
        </div>
    </div>
</body>
</html>
