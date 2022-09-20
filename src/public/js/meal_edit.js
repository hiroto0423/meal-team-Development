const btnSubmit = document.meal_form.meal_create;
// ルートURLの取得
var root_url = location.protocol + '//' + location.hostname;
root_url += ':9000'

// URLに含まれるidの取得
var param_id = ''
const urlPathList = location.pathname.split('/')

// http:// ~ /meals/:id/edit の場合のid取得
if(urlPathList.length > 3) {
  param_id = urlPathList.slice(-2)[0];
}else{
  param_id = urlPathList.slice(-1)[0];
};

window.onload = function(){

  console.log('load meal_edit')

  fetch(root_url + '/api/editmeals/' + param_id +'/get',  {
    method: 'GET',
    }).then((response) => {
        if(!response.ok) {
          console.log('error!');
          throw new Error('error');
        } ;
        console.log('get ok');
        return response.json();
    }).then((response)  => {

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
      // var meal_read_satiety = document.getElementByName('meal_satiety');
      // console.log(meal_read_satiety);
      // var meal_read_difficulty = document.getElementsByName('meal_difficulty');
      // console.log(meal_read_difficulty)

      meal_read_name.setAttribute("value",meal_name);
      meal_read_Ingredients_Memo.value = response['Ingredients_Memo'];
      meal_read_way.value = response['way'];
      meal_read_cost.setAttribute("value",meal_cost);
      // meal_read_satiety[response['satiety']].checked = true;
      // meal_read_difficulty[response['dificulty']] = true;

      // 画像をbase64形式にエンコードした文字列を値に設定
      var meal_read_image = document.meal_form.meal_image
      meal_read_image.value = response['image']

      // 画像のプレビュー
      var imagePreviewArea = document.getElementById('image');
      imagePreviewArea.src = response['image']

    }).catch((error) => {
        console.log(error);
    });
}

function callMealEditApi() {
  const mealForm = document.getElementById('form');
  const formData = new FormData(mealForm);

  // 画像をbase64形式にエンコードした文字列の取得
  const base64_value = document.meal_form.meal_image;
  // formData の meal_imageキーにbase64形式の値をセット
  formData.set('meal_image', base64_value.value);

  const obj = Object.fromEntries(formData);

  fetch(root_url + '/api/editmeals/' + param_id + '/edit',  {
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
      window.location.href = root_url + '/meals/'+ param_id ;
    }).catch((error) => {
        console.log(error);
    });
}

function clickUpdateSubmit() {
  const flag = formCreateAndUpdateValidation()
  if(flag) {
    callMealEditApi()
  }
}
