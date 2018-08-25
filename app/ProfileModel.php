<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProfileModel extends Model
{
    protected $table = 'profile';
    public $timestamps = false;


    public function task()
    {
        return $this->belongsTo('App\TaskModel');
    }
}
