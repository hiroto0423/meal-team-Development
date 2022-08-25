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
        Log::debug($validated);
         $meal -> create([
            'name' => $validated["名前"],
            //'img' =>123,
            'Ingredients_Memo' => $validated["メモ"],
            'way' => $validated["作り方"],
            'cost' => $validated["コスト"],
            //'categoly_id' => 1,
            'difficulty' =>$validated["難易度"],
            'satiety' => $validated["満足度"]
        ]);

    //     $item = DB::table('meals')->where('name', $validated->name)->get();
        
        
    //     $array = [
    //         'tokyo' => 3
    //     ];
    //    echo json_encode($array);
    //    return response()->json($array);
    }

    

}
