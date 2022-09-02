const btnSubmit = document.meal_form.meal_create;

// ルートURLの取得
var root_url = location.protocol + '//' + location.hostname;
if(!location.port == '') {
  console.log('set url');
  root_url = root_url + ':' + location.port
}
// エンドポイントの取得
const endPoint = 'api/mealpost';

// 料理登録API
function callMealCteateApi() {
  const mealForm = document.getElementById('form');
  const formData = new FormData(mealForm);

  // 画像をbase64形式にエンコードした文字列の取得
  const base64_value = document.meal_form.meal_image.innerText;

  // formData の meal_imageキーにbase64形式の値をセット
  formData.set('meal_image', base64_value);

  const obj = Object.fromEntries(formData);

  fetch(root_url + '/' + endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    }).then((response) => {
        if(!response.ok) {
          console.log('Create error!');
          throw new Error('error');
        } ;
        console.log('create ok');
        return response.json();
    }).then((response)  => {
      console.log('redirect');
      window.location.href = root_url + '/meals/'+ response["meal_id"];
    }).catch((error) => {
        console.log(error);
    });
}

btnSubmit.addEventListener('click', callMealCteateApi, false)
