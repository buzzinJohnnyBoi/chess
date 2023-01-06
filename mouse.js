var PossibleMovesArrOfArrays = []
var Mouse = {
  x: 0,
  y: 0,
  pressed: false,
  held: false,
  ticksHeld: 0,
  Move: function(e)
  {
    Mouse.x = e.x;
    Mouse.y = e.y;
  },
  EventUp: function(e)
  {
    var state = false;
    Mouse.pressed = state;
    Mouse.held = state;
    Mouse.ticksHeld = 0;
    MouseUp();    

  },
  EventDown: function(e)
  {
    var state = true;
    Mouse.pressed = state;
    Mouse.held = state;
    Mouse.ticksHeld = 0;
    MouseDown();

  },
  Update: function()
  {
    Mouse.pressed = false;
    if(Mouse.held) Mouse.ticksHeld ++;
  }
}
document.addEventListener("mouseup", Mouse.EventUp);
document.addEventListener("mousedown", Mouse.EventDown);
document.addEventListener("mousemove", Mouse.Move);


function MouseDown() {
  if (pieceSelected != 0) {}
  else {
    if (0 < Mouse.x && Mouse.x <= 8 * game.scale && 0 < Mouse.y && Mouse.y <= 8 * game.scale) {
      var coordsMouse = snapCoordToGrid(Mouse.x, Mouse.y);
      var num = coordToSquareNum(coordsMouse);
      pieceSelected = isPieceOnSquareNum(num);
      console.log(pieceSelected)
      if (pieceSelected != 0 && pieceSelected[0].color == game.whoseTurn) {
        pieceSelected.push([pieceSelected[0].Pieces[pieceSelected[1]][0], pieceSelected[0].Pieces[pieceSelected[1]][1]])
        possibleMovesArray = []
        PossibleMovesArrOfArrays = []
        PossibleMovesArrOfArrays = PossiblemovePlayer(pieceSelected);
      }
      else {
        pieceSelected = 0;
      }
    } 
  }
}

function MouseUp() {
  if (pieceSelected != 0) {
    // console.log(pieceSelected);
    var coords = snapCoordToGrid(pieceSelected[0].Pieces[pieceSelected[1]][0] + game.scale/2, pieceSelected[0].Pieces[pieceSelected[1]][1] + game.scale/2)
    var temp = isMoveInPossibleMoves(possibleMovesArray, coords);
    if (temp[0] == true) {
      pieceSelected[0].Pieces[pieceSelected[1]] = coords;
      pieceSelected[0].PiecesBoardNum[pieceSelected[1]] = coordToSquareNum([pieceSelected[0].Pieces[pieceSelected[1]][0], pieceSelected[0].Pieces[pieceSelected[1]][1]])
      PieceMoved(pieceSelected, temp);
      if(pieceSelected[0].type == "Pawn") {
        pieceSelected[0].Piecesmoved[pieceSelected[1]]++;
        if(PossibleMovesArrOfArrays[temp[1]][1].length == 3) {
          var temp2 = PossibleMovesArrOfArrays[temp[1]][1][2];
          temp2[0].remove(temp2[1]);
        }
        if (pieceSelected[0].Pieces[pieceSelected[1]][1] == pieceSelected[0].collumqueen * game.scale) {
          // change this later
          if (pieceSelected[0].color == "white") {
            whiteQueens.add(pieceSelected[0].Pieces[pieceSelected[1]][0], pieceSelected[0].Pieces[pieceSelected[1]][1]);
          }
          else {
            blackQueens.add(pieceSelected[0].Pieces[pieceSelected[1]][0], pieceSelected[0].Pieces[pieceSelected[1]][1]);
          }
          pieceSelected[0].remove(pieceSelected[1]);

        }
      }
      else if (pieceSelected[0].type == "King" || pieceSelected[0].type == "Rook") {
        if(PossibleMovesArrOfArrays[temp[1]][1].length == 3) {
          var temp = PossibleMovesArrOfArrays[temp[1]][1][2];
          temp[0][0].Pieces[temp[0][1]][0] = temp[1];
          temp[0][0].PiecesBoardNum[temp[0][1]] = coordToSquareNum([temp[0][0].Pieces[temp[0][1]][0], temp[0][0].Pieces[temp[0][1]][1]])
        }
        pieceSelected[0].Piecesmoved[pieceSelected[1]]++; 
      }
      if(game.whoseTurn == "white") {
        game.whoseTurn = "black";
      }
      else {
        game.whoseTurn = "white";
      }
    }
    else {
      pieceSelected[0].Pieces[pieceSelected[1]] = pieceSelected[2];
    }
    pieceSelected = 0;
    UpdateBoard();
    UpdatePieces();
  }
}

function isMoveInPossibleMoves(PossibleMoves, Move) {
  for (var i = 0; i < possibleMovesArray.length; i++) {
    if (PossibleMoves[i][0] == Move[0] && PossibleMoves[i][1] == Move[1]) {
      // console.log(Move);
      return [true, i];      
    }
  }
  return false;
}

function PieceMoved(Piece) {
  var temp = isPieceOnSquareNum(coordToSquareNum([pieceSelected[0].Pieces[pieceSelected[1]][0], pieceSelected[0].Pieces[pieceSelected[1]][1]]), Piece[0].color)
  if (temp != 0) {
    temp[0].remove(temp[1]);
  }
}