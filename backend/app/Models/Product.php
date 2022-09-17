<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['name','description','console', 'tag','price', 'picture'];

    public function categories(){
        return $this->belongsTo(Category::class);
    }
}
