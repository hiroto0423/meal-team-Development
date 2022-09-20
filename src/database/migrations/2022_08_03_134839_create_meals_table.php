<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMealsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name',50);
            //$table->binary('img');
            $table->string('Ingredients_Memo',200);
            $table->string('way',500);
            $table->integer('cost');
            //$table->integer('categoly_id')->unsigned();
            $table->string('difficulty');
            $table->string('satiety');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('meals');
    }
}
