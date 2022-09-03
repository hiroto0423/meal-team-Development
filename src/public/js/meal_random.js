// ルートURLの取得
var root_url = location.protocol + '//' + location.hostname;
if(!location.port == '') {
  console.log('set url');
  root_url = root_url + ':' + location.port
}

const btnSubmit = document.getElementById('random_button');
//mealsテーブルからランダムに一つデータを取得
function CallRandomMealGetApi(){
  fetch(root_url + '/api/random_meal', {
    method: 'GET',
  }).then((response) => {
    if(!response.ok) {
        console.log('Get error!');
        throw new Error('error');
    } ;
    console.log('Get');
    return response.json();
  }).then((response)  => {
    if (response.length < 1) {
      console.log('表示するデータがありません');
      window.location.href = root_url + '/register'
      window.alert('表示するデータがありません。レシピを登録してください。');
    }else{    
      console.log(response[0].name);
      var meal__name = document.getElementById('meal_name');
      meal_name.innerHTML = response[0].name;
      meal_name.setAttribute('href', root_url + '/meals/' + response[0].id);
    }
  }).catch((error) => {
    console.log(error);
    console.log('料理を登録してください');
    window.location.href = root_url + '/register' ;

  });
}
btnSubmit.addEventListener('click',CallRandomMealGetApi , false)