<?php

namespace App\Http\Controllers;

use App\ProfileModel;
use App\TaskModel;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function getProfileController()
    {

        $search = ProfileModel::all();

        return response()->json($search);
    }


    public function postProfileController(Request $request, $id)
    {
        $task = TaskModel::find($id);

        $country = \Location::get($request->ip());
        $profile = new ProfileModel();
        $profile->task_id = $task->id;
        $profile->ip = $request->ip();
        $profile->country = $country->countryName;
        $profile->browser = $request->header('User-Agent');
        $profile->save();

        $search = ProfileModel::all();

        return response()->json($search);
    }
}
