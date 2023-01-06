var offsetsKnightComputer = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]


function possibleKnightMovesComputer(Piece) {
	var possibleMoves = []
	var x;
	var y;
	for (var i = 0; i < offsetsKnightComputer.length; i++) {
		x = Piece[0].Pieces[Piece[1]][0] + offsetsKnightComputer[i][1] * game.scale;
		y = Piece[0].Pieces[Piece[1]][1] - offsetsKnightComputer[i][0] * game.scale;
		if (isPieceOnSquareNum(coordToSquareNum([x, y]), Piece[0].opp) == 0) {
			if (!MoveDangersKingAI(Piece, [x, y], 0)) {
				possibleMoves.push([Piece[0], [x, y]])
			}
		}
	}
	return possibleMoves;
}

function MoveDangersKingAI(Piece, [x, y], index) {
	return false;
}
