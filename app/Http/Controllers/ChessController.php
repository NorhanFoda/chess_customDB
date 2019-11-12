<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Action;

class ChessController extends Controller
{
    public function index(){       
        return view('welcome');
    }

    public function getReactions($white_move){
        $actions = Action::where('white_move', $white_move)->get();
        return $actions;
    }

    public function getAllReactions(){
        return Action::all();
        //return Action::take(500)->get();
        // return Action::where('id', '>', 89990)->get();
    }

    public function saveReaction($white_move, $black_reaction, $white_move_fen, $black_reaction_fen, $encodingStr, $eval){
        $white_move_fen = str_replace('+','/', $white_move_fen);
        $black_reaction_fen = str_replace('+','/', $black_reaction_fen);
        $state = new Action;
        $state->white_move = $white_move;
        $state->white_move_fen = $white_move_fen;
        $state->black_reaction = $black_reaction;
        $state->black_reaction_fen = $black_reaction_fen;
        $state->eval = $eval;
        $state->encoding_str = $encodingStr;
        $state->save();

        return 'state saved';
    }

    public function updateEval($id, $eval){ 
        return 'update';
        $action = Action::find($id);
        $action->eval = $eval;
        $action->save();
        return 'eval updated  '.$id.'    '.$eval;
    }

    public function setEval($eval){
        return 'ssssss';
    }
}
