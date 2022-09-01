const deleteBtn = document.getElementById('meal_delete');
const urll = 'http://localhost:9000/';

const endpoint_mealdelete ='api/deletemeal/';
const deleteMeal = () => {
    var result = location.href.split('/');
    var id = result[result.length - 1];  
    fetch(urll+endpoint_mealdelete + id, {
        method: 'DELETE',
    }).then((response) => {
        if(!response.ok) {
            console.log('Delete error!');
            throw new Error('消去できませんでした');
        } ;
        console.log('delete ok');
        window.location.href = urll + 'meals/';
    }).catch((error) => {
        console.log(error);
        window.location.href = urll + 'meals/';
    });
};
const deleteconfirm = () => {
  if (window.confirm('消去すると復元できません。\n本当に消去しますか？')) {
    deleteMeal();
  }
};
deleteBtn.addEventListener('click', deleteconfirm, false);
