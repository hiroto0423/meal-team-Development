<?php

use Illuminate\Http\Request;

// meals API

// create
Route::post('mealpost' ,'MealController@mealpost');

// show
Route::get('meals/{meal}','MealController@mealread');

// index
Route::get('mealindex','MealController@mealindex');

// edit
Route::get('editmeals/{meal}/get','MealController@edit_meal_get');

// update
Route::put('editmeals/{meal}/edit','MealController@mealedit');

// delete
Route::delete('deletemeal/{meal}','MealController@mealdelete');
