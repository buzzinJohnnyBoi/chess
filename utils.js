function coordToSquareNum(arr) {
	if (0 > arr[0] || arr[0] > 7 * game.scale || 0 > arr[1] || arr[1] > 7 * game.scale) {return false;}
	return arr[0]/game.scale + arr[1]/game.scale * 8;
}

// function squareNumToCoord(num) {
// 	return arr[0]/game.scale + arr[1]/game.scale * 8;
// }

function snapCoordToGrid(x, y) {
	 var x1 = Math.round((x - game.scale/2) / game.scale) * game.scale;
     var y1 = Math.round((y - game.scale/2) / game.scale) * game.scale;
     return [x1, y1]
}

function isPieceOnSquareNum(num, color = "false") {
	if (num === false) {return "off board"}
	if (color == "false" || color == "black") {
	  for (var i = 0; i < whitePawns.Pieces.length; i++) {
	  	if (whitePawns.PiecesBoardNum[i] == num) {
	  		return [whitePawns, i]
	  	}  
	  }
	  for (var i = 0; i < whiteKings.Pieces.length; i++) {
	    if (whiteKings.PiecesBoardNum[i] == num) {
	  		return [whiteKings, i]
	  	}  
	  }
	  for (var i = 0; i < whiteKnights.Pieces.length; i++) {
	    if (whiteKnights.PiecesBoardNum[i] == num) {
	  		return [whiteKnights, i]
	  	} 
	  }
	  for (var i = 0; i < whiteBishops.Pieces.length; i++) {
	    if (whiteBishops.PiecesBoardNum[i] == num) {
	  		return [whiteBishops, i]
	  	}
	  }
	  for (var i = 0; i < whiteRooks.Pieces.length; i++) {
	    if (whiteRooks.PiecesBoardNum[i] == num) {
	  		return [whiteRooks, i]
	  	}  
	  }
	  for (var i = 0; i < whiteQueens.Pieces.length; i++) {
	    if (whiteQueens.PiecesBoardNum[i] == num) {
	  		return [whiteQueens, i]
	  	}
	  }
	}
	if (color == "false" || color == "white") {
	  for (var i = 0; i < blackPawns.Pieces.length; i++) {
	    if (blackPawns.PiecesBoardNum[i] == num) {
	  		return [blackPawns, i]
	  	}  
	  }
	  for (var i = 0; i < blackKnights.Pieces.length; i++) {
	    if (blackKnights.PiecesBoardNum[i] == num) {
	  		return [blackKnights, i]
	  	}  
	  }
	  for (var i = 0; i < blackBishops.Pieces.length; i++) {
	    if (blackBishops.PiecesBoardNum[i] == num) {
	  		return [blackBishops, i]
	  	}
	  }
	  for (var i = 0; i < blackRooks.Pieces.length; i++) {
	    if (blackRooks.PiecesBoardNum[i] == num) {
	  		return [blackRooks, i]
	  	}  
	  }
	  for (var i = 0; i < blackQueens.Pieces.length; i++) {
	    if (blackQueens.PiecesBoardNum[i] == num) {
	  		return [blackQueens, i]
	  	} 
	  }
	  for (var i = 0; i < blackKings.Pieces.length; i++) {
	    if (blackKings.PiecesBoardNum[i] == num) {
	  		return [blackKings, i]
	  	}  
	  }
	}
  return 0;
}

function isPieceOnSquareCoord(x, y, color = "false") {
	if (0 > x || x > 7 * game.scale || 0 > y || y > 7 * game.scale) {return "off board"}
	if (color == "false" || color == "black") {
	  for (var i = 0; i < whitePawns.Pieces.length; i++) {
	  	if (whitePawns.Pieces[i][0] == x && whitePawns.Pieces[i][1] == y) {
	  		return [whitePawns, i]
	  	}  
	  }
	  for (var i = 0; i < whiteKings.Pieces.length; i++) {
	    if (whiteKings.Pieces[i][0] == x && whiteKings.Pieces[i][1] == y) {
	  		return [whiteKings, i]
	  	}  
	  }
	  for (var i = 0; i < whiteKnights.Pieces.length; i++) {
	    if (whiteKnights.Pieces[i][0] == x && whiteKnights.Pieces[i][1] == y) {
	  		return [whiteKnights, i]
	  	} 
	  }
	  for (var i = 0; i < whiteBishops.Pieces.length; i++) {
	    if (whiteBishops.Pieces[i][0] == x && whiteBishops.Pieces[i][1] == y) {
	  		return [whiteBishops, i]
	  	}
	  }
	  for (var i = 0; i < whiteRooks.Pieces.length; i++) {
	    if (whiteRooks.Pieces[i][0] == x && whiteRooks.Pieces[i][1] == y) {
	  		return [whiteRooks, i]
	  	}  
	  }
	  for (var i = 0; i < whiteQueens.Pieces.length; i++) {
	    if (whiteQueens.Pieces[i][0] == x && whiteQueens.Pieces[i][1] == y) {
	  		return [whiteQueens, i]
	  	}
	  }
	}
	if (color == "false" || color == "white") {
	  for (var i = 0; i < blackPawns.Pieces.length; i++) {
	    if (blackPawns.Pieces[i][0] == x && blackPawns.Pieces[i][1] == y) {
	  		return [blackPawns, i]
	  	}  
	  }
	  for (var i = 0; i < blackKnights.Pieces.length; i++) {
	    if (blackKnights.Pieces[i][0] == x && blackKnights.Pieces[i][1] == y) {
	  		return [blackKnights, i]
	  	}  
	  }
	  for (var i = 0; i < blackBishops.Pieces.length; i++) {
	    if (blackBishops.Pieces[i][0] == x && blackBishops.Pieces[i][1] == y) {
	  		return [blackBishops, i]
	  	}
	  }
	  for (var i = 0; i < blackRooks.Pieces.length; i++) {
	    if (blackRooks.Pieces[i][0] == x && blackRooks.Pieces[i][1] == y) {
	  		return [blackRooks, i]
	  	}  
	  }
	  for (var i = 0; i < blackQueens.Pieces.length; i++) {
	    if (blackQueens.Pieces[i][0] == x && blackQueens.Pieces[i][1] == y) {
	  		return [blackQueens, i]
	  	} 
	  }
	  for (var i = 0; i < blackKings.Pieces.length; i++) {
	    if (blackKings.Pieces[i][0] == x && blackKings.Pieces[i][1] == y) {
	  		return [blackKings, i]
	  	}  
	  }
	}
  return 0;
}

function clamp(min, max, num) {
	if (num >= min && num <= max) {return num;}
	if (num < min) {return min;}
	if (num > max) {return max;}
}