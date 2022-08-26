//const postMeal = document.querySelector('.postmeal');
const postBtn = document.getElementById('meal_create');
console.log(postBtn);
const url = 'http://localhost:9000/';
const endpoint = 'api/testpost';
const endpoint_mealcreate ='api/mealpost';
const endpoint_mealread ='api/mealread';

const createMeal = () => {
    const f1 = document.getElementById('form');
    const fd = new FormData(f1)
    const obj = Object.fromEntries(fd)
    
    fetch(url+endpoint_mealcreate, {
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
       window.location.href = url + 'meals/'+ response["meal_id"]  ;
    }).catch((response) => {
        console.log(error);
    });
};

postBtn.addEventListener('click', createMeal, false);


const readMeal = () => {
    
    fetch(url+endpoint_mealread, {
        
    })
}





