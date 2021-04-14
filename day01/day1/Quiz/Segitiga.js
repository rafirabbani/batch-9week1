function segitiga(n, pos){
    if (pos === 'bawah') {
        for (let i = 0; i < n; i++){
            for (let j = 0; j <= i ; j++){
                process.stdout.write("* ")
            }
           process.stdout.write('\n')
        }
    } else if(pos === 'atas') {
        for (let i = n-1; i >= 0; i--){
            let j = n-1
            while (j > i){
                process.stdout.write("  ")
                j--
            }
            let k = 0
            while (k <= i){
                process.stdout.write("* ")
                k++
            }
            process.stdout.write("\n")
        }
    }
}

segitiga(5, 'atas')