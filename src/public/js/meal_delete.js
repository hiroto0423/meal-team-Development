const deleteBtn = document.getElementById('meal_delete');
// ルートURLの取得
var root_url = location.protocol + '//' + location.hostname;
if(!location.port == '') {
  console.log('set url');
  root_url = root_url + ':' + location.port
}
// エンドポイントの取得
const endPoint_Delete = 'api/deletemeal/';
const deleteMeal = () => {

    // http:// ~ /meals/xx xxの部分の取得
    var param_id = location.pathname.split('/').pop();

    fetch(root_url + '/' + endPoint_Delete + param_id, {
        method: 'DELETE',
    }).then((response) => {
        if(!response.ok) {
            console.log('Delete error!');
            throw new Error('消去できませんでした');
        } ;
        console.log('delete ok');
        window.location.href = root_url + '/meals';
    }).catch((error) => {
        console.log(error);
        window.location.href = root_url + '/meals';
    });
};
const deleteconfirm = () => {
  if (window.confirm('消去すると復元できません。\n本当に消去しますか？')) {
    deleteMeal();
  }
};
deleteBtn.addEventListener('click', deleteconfirm, false);
