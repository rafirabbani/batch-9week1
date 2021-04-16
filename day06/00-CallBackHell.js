// contoh call backhell
// di javascript ada 2 operation blocking & non blocking
/*
    Disk I/O            Non-Blocking
    Network Request     Non-Blocking
    Timesout            Non-Blocking
    Aritmatic,Infinite Loop, Array Manipulation Blocking
* */
request('another url', (error, response) => {
    disk.write('filename', (result) => {
        if (result.this) {
            process(something, (result) => {
                request('another url', (error, response) => {
                    if (response.this) {
                        request('this', (error, response) => {
                            // Do something for this
                        })
                    } else {
                        request('that', (error, response) => {
                            if (error) {
                                request('error fallback', (error,
                                    response) => {
                                    // Error fallback
                                })
                            }
                            if (response.this) {
                            }
                        })
                    }
                });
            })
        } else {
            process(otherthing, (result) => {
                // Do something else
            })
        }
    })
})