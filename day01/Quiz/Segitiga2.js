function segitiga2(n, pos){
    if (pos === 'atas') {
        for (let i = 0; i < n; i++){
            for (j = n-1; j >= i ; j--){
                process.stdout.write("* ")
            }
           process.stdout.write('\n')
        }
    } else if (pos === 'bawah') {
        for (let i = 0; i < n; i++){
            for (j = n-1 ; j >= 0; j--){
                if (j > i){
                    process.stdout.write("  ")
                } else {
                    process.stdout.write("* ")
                }
            }
            process.stdout.write('\n')
        }
    }
}

segitiga2(5, 'atas')