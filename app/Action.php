<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Eloquent;

class Action extends Model 
{
    protected $table = 'actions';
    protected $primaryKey = 'id';

    protected $fillable = [
        'white_move', 'white_move_fen', 'black_reaction', 'black_reaction_fen', 'eval', 'encoding_str'
    ];
}
