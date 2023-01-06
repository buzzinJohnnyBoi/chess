
//--------
var offsetsPawn = [[1, 0]]
var offsetsKnight = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]
var offsetsBishop = [[1, 1], [1, -1], [-1, -1], [-1, 1]]
var offsetsRook = [[1, 0], [-1, 0], [0, 1], [0, -1]]
var offsetsKing = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, -1], [-1, 1]]


function PossiblemovePlayer(Piece) {
	if (Piece[0].type == "Pawn") { return possiblePawnMovesPlayer(Piece);}
	else if (Piece[0].type == "Rook") {return possibleRookMovesPlayer(Piece);}
	else if (Piece[0].type == "Knight") { console.log(possibleKnightMovesComputer(Piece)); return possibleKnightMovesPlayer(Piece);}
	else if (Piece[0].type == "Bishop") {return possibleBishopMovesPlayer(Piece);}
	else if (Piece[0].type == "Queen") {return possibleQueenMovesPlayer(Piece);}
	else if (Piece[0].type == "King") {return possibleKingMovesPlayer(Piece);}
}

function possiblePawnMovesPlayer(Piece) {
	var possibleMoves = []
	var moveObj;
	var x;
	var y;
	x = Piece[0].Pieces[Piece[1]][0];
	y = Piece[0].Pieces[Piece[1]][1] - offsetsPawn[0][0] * game.scale * Piece[0].direction;
	moveObj = isPieceOnSquareCoord(x, y);
	if (moveObj == 0) {
		if (!MoveDangersKing(Piece, [x, y], 0)) {
			possibleMoves.push([Piece[0], [x, y]])
		}
		x = Piece[0].Pieces[Piece[1]][0];
		y = Piece[0].Pieces[Piece[1]][1] - 2 * offsetsPawn[0][0] * game.scale * Piece[0].direction;
		moveObj = isPieceOnSquareCoord(x, y);
		if (moveObj == 0) {
			if (Piece[0].Piecesmoved[Piece[1]] == 0) {
				if (!MoveDangersKing(Piece, [x, y], 0)) {
					possibleMoves.push([Piece[0], [x, y]])
				}
			}
		}
	}


	x = Piece[0].Pieces[Piece[1]][0] + game.scale;
	y = Piece[0].Pieces[Piece[1]][1] - offsetsPawn[0][0] * game.scale * Piece[0].direction;
	moveObj = isPieceOnSquareCoord(x, y, Piece[0].color);
	if (moveObj != 0 && moveObj != "off board") {
		if (!MoveDangersKing(Piece, [x, y], 0)) {
			possibleMoves.push([Piece[0], [x, y]])
		}
	}

	if (moveObj == 0) {
		if (Piece[0].collumEnpassent * game.scale == Piece[0].Pieces[Piece[1]][1]) {
			var temp = isPieceOnSquareCoord(x, Piece[0].Pieces[Piece[1]][1], Piece[0].color);
			if (temp != 0 && temp != "off board" && temp[0].type == "Pawn" && temp[0].Piecesmoved[temp[1]] == 1) {
				temp[0].Pieces[temp[1]][0] -= 900;
				if (!MoveDangersKing(Piece, [x, y], 0)) {
					console.log("En Passent");
					possibleMoves.push([Piece[0], [x, y, [temp[0], temp[1]]]])
				}
				temp[0].Pieces[temp[1]][0] += 900;
			}
		}
	}

	x = Piece[0].Pieces[Piece[1]][0] - game.scale;
	y = Piece[0].Pieces[Piece[1]][1] - offsetsPawn[0][0] * game.scale * Piece[0].direction;
	moveObj = isPieceOnSquareCoord(x, y, Piece[0].color);
	if (moveObj != 0 && moveObj != "off board") {
		if (!MoveDangersKing(Piece, [x, y], 0)) {
			possibleMoves.push([Piece[0], [x, y]])
		}
	}
	if (moveObj == 0) {
		if (Piece[0].collumEnpassent * game.scale == Piece[0].Pieces[Piece[1]][1]) {
			var temp = isPieceOnSquareCoord(x, Piece[0].Pieces[Piece[1]][1], Piece[0].color);
			if (temp != 0 && temp != "off board" && temp[0].type == "Pawn" && temp[0].Piecesmoved[temp[1]] == 1) {
				temp[0].Pieces[temp[1]][0] -= 900;
				if (!MoveDangersKing(Piece, [x, y], 0)) {
					console.log("En Passent");
					possibleMoves.push([Piece[0], [x, y, [temp[0], temp[1]]]])
				}
				temp[0].Pieces[temp[1]][0] += 900;		
			}
		}
	}




	for (var i = 0; i < possibleMoves.length; i++) {
		possibleMovesArray.push(possibleMoves[i][1])
	}
	return possibleMoves;
}

function possibleKnightMovesPlayer(Piece) {
	var possibleMoves = []
	var moveObj;
	var x;
	var y;
	for (var i = 0; i < offsetsKnight.length; i++) {
		x = Piece[0].Pieces[Piece[1]][0] + offsetsKnight[i][1] * game.scale;
		y = Piece[0].Pieces[Piece[1]][1] - offsetsKnight[i][0] * game.scale;
		moveObj = isPieceOnSquareCoord(x, y, Piece[0].opp);
		if (moveObj == 0) {
			if (!MoveDangersKing(Piece, [x, y], 0)) {
				possibleMoves.push([Piece[0], [x, y]])
			}
		}
	}
	for (var i = 0; i < possibleMoves.length; i++) {
		possibleMovesArray.push(possibleMoves[i][1])
	}

	return possibleMoves;
}


function possibleBishopMovesPlayer(Piece) {
	var possibleMoves = []
	var moveObj;
	var x;
	var y;
	for (var i = 0; i < offsetsBishop.length; i++) {
		for (var j = 1; j < 9; j++) {
			x = Piece[0].Pieces[Piece[1]][0] + offsetsBishop[i][1] * game.scale * j;
			y = Piece[0].Pieces[Piece[1]][1] - offsetsBishop[i][0] * game.scale * j;
			moveObj = isPieceOnSquareCoord(x, y);
			if (moveObj == 0) {
				if (!MoveDangersKing(Piece, [x, y], 0)) {
					possibleMoves.push([Piece[0], [x, y]])
				}
			}
			else if (moveObj[1] != "off board") {
				if (moveObj[0].color == Piece[0].color) {
					break;					
				}
				else {
					if (!MoveDangersKing(Piece, [x, y], 0)) {
						possibleMoves.push([Piece[0], [x, y]])
						break;
					}
				}
			}
		}
	}
	for (var i = 0; i < possibleMoves.length; i++) {
		possibleMovesArray.push(possibleMoves[i][1])
	}
	return possibleMoves;
}

function possibleRookMovesPlayer(Piece) {
	var possibleMoves = []
	var moveObj;
	var x;
	var y;
	for (var i = 0; i < offsetsRook.length; i++) {
		for (var j = 1; j < 9; j++) {
			x = Piece[0].Pieces[Piece[1]][0] + offsetsRook[i][1] * game.scale * j;
			y = Piece[0].Pieces[Piece[1]][1] - offsetsRook[i][0] * game.scale * j;
			moveObj = isPieceOnSquareCoord(x, y);
			if (moveObj == 0) {
				if (!MoveDangersKing(Piece, [x, y], 0)) {
					possibleMoves.push([Piece[0], [x, y]])
				}
			}
			else if (moveObj[1] != "off board") {
				if (moveObj[0].color == Piece[0].color) {
					break;					
				}
				else {
					if (!MoveDangersKing(Piece, [x, y], 0)) {
						possibleMoves.push([Piece[0], [x, y]])
						break;
					}
				}
			}
		}
	}
	for (var i = 0; i < possibleMoves.length; i++) {
		possibleMovesArray.push(possibleMoves[i][1])
	}
	return possibleMoves;
}

function possibleQueenMovesPlayer(Piece) {
	var possibleMoves = []
	var moveObj;
	var x;
	var y;
	for (var i = 0; i < offsetsRook.length; i++) {
		for (var j = 1; j < 9; j++) {
			x = Piece[0].Pieces[Piece[1]][0] + offsetsRook[i][1] * game.scale * j;
			y = Piece[0].Pieces[Piece[1]][1] - offsetsRook[i][0] * game.scale * j;
			moveObj = isPieceOnSquareCoord(x, y);
			if (moveObj == 0) {
				if (!MoveDangersKing(Piece, [x, y], 0)) {
					possibleMoves.push([Piece[0], [x, y]])
				}
			}
			else if (moveObj[1] != "off board") {
				if (moveObj[0].color == Piece[0].color) {
					break;					
				}
				else {
					if (!MoveDangersKing(Piece, [x, y], 0)) {
						possibleMoves.push([Piece[0], [x, y]])
						break;
					}
				}
			}
		}
	}

	for (var i = 0; i < offsetsBishop.length; i++) {
		for (var j = 1; j < 9; j++) {
			x = Piece[0].Pieces[Piece[1]][0] + offsetsBishop[i][1] * game.scale * j;
			y = Piece[0].Pieces[Piece[1]][1] - offsetsBishop[i][0] * game.scale * j;
			moveObj = isPieceOnSquareCoord(x, y);
			if (moveObj == 0) {
				if (!MoveDangersKing(Piece, [x, y], 0)) {
					possibleMoves.push([Piece[0], [x, y]])
				}
			}
			else if (moveObj[1] != "off board") {
				if (moveObj[0].color == Piece[0].color) {
					break;					
				}
				else {
					if (!MoveDangersKing(Piece, [x, y], 0)) {
						possibleMoves.push([Piece[0], [x, y]])
						break;
					}
				}
			}
		}
	}
	for (var i = 0; i < possibleMoves.length; i++) {
		possibleMovesArray.push(possibleMoves[i][1])
	}
	return possibleMoves;
}


function possibleKingMovesPlayer(Piece) {
	var possibleMoves = []
	var moveObj;
	var x;
	var y;
	for (var i = 0; i < offsetsKing.length; i++) {
		x = Piece[0].Pieces[Piece[1]][0] + offsetsKing[i][1] * game.scale;
		y = Piece[0].Pieces[Piece[1]][1] - offsetsKing[i][0] * game.scale;
		moveObj = isPieceOnSquareCoord(x, y, Piece[0].opp);
		if (moveObj == 0) {
			if (!MoveDangersKing(Piece, [x, y], 0)) {
				possibleMoves.push([Piece[0], [x, y]])
			}
		}
	}

	//casle

	if (Piece[0].Piecesmoved[Piece[1]] == 0) {
		// var rooks;
		// if (Piece[0].color == "white") {rooks = whiteRooks;}
		// if (Piece[0].color == "black") {rooks = blackRooks;}
		if (!isKingInCheck(Piece[0].color)) {
			var rook1 = isPieceOnSquareCoord(0, Piece[0].Pieces[Piece[1]][1], Piece[0].opp);
			if (rook1 != 0 && rook1[0].type == "Rook" && rook1[0].Piecesmoved[rook1[1]] == 0) {
				if (player_color == "white") {
					if (isPieceOnSquareCoord(game.scale, Piece[0].Pieces[Piece[1]][1], Piece[0].opp) == 0 && isPieceOnSquareCoord(game.scale * 2, Piece[0].Pieces[Piece[1]][1], Piece[0].opp) == 0 && isPieceOnSquareCoord(game.scale * 3, Piece[0].Pieces[Piece[1]][1], Piece[0].opp) == 0) {
						if (!MoveDangersKing(Piece, [game.scale * 2, Piece[0].Pieces[Piece[1]][1]], 0) && !MoveDangersKing(Piece, [game.scale * 3, Piece[0].Pieces[Piece[1]][1]], 0)) {
							possibleMoves.push([Piece[0], [game.scale * 2, Piece[0].Pieces[Piece[1]][1], [rook1, game.scale * 3]]])
						}
					}
				}		
				else {
					if (isPieceOnSquareCoord(game.scale, Piece[0].Pieces[Piece[1]][1], Piece[0].opp) == 0 && isPieceOnSquareCoord(game.scale * 2, Piece[0].Pieces[Piece[1]][1], Piece[0].opp) == 0) {
						if (!MoveDangersKing(Piece, [game.scale, Piece[0].Pieces[Piece[1]][1]], 0) && !MoveDangersKing(Piece, [game.scale * 2, Piece[0].Pieces[Piece[1]][1]], 0)) {
							possibleMoves.push([Piece[0], [game.scale, Piece[0].Pieces[Piece[1]][1], [rook1, game.scale * 2]]])
						}
					}
				}
			}
			var rook2 = isPieceOnSquareCoord(7 * game.scale, Piece[0].Pieces[Piece[1]][1], Piece[0].opp);
			if (rook2 != 0 && rook2[0].type == "Rook" && rook2[0].Piecesmoved[rook2[1]] == 0) {
				if (player_color == "white") {
					if (isPieceOnSquareCoord(game.scale * 6, Piece[0].Pieces[Piece[1]][1], Piece[0].opp) == 0 && isPieceOnSquareCoord(game.scale * 5, Piece[0].Pieces[Piece[1]][1], Piece[0].opp) == 0) {
						if (!MoveDangersKing(Piece, [game.scale * 6, Piece[0].Pieces[Piece[1]][1]], 0) && !MoveDangersKing(Piece, [game.scale * 5, Piece[0].Pieces[Piece[1]][1]], 0)) {
							possibleMoves.push([Piece[0], [game.scale * 6, Piece[0].Pieces[Piece[1]][1], [rook2, game.scale * 5]]])
						}
					}
				}	
				else {
					if (isPieceOnSquareCoord(game.scale * 4, Piece[0].Pieces[Piece[1]][1], Piece[0].opp) == 0 && isPieceOnSquareCoord(game.scale * 6, Piece[0].Pieces[Piece[1]][1], Piece[0].opp) == 0 && isPieceOnSquareCoord(game.scale * 5, Piece[0].Pieces[Piece[1]][1], Piece[0].opp) == 0) {
						if (!MoveDangersKing(Piece, [game.scale * 4, Piece[0].Pieces[Piece[1]][1]], 0) && !MoveDangersKing(Piece, [game.scale * 5, Piece[0].Pieces[Piece[1]][1]], 0)) {
							possibleMoves.push([Piece[0], [game.scale * 5, Piece[0].Pieces[Piece[1]][1], [rook2, game.scale * 4]]])
						}
					}
				}	
			}
		}
	}

	for (var i = 0; i < possibleMoves.length; i++) {
		possibleMovesArray.push(possibleMoves[i][1])
	}

	return possibleMoves;
}
function MoveDangersKing(Piece, arrmove, index) {
	var Kingx;
	var Kingy;
	 // Piece[0].Pieces[Piece[1]][0]
	var temp = isPieceOnSquareCoord(arrmove[0], arrmove[1]);
	var Piece_x = Piece[0].Pieces[Piece[1]][0];
	var Piece_y = Piece[0].Pieces[Piece[1]][1];
	Piece[0].Pieces[Piece[1]][0] = arrmove[0];
	Piece[0].Pieces[Piece[1]][1] = arrmove[1];
	var reset = function reset() {
		Piece[0].Pieces[Piece[1]][0] = Piece_x;
		Piece[0].Pieces[Piece[1]][1] = Piece_y;
		if (temp != 0 && temp != "off board") {
			temp[0].Pieces[temp[1]][0] = arrmove[0];
			temp[0].Pieces[temp[1]][1] = arrmove[1];
		}
	}

	var bool = false;

	if (temp != 0 && temp != "off board") {
		temp[0].Pieces[temp[1]][0] = -1;
		temp[0].Pieces[temp[1]][0] = -1000.7;
	}
	if (Piece[0].color == "black") {
			Kingx = blackKings.Pieces[0][0];
			Kingy = blackKings.Pieces[0][1];	

		for (var i = 0; i < whitePawns.Pieces.length; i++) {
			if (canPawnMoveToSqaure(whitePawns, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		} 
		for (var i = 0; i < whiteKnights.Pieces.length; i++) {
			if (canKnightMoveToSqaure(whiteKnights, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		} 
		for (var i = 0; i < whiteBishops.Pieces.length; i++) {
			if (canBishopMoveToSqaure(whiteBishops, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		} 
		for (var i = 0; i < whiteRooks.Pieces.length; i++) {
			if (canRookMoveToSqaure(whiteRooks, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		} 
		for (var i = 0; i < whiteQueens.Pieces.length; i++) {
			if (canQueenMoveToSqaure(whiteQueens, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		}
		for (var i = 0; i < whiteKings.Pieces.length; i++) {
			if (canKingMoveToSqaure(whiteKings, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		}  
	}
	else {
		Kingx = whiteKings.Pieces[0][0];
		Kingy = whiteKings.Pieces[0][1];	
		for (var i = 0; i < blackPawns.Pieces.length; i++) {
			if (canPawnMoveToSqaure(blackPawns, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		}
		for (var i = 0; i < blackKnights.Pieces.length; i++) {
			if (canKnightMoveToSqaure(blackKnights, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		} 
		for (var i = 0; i < blackBishops.Pieces.length; i++) {
			if (canBishopMoveToSqaure(blackBishops, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		}
		for (var i = 0; i < blackRooks.Pieces.length; i++) {
			if (canRookMoveToSqaure(blackRooks, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		} 
		for (var i = 0; i < blackQueens.Pieces.length; i++) {
			if (canQueenMoveToSqaure(blackQueens, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		} 
		for (var i = 0; i < blackKings.Pieces.length; i++) {
			if (canKingMoveToSqaure(blackKings, i, [Kingx, Kingy])) {
				reset();
				return true;
			}
		}  

	}
	reset();
	return false;
}

function isKingInCheck(color) {
	var Kingx;
	var Kingy;
	if (color == "black") {
		Kingx = blackKings.Pieces[0][0];
		Kingy = blackKings.Pieces[0][1];	
		for (var i = 0; i < whitePawns.Pieces.length; i++) {
			if (canPawnMoveToSqaure(whitePawns, i, [Kingx, Kingy])) {
				return true;
			}
		} 
		for (var i = 0; i < whiteKnights.Pieces.length; i++) {
			if (canKnightMoveToSqaure(whiteKnights, i, [Kingx, Kingy])) {
				return true;
			}
		} 
		for (var i = 0; i < whiteBishops.Pieces.length; i++) {
			if (canBishopMoveToSqaure(whiteBishops, i, [Kingx, Kingy])) {
				return true;
			}
		} 
		for (var i = 0; i < whiteRooks.Pieces.length; i++) {
			if (canRookMoveToSqaure(whiteRooks, i, [Kingx, Kingy])) {
				return true;
			}
		} 
		for (var i = 0; i < whiteQueens.Pieces.length; i++) {
			if (canQueenMoveToSqaure(whiteQueens, i, [Kingx, Kingy])) {
				return true;
			}
		}
		for (var i = 0; i < whiteKings.Pieces.length; i++) {
			if (canKingMoveToSqaure(whiteKings, i, [Kingx, Kingy])) {
				return true;
			}
		}  
	}
	else {
		Kingx = whiteKings.Pieces[0][0];
		Kingy = whiteKings.Pieces[0][1];	
		for (var i = 0; i < blackPawns.Pieces.length; i++) {
			if (canPawnMoveToSqaure(blackPawns, i, [Kingx, Kingy])) {
				return true;
			}
		}
		for (var i = 0; i < blackKnights.Pieces.length; i++) {
			if (canKnightMoveToSqaure(blackKnights, i, [Kingx, Kingy])) {
				return true;
			}
		} 
		for (var i = 0; i < blackBishops.Pieces.length; i++) {
			if (canBishopMoveToSqaure(blackBishops, i, [Kingx, Kingy])) {
				return true;
			}
		}
		for (var i = 0; i < blackRooks.Pieces.length; i++) {
			if (canRookMoveToSqaure(blackRooks, i, [Kingx, Kingy])) {
				return true;
			}
		} 
		for (var i = 0; i < blackQueens.Pieces.length; i++) {
			if (canQueenMoveToSqaure(blackQueens, i, [Kingx, Kingy])) {
				return true;
			}
		} 
		for (var i = 0; i < blackKings.Pieces.length; i++) {
			if (canKingMoveToSqaure(blackKings, i, [Kingx, Kingy])) {
				return true;
			}
		}  
	}
}

function canPawnMoveToSqaure(Pawns, index, coords) {
	if (Pawns.Pieces[index][0] + game.scale == coords[0] || Pawns.Pieces[index][0] - game.scale == coords[0]) {
		if (Pawns.Pieces[index][1] - Pawns.direction * game.scale == coords[1]) {
			return true;
		}
	}
	return false;
}

function canKnightMoveToSqaure(Knights, index, coords) {
	if ((Math.abs(Knights.Pieces[index][0] - coords[0]) == 2 * game.scale && Math.abs(Knights.Pieces[index][1] - coords[1]) == game.scale) || (Math.abs(Knights.Pieces[index][0] - coords[0]) == game.scale && Math.abs(Knights.Pieces[index][1] - coords[1]) == 2 * game.scale)) {
		return true;
	}
	return false;
}

function canBishopMoveToSqaure(Bishops, index, coords) {
	if (Math.abs(Bishops.Pieces[index][0] - coords[0]) == Math.abs(Bishops.Pieces[index][1] - coords[1])) {
		var offsetx = Math.abs(Bishops.Pieces[index][0] - coords[0])/(Bishops.Pieces[index][0] - coords[0]);
		var offsety = Math.abs(Bishops.Pieces[index][1] - coords[1])/(Bishops.Pieces[index][1] - coords[1]);
		for (var i = 1; i < Math.abs(Bishops.Pieces[index][0] - coords[0])/game.scale; i++) {
			if (0 != isPieceOnSquareCoord(Bishops.Pieces[index][0] - offsetx * game.scale * i, Bishops.Pieces[index][1] - offsety * game.scale * i)) {
				return false;
			}
		}
		return true;
	}
	return false;
}

function canRookMoveToSqaure(Rooks, index, coords) {
	if (Rooks.Pieces[index][0] == coords[0] && Rooks.Pieces[index][1] != coords[1]) {
		var offsety = Rooks.Pieces[index][1] - coords[1];
		var y = (Rooks.Pieces[index][1] - coords[1])/Math.abs(Rooks.Pieces[index][1] - coords[1])
		for (var i = 1; i < Math.abs(offsety)/game.scale; i++) {
			if (0 != isPieceOnSquareCoord(Rooks.Pieces[index][0], Rooks.Pieces[index][1] - y * game.scale * i)) {
				return false;
			}
		}
		return true;
	}
	else if (Rooks.Pieces[index][1] == coords[1] && Rooks.Pieces[index][0] != coords[0]) {
		var offsetx = Rooks.Pieces[index][0] - coords[0];
		var x = (Rooks.Pieces[index][0] - coords[0])/Math.abs(Rooks.Pieces[index][0] - coords[0])
		for (var i = 1; i < Math.abs(offsetx)/game.scale; i++) {
			if (0 != isPieceOnSquareCoord(Rooks.Pieces[index][0] - x * game.scale * i, Rooks.Pieces[index][1])) {
				return false;
			}
		}
		return true;
	}
	return false;
}

function canQueenMoveToSqaure(Queens, index, coords) {
	if (Queens.Pieces[index][0] == coords[0] && Queens.Pieces[index][1] != coords[1]) {
		var offsety = Queens.Pieces[index][1] - coords[1];
		var y = (Queens.Pieces[index][1] - coords[1])/Math.abs(Queens.Pieces[index][1] - coords[1])
		for (var i = 1; i < Math.abs(offsety)/game.scale; i++) {
			if (0 != isPieceOnSquareCoord(Queens.Pieces[index][0], Queens.Pieces[index][1] - y * game.scale * i)) {
				return false;
			}
		}
		return true;
	}
	else if (Queens.Pieces[index][1] == coords[1] && Queens.Pieces[index][0] != coords[0]) {
		var offsetx = Queens.Pieces[index][0] - coords[0];
		var x = (Queens.Pieces[index][0] - coords[0])/Math.abs(Queens.Pieces[index][0] - coords[0])
		for (var i = 1; i < Math.abs(offsetx)/game.scale; i++) {
			if (0 != isPieceOnSquareCoord(Queens.Pieces[index][0] - x * game.scale * i, Queens.Pieces[index][1])) {
				return false;
			}
		}
		return true;
	}

	if (Math.abs(Queens.Pieces[index][0] - coords[0]) == Math.abs(Queens.Pieces[index][1] - coords[1])) {
		var offsetx = Math.abs(Queens.Pieces[index][0] - coords[0])/(Queens.Pieces[index][0] - coords[0]);
		var offsety = Math.abs(Queens.Pieces[index][1] - coords[1])/(Queens.Pieces[index][1] - coords[1]);
		for (var i = 1; i < Math.abs(Queens.Pieces[index][0] - coords[0])/game.scale; i++) {
			if (0 != isPieceOnSquareCoord(Queens.Pieces[index][0] - offsetx * game.scale * i, Queens.Pieces[index][1] - offsety * game.scale * i)) {
				return false;
			}
		}
		return true;
	}
	return false;
}

function canKingMoveToSqaure(Kings, index, coords) {
	if (Math.abs(Kings.Pieces[index][0] - coords[0]) == game.scale || Kings.Pieces[index][0] - coords[0] == 0) {
		if (Math.abs(Kings.Pieces[index][1] - coords[1]) == game.scale || Kings.Pieces[index][1] - coords[1] == 0) {
			return true;
		}
	}
	return false;
}