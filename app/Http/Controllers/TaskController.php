<?php

namespace App\Http\Controllers;

use App\TaskModel;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function indexController()
    {
        $task = TaskModel::all();
        return response()->json($task);
    }

    public function createController(Request $request)
    {
        $task = new TaskModel();
        $task->code = str_random(6);
        $task->long = $request->long;
        $task->created_at = date('Y-m-d H:i:s');
        $task->save();

        return response()->json($task);
    }

    public function countClicked($id)
    {
        TaskModel::where('id', $id)->update(['count' => \DB::raw('count + 1')]);

        $task = TaskModel::all();

        return response()->json($task);
    }


    public function deleteTaskController($id)
    {
        TaskModel::destroy($id);
        $task = TaskModel::all();

        return response()->json($task);
    }
}
