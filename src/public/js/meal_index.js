const url = 'http://localhost:9000/';
const endpoint_mealindex ='api/mealindex';

window.onload = function(){
//   console.log('open_index');

//   fetch(url+endpoint_mealindex, {
//     method: 'GET',
// }).then((response) => {
//     if(!response.ok) {
//         console.log('Create error!');
//         throw new Error('error');
//     } ;
//     console.log('response ok');
//     return response.json();
// }).then((response)  => {

  // 料理一覧を表示させる繰り返し処理

  for(var i = 0 ; i < 10 ; i++){

    // 必要なHTML要素を定義
    var itemWrapper  = document.createElement('div');itemWrapper.setAttribute('class', 'item-wrapper');
    itemWrapper.setAttribute('id', 'item_wrapper-' + i);

    var imageWrapper = document.createElement('div');imageWrapper.setAttribute('class', 'image-wrapper');
    imageWrapper.setAttribute('id', 'image_wrapper-' + i);

    var tmpImage = document.createElement('div');
    tmpImage.setAttribute('class', 'tem-image');
    tmpImage.setAttribute('id', 'tmp_image-' + i);

    var mealNameBlock = document.createElement('div');mealNameBlock.setAttribute('class', 'meal-name-block');
    mealNameBlock.setAttribute('id', 'meal_name_block-' + i);

    var mealUrl = document.createElement('a');
    mealUrl.setAttribute('href', url + 'meals/' + i);
    mealUrl.setAttribute('id', 'meal_url');
    mealUrl.innerHTML = '料理-' + i

    // HTML要素を生成

    document.getElementById('addListBox').appendChild(itemWrapper);
    document.getElementById('item_wrapper-' + i).appendChild(imageWrapper);
    document.getElementById('item_wrapper-' + i).appendChild(mealNameBlock);
    document.getElementById('image_wrapper-' + i).appendChild(tmpImage);
    document.getElementById('meal_name_block-' + i).appendChild(mealUrl);
  }
}




    // var list = document.createElement('a');

    // // list.setAttribute("id", 'meal_url-' + response[i].id);
    // list.setAttribute("id", 'meal_url');
    // list.setAttribute("href", url + 'meals/' + response[i].id);
    // list.setAttribute("class", 'meal-name');

    // list.innerHTML = response[i].name;

    // var parent = document.getElementById('addlistBox');
    // parent.appendChild(list);
  // };
// }).catch((response) => {
//     console.log(error);
// });
// };
