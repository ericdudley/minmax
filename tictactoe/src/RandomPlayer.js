function RandomPlayer(id)
{
        this.id = id;
}

RandomPlayer.prototype.getMove = function(board){
        var moves = board.getAllMoves(this.id);
        return moves[floor(random(0, moves.length))];
};
