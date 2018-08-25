<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaskModel extends Model
{
    protected $table = 'task';
    public $timestamps = false;
    protected $fillable = ['created_at'];
    protected $dateFormat = 'UTC';
}
