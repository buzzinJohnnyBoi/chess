var ctx = document.querySelector('canvas').getContext('2d');
var player_color = "white";

ctx.canvas.width = window.innerWidth = 800;
ctx.canvas.height = window.innerHeight = 800;

var Canvas = {
	width: ctx.canvas.width,
	height: ctx.canvas.height,
	Center: {
		x: ctx.canvas.width/2,
		y: ctx.canvas.height/2
	}
}

var game = {
  scale: 100,
  whoseTurn: "white",
}

var board = {
  color1: "tan",
  color2: "gray",
  highlightcolor: "rgba(0, 0, 255, 0.5)"
}

var pieceSelected = 0;
// var possibleMovesArray = [[300, 700], [500, 500]]
var possibleMovesArray = []



function update() {
  if (Mouse.held == true) {
    if (pieceSelected != 0) {
      pieceSelected[0].Pieces[pieceSelected[1]][0] = clamp(0, 7 * game.scale, Mouse.x - game.scale/2);
      pieceSelected[0].Pieces[pieceSelected[1]][1] = clamp(0, 7 * game.scale, Mouse.y - game.scale/2);
      UpdateBoard(possibleMovesArray);
      UpdatePieces();
    }
  }
}

function UpdateBoard(arr = []) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if((i + j) % 2 == 0) {
        ctx.fillStyle = board.color1;
      }
      else {
        ctx.fillStyle = board.color2;
      }
      ctx.fillRect(i * 100, j * 100, 100, 100);      
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const move = arr[i];
    ctx.fillStyle = board.highlightcolor;
    ctx.fillRect(move[0], move[1], 100, 100);   
  }

}

function UpdatePieces() {
  for (var i = 0; i < whitePawns.Pieces.length; i++) {
    ctx.drawImage(whitePawns.image, whitePawns.Pieces[i][0], whitePawns.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < blackPawns.Pieces.length; i++) {
    ctx.drawImage(blackPawns.image, blackPawns.Pieces[i][0], blackPawns.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < whiteKnights.Pieces.length; i++) {
    ctx.drawImage(whiteKnights.image, whiteKnights.Pieces[i][0], whiteKnights.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < blackKnights.Pieces.length; i++) {
    ctx.drawImage(blackKnights.image, blackKnights.Pieces[i][0], blackKnights.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < whiteBishops.Pieces.length; i++) {
    ctx.drawImage(whiteBishops.image, whiteBishops.Pieces[i][0], whiteBishops.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < blackBishops.Pieces.length; i++) {
    ctx.drawImage(blackBishops.image, blackBishops.Pieces[i][0], blackBishops.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < whiteRooks.Pieces.length; i++) {
    ctx.drawImage(whiteRooks.image, whiteRooks.Pieces[i][0], whiteRooks.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < blackRooks.Pieces.length; i++) {
    ctx.drawImage(blackRooks.image, blackRooks.Pieces[i][0], blackRooks.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < whiteQueens.Pieces.length; i++) {
    ctx.drawImage(whiteQueens.image, whiteQueens.Pieces[i][0], whiteQueens.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < blackQueens.Pieces.length; i++) {
    ctx.drawImage(blackQueens.image, blackQueens.Pieces[i][0], blackQueens.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < whiteKings.Pieces.length; i++) {
    ctx.drawImage(whiteKings.image, whiteKings.Pieces[i][0], whiteKings.Pieces[i][1], game.scale, game.scale);
  }
  for (var i = 0; i < blackKings.Pieces.length; i++) {
    ctx.drawImage(blackKings.image, blackKings.Pieces[i][0], blackKings.Pieces[i][1], game.scale, game.scale);
  }
}

function rightclick() {
  // pieceSelected[0].Pieces[pieceSelected[1]][0] = pieceSelected[2][0]
  // pieceSelected[0].Pieces[pieceSelected[1]][1] = pieceSelected[2][1]
  // // pieceSelected = 0;
}