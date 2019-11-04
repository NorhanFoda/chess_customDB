<?php


Route::get('/', 'ChessController@index');
Route::get('/reactions/{white_move}', 'ChessController@getReactions');
Route::get('/allReacions', 'ChessController@getAllReactions');
Route::post('/reactions/{white_move}/{black_reaction}/{white_move_fen}/{black_reaction_fen}/{encodingStr}/{eval}', 'ChessController@saveReaction');
// Route::post('/saveReactions', 'ChessController@saveReaction');
Route::put('/reactions/updateEval/{id}/{eval}', 'ChessController@updateEval');