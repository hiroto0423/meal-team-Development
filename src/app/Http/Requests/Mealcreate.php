<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Mealcreate extends FormRequest
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
            '名前' => 'required|max:50',
            'メモ' => 'required|max:200',
            '作り方' => 'required|max:500',
            'コスト' => 'required|integer',
            '難易度' => 'required',
            '満足度' => 'required',

        ];
    }

    // public function messages()
    // {
    //     return [
    //         '名前.required' => '料理名を入力してください。',
    //     ];
    // }
}
