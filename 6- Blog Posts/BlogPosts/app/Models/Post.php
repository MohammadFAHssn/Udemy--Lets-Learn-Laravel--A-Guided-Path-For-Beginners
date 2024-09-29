<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'body', 'user_id'];

    // you can name it anything
    public function user()
    {
        // return a relationship
        return $this->belongsTo(User::class, 'user_id');
        // tozihat dar paein
        // the second argument is the column name that the relationship is powered by
    }
}

class simple
{
    public $k = 9;

    public function change($val)
    {
        $this->k = $val;
    }
}

$obj = new simple();

$obj->change(8);
// rahe digei be nazaret mirese ke $k ro avaz kon
