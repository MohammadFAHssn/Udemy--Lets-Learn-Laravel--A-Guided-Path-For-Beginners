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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title');
            $table->longText('body');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            // So Laravel will see this and it will know that what comes before the underscore
            // So "user" that's the name of the model in the table that we're trying to look at
            // And then whatever comes after the underscore that's the name of the column or the field
            // constrained: And what this is going to do is Laravel won't even let you create a blog post if the
            // author value that you provide here doesn't actually exist in the user's table
            // onDelete('cascade'): let's say if Brad had ten blog posts,
            // but then you deleted the Brad user account,
            // you could have that delete action cascade so that when you delete the Brad user,
            // all ten of his blog posts get deleted automatically.
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};