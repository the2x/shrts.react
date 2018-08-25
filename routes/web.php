<?php

Route::get('/', function () {
    return view('welcome');
});


//Task processing
Route::post('/create', 'TaskController@createController');

Route::get('/task', 'TaskController@indexController');

Route::post('/task/{id}', 'TaskController@countClicked');

Route::delete('/task/{id}', 'TaskController@deleteTaskController');


//User processing
Route::get('/task/info', 'ProfileController@getProfileController');

Route::post('/task/{id}/info', 'ProfileController@postProfileController');