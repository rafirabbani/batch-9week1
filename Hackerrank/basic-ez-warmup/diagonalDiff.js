function diagonalDiff(matrix){
    let leftDiagonal = 0
    let rightDiagonal = 0
    for (let i = 0; i < matrix.length; i++){
        leftDiagonal += matrix[i][i]
        rightDiagonal += matrix[matrix.length-1-i][i]
    }
    let diagonalDifference = leftDiagonal - rightDiagonal
    if (diagonalDifference < 0){
        diagonalDifference *= -1
        return diagonalDifference
    } else {
        return diagonalDifference
    }
}

console.log(diagonalDiff([[11,2,4],[4,5,6],[10,8,-12]]))