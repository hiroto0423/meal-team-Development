<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('testpost' , 'TestController@index');


Route::get('testget', function(){
  return 1;
});

Route::post('mealpost' ,'MealController@mealpost');

Route::get('meals/{meal}','MealController@mealread');

Route::get('mealindex','MealController@mealindex');
Route::delete('deletemeal/{meal}','MealController@mealdelete');
Route::put('editmeals/{meal}/edit','MealController@mealedit');
Route::get('editmeals/{meal}/get','MealController@edit_meal_get');
Route::get('random_meal','MealController@random_meal_get');
