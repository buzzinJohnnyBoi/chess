if (player_color == "white") {
	for (var i = 0; i < 8; i++) {
		blackPawns.add(i * game.scale, 100);
		whitePawns.add(i * game.scale, 600);
	}
	blackKnights.add(game.scale, 0);
	blackKnights.add(game.scale * 6, 0);
	whiteKnights.add(game.scale, game.scale * 7);
	whiteKnights.add(game.scale * 6, game.scale * 7);
	blackBishops.add(game.scale * 2, 0);
	blackBishops.add(game.scale * 5, 0);
	whiteBishops.add(game.scale * 2, game.scale * 7);
	whiteBishops.add(game.scale * 5, game.scale * 7);
	blackRooks.add(0, 0);
	blackRooks.add(game.scale * 7, 0);
	whiteRooks.add(0, game.scale * 7);
	whiteRooks.add(game.scale * 7, game.scale * 7);

	blackQueens.add(game.scale * 3, 0);
	whiteQueens.add(game.scale * 3, game.scale * 7);
	blackKings.add(game.scale * 4, 0);
	whiteKings.add(game.scale * 4, game.scale * 7);
}


if (player_color == "black") {
	for (var i = 0; i < 8; i++) {
		blackPawns.add(i * game.scale, 600);
		whitePawns.add(i * game.scale, 100);
	}
	whiteKnights.add(game.scale, 0);
	whiteKnights.add(game.scale * 6, 0);
	blackKnights.add(game.scale, game.scale * 7);
	blackKnights.add(game.scale * 6, game.scale * 7);
	whiteBishops.add(game.scale * 2, 0);
	whiteBishops.add(game.scale * 5, 0);
	blackBishops.add(game.scale * 2, game.scale * 7);
	blackBishops.add(game.scale * 5, game.scale * 7);
	whiteRooks.add(0, 0);
	whiteRooks.add(game.scale * 7, 0);
	blackRooks.add(0, game.scale * 7);
	blackRooks.add(game.scale * 7, game.scale * 7);

	whiteQueens.add(game.scale * 4, 0);
	blackQueens.add(game.scale * 4, game.scale * 7);
	whiteKings.add(game.scale * 3, 0);
	blackKings.add(game.scale * 3, game.scale * 7);
}


window.onload = function() {
	UpdateBoard();
	UpdatePieces();
	setInterval(update, 1000/60);	
}