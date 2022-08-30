<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meal;
use DB;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\MealCreate;

class MealController extends Controller
{
    public function mealpost (Mealcreate $request,Meal $meal) {
        $validated = $request->validated();
        // インサートと同時にIDを取得する
         $id = DB::table('meals')->insertGetId([
            'name' => $validated["名前"],
            //'img' =>123,
            'Ingredients_Memo' => $validated["メモ"],
            'way' => $validated["作り方"],
            'cost' => $validated["コスト"],
            //'categoly_id' => 1,
            'difficulty' =>$validated["難易度"],
            'satiety' => $validated["満足度"]            
        ]);
        $array = [
            'meal_id' => $id
        ];
       return response()->json($array);
    }

    public function mealread(Request $request){
        $item = \App\Meal::find($request[0]);
        return response()->json($item);
    }
    

}
