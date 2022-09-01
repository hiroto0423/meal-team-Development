// ルートURLの取得
var root_url = location.protocol + '//' + location.hostname;
if(!location.port == '') {
  console.log('set url');
  root_url = root_url + ':' + location.port
}

// エンドポイントの取得
const endPoint ='api/meals';

window.onload = function() {

    // http:// ~ /meals/xx xxの部分の取得
    var param_id = location.pathname.split('/').pop();

        fetch(root_url + '/' + endPoint + '/' + param_id, {
            method: 'GET',
        }).then((response) => {
            if(!response.ok) {
                console.log('Read error!');
                throw new Error('error');
            } ;
            console.log('read ok');
            return response.json();
            console.log(response.json())
        }).then((response)  => {

            //responseで返ってきたDBのレコードデータを取得
            var meal_name = response['name']
            var meal_Ingredients_Memo = response['Ingredients_Memo']
            var meal_way = response['way']
            var meal_cost = response['cost']
            var meal_satiety = response['satiety']
            var meal_difficulty = response['difficulty']
            //Element オブジェクトを取得
            var meal_read_name = document.getElementById('meal_name');
            var meal_read_Ingredients_Memo = document.getElementById('meal_Ingredients_Memo');
            var meal_read_way = document.getElementById('meal_way');
            var meal_read_cost = document.getElementById('meal_cost');
            var meal_read_satiety = document.getElementById('meal_satiety');
            var meal_read_difficulty = document.getElementById('meal_difficulty');
             //HTMLの要素の中身を変更
            meal_read_name.innerHTML = meal_name;
            meal_read_Ingredients_Memo.innerHTML = meal_Ingredients_Memo;
            meal_read_way.innerHTML = meal_way;
            meal_read_cost.innerHTML = meal_cost;
            meal_read_satiety.innerHTML = meal_satiety;
            meal_read_difficulty.innerHTML = meal_difficulty;

            // 画像を挿入
            const meal_read_image = document.getElementById('meal_image_area');
            meal_read_image.innerHTML = `<img src="${response['image']}" width="100%" />`

        }).catch((error) => {
            console.log(error);
            window.location.href = root_url + '/register' ;
        });


}
