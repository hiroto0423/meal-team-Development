<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class MealCreate extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
      return true;
  }
  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'meal_name' => 'required|max:50',
      'meal_image' => 'required',
      'meal_ingredients' => 'required|max:200',
      'meal_way' => 'required|max:500',
      'meal_cost' => 'required|integer',
      'meal_diffyculty' => 'required',
      'meal_satiety' => 'required',
    ];
  }
  // public function messages()
  // {
  //     return [
  //         '名前.required' => '料理名を入力してください。',
  //     ];
  // }
}
