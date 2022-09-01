const btnSubmit = document.meal_form.meal_create;
// ルートURLの取得
var root_url = location.protocol + '//' + location.hostname;
if(!location.port == '') {
  console.log('set url');
  root_url = root_url + ':' + location.port
}
// http:// ~ /meals/xx xxの部分の取得
var result = location.href.split('/');
var id = result[result.length - 2]; 

window.onload = function(){
  fetch(root_url + '/api/editmeals/' + id +'/get',  {
    method: 'GET',
    }).then((response) => {
        if(!response.ok) {
          console.log('error!');
          throw new Error('error');
        } ;
        console.log('get ok');
        return response.json();
    }).then((response)  => {
      //console.log(response['Ingredients_Memo']);
      //responseで返ってきたDBのレコードデータを取得
      var meal_name = response['name']
      var meal_Ingredients_Memo = response['Ingredients_Memo']
      var meal_way = response['way']
      var meal_cost = response['cost']
      // var meal_satiety = response['satiety']
      // var meal_difficulty = response['difficulty']  
         
      //Element オブジェクトを取得
      var meal_read_name = document.getElementById('meal_name');
      var meal_read_Ingredients_Memo = document.getElementById('meal_Ingredients_Memo');
      var meal_read_way = document.getElementById('meal_way');
      var meal_read_cost = document.getElementById('meal_cost');
      //var meal_read_satiety = document.getElementById('meal_satiety');
      //var meal_read_difficulty = document.getElementById('meal_difficulty'); 

      meal_read_name.setAttribute("value",meal_name);
      meal_read_Ingredients_Memo.value = response['Ingredients_Memo'];
      meal_read_way.value = response['way'];
      meal_read_cost.setAttribute("value",meal_cost);
      // meal_read_satiety.setAttribute("value",meal_satiety);
      // meal_read_difficulty.setAttribute("value",meal_difficulty);
      
      console.log('redirect');
      //window.location.href = root_url + '/editmeals/'+ id ;
    }).catch((error) => {
        console.log(error);
    });
}

function callMealEdit() {
  const mealForm = document.getElementById('form');
  const formData = new FormData(mealForm);
  const obj = Object.fromEntries(formData);
  console.log('hhh'); 
  fetch(root_url + '/api/editmeals/' + id + '/edit',  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    }).then((response) => {
        if(!response.ok) {
          console.log('Create error!');
          throw new Error('error');
        } ;
        console.log('edit ok');
        return response.json();
    }).then((response)  => {
      console.log('redirect');
      window.location.href = root_url + '/meals/'+ id ;
    }).catch((error) => {
        console.log(error);
    });
}

btnSubmit.addEventListener('click', callMealEdit, false)
