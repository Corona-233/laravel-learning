<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('message');
            $table->timestamps();
            $table->string('name')->nullable;
            $table->string('sex')->nullable;
            $table->string('outlook')->nullable;
            $table->string('classs')->nullable;
            $table->string('ethnic')->nullable;
            $table->string('duty')->nullable;
            $table->string('phone')->nullable;
            $table->string('hobby')->nullable;
            $table->string('synopsis')->nullable;
            $table->string('assumption')->nullable;
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forms');
    }
};
