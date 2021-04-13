function stairs(n){
    for (let i = 0; i < n; i++){
        for (let j = n-1 ; j >= 0; j--){
            if (j > i){
                process.stdout.write(" ")
            } else {
                process.stdout.write("#")
            }
        }
        process.stdout.write('\n')
    }
}
stairs(5)
