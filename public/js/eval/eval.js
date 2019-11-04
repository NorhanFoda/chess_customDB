function evaluate(game){

    var chess = new Chess();
    chess.load(game.fen());

    var whitePower = 0;
    var blackPower = 0;

    //no need to get the material value here beacause it is included in getPower Method
    
    //set count to zero
    // var BP_count = WP_count = 0;
	// var BN_count = WN_count = 0;
	// var BB_count = WB_count = 0;
	// var BR_count = WR_count = 0;
	// var BQ_count = WQ_count = 0;
    // var BK_count = WK_count = 0;
    
    // var pawn = 1;
	// var knight = 3.02;
	// var bishop = 3.19;
	// var rook = 5.06;
	// var queen = 9.10;

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for(var col = 0; col < letters.length; col++){
        for(var row = 1; row <=8; row++){

            var p = game.get(letters[col]+row);
            
            if(p != null){
                var piece = {'piece': p, 'pos': letters[col]+row};
                //getPower(chess,piece);
                if(p.color == 'w'){

                    // if(p.type == 'p') WP_count++;
					// if(p.type == 'n') WN_count++;
					// if(p.type == 'b') WB_count++;
					// if(p.type == 'r') WR_count++;
                    // if(p.type == 'q') WQ_count++;
                    
                    whitePower += getPower(chess,piece);
                }
                else if(p.color == 'b'){

                    // if(p.type == 'p') BP_count++;
					// if(p.type == 'n') BN_count++;
					// if(p.type == 'b') BB_count++;
					// if(p.type == 'r') BR_count++;
                    // if(p.type == 'q') BQ_count++;
                    
                    blackPower += getPower(chess,piece);
                }
            }//end if
            //piecePower = (mainPosVal + defendersPower) - attackersPower;
        }//end for
    }//end for

    // var sum_white_mat_value =   ((pawn * WP_count) +
	// 				(knight * WN_count) + 
	// 				(bishop * WB_count) +
	// 				(rook * WR_count) +
    //                 (queen * WQ_count));
                    
    // var sum_black_mat_value = ((pawn * BP_count) + 
    //                 (knight * BN_count) + 
    //                 (bishop * BB_count) + 
    //                 (rook * BR_count) + 
    //                 (queen * BQ_count));


    // whitePower += sum_white_mat_value;
    // blackPower += sum_black_mat_value;
    
    // console.log('white mat: '+sum_white_mat_value);
    // console.log('black mat: '+sum_black_mat_value);

    console.log('white power: '+whitePower);
    console.log('black power: '+blackPower);

    return blackPower;
}