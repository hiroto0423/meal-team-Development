// ルートURLの取得
var root_url = location.protocol + '//' + location.hostname;
if(!location.port == '') {
  console.log('set url');
  root_url = root_url + ':' + location.port
}

// エンドポイントの取得
const endPoint ='api/mealindex';

window.onload = function(){
  console.log('open_index');
  fetch(root_url + '/' + endPoint, {
    method: 'GET',
  }).then((response) => {
    if(!response.ok) {
        console.log('Create error!');
        throw new Error('error');
    } ;
    console.log('response ok');
    return response.json();
  }).then((response)  => {

    // 料理一覧を表示させる繰り返し処理
    for(var i = 0; i < response.length; i++){
      // responseされたidを取得。(詳細ページURLの作成、appendChildメソッドに必要)
      meal_id = response[i].id

      // 必要なHTML要素を定義
      var itemWrapper  = document.createElement('div');itemWrapper.setAttribute('class', 'item-wrapper');
      itemWrapper.setAttribute('id', 'item_wrapper-' + meal_id);
      var imageWrapper = document.createElement('div');imageWrapper.setAttribute('class', 'image-wrapper');
      imageWrapper.setAttribute('id', 'image_wrapper-' + meal_id);
      var tmpImage = document.createElement('div');
      tmpImage.setAttribute('class', 'tem-image');
      tmpImage.setAttribute('id', 'tmp_image-' + meal_id);
      var mealNameBlock = document.createElement('div');mealNameBlock.setAttribute('class', 'meal-name-block');
      mealNameBlock.setAttribute('id', 'meal_name_block-' + meal_id);
      var mealUrl = document.createElement('a');
      mealUrl.setAttribute('href', root_url + '/meals/' + meal_id);
      mealUrl.setAttribute('id', 'meal_url');
      mealUrl.innerHTML = response[i].name

      // HTML要素を生成
      document.getElementById('addListBox').appendChild(itemWrapper);
      document.getElementById('item_wrapper-' + meal_id).appendChild(imageWrapper);
      document.getElementById('item_wrapper-' + meal_id).appendChild(mealNameBlock);
      document.getElementById('image_wrapper-' + meal_id).appendChild(tmpImage);
      document.getElementById('meal_name_block-' + meal_id).appendChild(mealUrl);
    }
  }).catch((error) => {
    console.log(error);
  });
}
