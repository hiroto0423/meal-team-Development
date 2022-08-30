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
   for(var i = 0 ; i<response.length ; i++){
    // console.log(response[i].id);
    // console.log(response[i].name);
    var list = document.createElement('a');
    list.setAttribute("id", response[i].id);
    list.setAttribute("href", url + 'meals/' + response[i].id);
    list.setAttribute("class", 'meal-name');
    list.innerHTML = response[i].name;
    var parent = document.getElementById('addlistBox');
    parent.appendChild(list);
   };
}).catch((response) => {
    console.log(error);
});
};
