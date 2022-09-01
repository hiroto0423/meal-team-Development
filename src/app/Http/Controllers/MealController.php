<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meal;
use DB;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\MealCreate;

class MealController extends Controller
{
  public function mealpost (MealCreate $request, Meal $meal) {

    $validated = $request;

    // インサートと同時にIDを取得する
    $id = DB::table('meals')->insertGetId([
      'name' => $validated["meal_name"],
      //'img' =>123,
      'Ingredients_Memo' => $validated["meal_ingredients"],
      'way' => $validated["meal_way"],
      'cost' => $validated["meal_cost"],
      //'categoly_id' => 1,
      'difficulty' =>$validated["meal_diffyculty"],
      'satiety' => $validated["meal_satiety"]
    ]);
    // Log::debug($id);
    $array = [
        'meal_id' => $id
    ];
    //echo json_encode($array);
    return response()->json($array);
  }

    public function mealread(Meal $meal){
        $meal_id = $meal->id;
        $item = \App\Meal::find($meal_id);
         return response()->json($item);
    }


}
