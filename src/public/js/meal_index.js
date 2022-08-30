const url = 'http://localhost:9000/';
const endpoint_mealindex ='api/mealindex';

window.onload = function(){
  console.log('open_index');

  fetch(url+endpoint_mealindex, {
    method: 'GET',
}).then((response) => {
    if(!response.ok) {
        console.log('Create error!');
        throw new Error('error');
    } ;
    console.log('response ok');
    return response.json();
}).then((response)  => {
   //console.log(response);
   //const index_array = [];
  //  index_data = response;
  //  console.log(index_data);
    //index_array = JSON.parse(response);
   //console.log(index_array);
   for(var i = 0 ; i<response.length ; i++){
    console.log(response[i].id);
    console.log(response[i].name);
   };

  // 追加する要素を生成する
  var input = document.createElement('input');
  input.type = 'text';
  var list = document.createElement('li')

  // 親要素を取得
  var parent = document.getElementById('addTextBox');

  // 親要素の末尾に追加する
  parent.appendChild(input);
}).catch((response) => {
    console.log(error);
});
};
