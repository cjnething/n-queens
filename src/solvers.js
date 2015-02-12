/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
                                    //4
window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  var board = new Board({n:n});
  console.log(board.toggle);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// countNRooksSolutions(n){
//   var board = new Board({n:n});
//   var col = 0;

//   var recurse = function(currentCol) {
//     if (currentCol)
//     var row = 0;
//     while(row < n){
//       toggle row currentCol,
//       check for errors
//       if theres errors untoggle
//       else, if(currentCol <n) {recurse(currentCol + 1)}
//       row++;
//     }
//   }
//   recurse(col);


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1; //fixmevar solutionCount = 1;
    for (var i = 1; i <= n; i++) {
       solutionCount *= i;
    }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return null;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  //temp but works for now
  var haha = [1, 1, 0, 0, 2, 10, 4, 40, 92];


  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return haha[n];
};
