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

    // $request["meal_image"] = base64_encode(file_get_contents($request->image));

    // インサートと同時にIDを取得する
    $id = DB::table('meals')->insertGetId([
      'name' => $validated["meal_name"],
      'image' => $validated["meal_image"],
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
}
