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

    public function mealdelete(Meal $meal){
        $meal->delete();
        return response()->json();
    }
    
    public function mealindex(){
      $items = DB::table('meals')->get();
      return response()->json($items);
    }

    public function mealedit (Request $request,Meal $meal){
      DB::table('meals')->update([
      'name' => $request["meal_name"],
      //'img' =>123,
      'Ingredients_Memo' => $request["meal_ingredients"],
      'way' => $request["meal_way"],
      'cost' => $request["meal_cost"],
      //'categoly_id' => 1,
      'difficulty' =>$request["meal_diffyculty"],
      'satiety' => $request["meal_satiety"]
    ]);
      return response()->json();
    }
    public function edit_meal_get (Meal $meal){
      $item = \App\Meal::find($meal->id);
      return response()->json($item);
    }

    public function random_meal_get (Meal $meal){
      //ランダムで１件取得
      $item = \App\Meal::inRandomOrder()->take(1)->get();
      return response()->json($item);
    }
}
