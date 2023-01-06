var dirWhite = -1;
var dirBlack = 1;
var queenBlack = 0;
var queenWhite = 8 - 1;
var colEnpasswhite = 4;
var colEnpassblack = 3;
if (player_color == "white") {
	dirBlack = -1; 
	dirWhite = 1; 
	queenBlack = 8 - 1;
	queenWhite = 0;
	colEnpasswhite = 3;
	colEnpassblack = 4;
}
var whitePawns = {
	Pieces: [],
	PiecesBoardNum: [],
	Piecesmoved: [],
	direction: dirWhite,
	image: document.getElementById("whitePawn"),
	type: "Pawn",
	opp: "black",
	color: "white",
	collumEnpassent: colEnpasswhite,
	collumqueen: queenWhite,
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
		this.Piecesmoved.push(0)
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
		this.Piecesmoved.splice(index, 1)
	}
}

var blackPawns = {
	Pieces: [],
	PiecesBoardNum: [],
	Piecesmoved: [],
	direction: dirBlack,
	image: document.getElementById("blackPawn"),
	type: "Pawn",
	opp: "white",
	color: "black",
	collumEnpassent: colEnpassblack,
	collumqueen: queenBlack,
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
		this.Piecesmoved.push(0)
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
		this.Piecesmoved.splice(index, 1)
	}
}

var whiteKnights = {
	Pieces: [],
	PiecesBoardNum: [],
	image: document.getElementById("whiteKnight"),
	type: "Knight",
	opp: "black",
	color: "white",
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
	}
}

var blackKnights = {
	Pieces: [],
	PiecesBoardNum: [],
	image: document.getElementById("blackKnight"),
	type: "Knight",
	opp: "white",
	color: "black",
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
	}
}

var whiteBishops = {
	Pieces: [],
	PiecesBoardNum: [],
	image: document.getElementById("whiteBishop"),
	type: "Bishop",
	opp: "black",
	color: "white",
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
	}
}

var blackBishops = {
	Pieces: [],
	PiecesBoardNum: [],
	image: document.getElementById("blackBishop"),
	type: "Bishop",
	opp: "white",
	color: "black",
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
	}
}

var whiteRooks = {
	Pieces: [],
	PiecesBoardNum: [],
	Piecesmoved: [],
	image: document.getElementById("whiteRook"),
	type: "Rook",
	opp: "black",
	color: "white",
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
		this.Piecesmoved.push(0);
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
		this.Piecesmoved.splice(index, 1);
	}
}

var blackRooks = {
	Pieces: [],
	PiecesBoardNum: [],
	Piecesmoved: [],
	image: document.getElementById("blackRook"),
	type: "Rook",
	opp: "white",
	color: "black",
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
		this.Piecesmoved.push(0);
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
		this.Piecesmoved.splice(index);

	}
}

var whiteQueens = {
	Pieces: [],
	PiecesBoardNum: [],
	image: document.getElementById("whiteQueen"),
	type: "Queen",
	opp: "black",
	color: "white",
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
	}
}

var blackQueens = {
	Pieces: [],
	PiecesBoardNum: [],
	image: document.getElementById("blackQueen"),
	type: "Queen",
	opp: "white",
	color: "black",
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
	}
}

var whiteKings = {
	Pieces: [],
	PiecesBoardNum: [],
	Piecesmoved: [],
	image: document.getElementById("whiteKing"),
	type: "King",
	opp: "black",
	color: "white",
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
		this.Piecesmoved.push(0);
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
		this.Piecesmoved.splice(index, 1)
	}
}

var blackKings = {
	Pieces: [],
	PiecesBoardNum: [],
	Piecesmoved: [],
	image: document.getElementById("blackKing"),
	type: "King",
	opp: "white",
	color: "black",
	add: function(x, y) {
		this.Pieces.push([x, y])
		this.PiecesBoardNum.push(coordToSquareNum([x, y]))
		this.Piecesmoved.push(0);
	},
	remove: function(index) {
		this.Pieces.splice(index, 1)
		this.PiecesBoardNum.splice(index, 1)
		this.Piecesmoved.splice(index, 1)
	}
}

