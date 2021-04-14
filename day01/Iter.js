for (let i = 0; i < 10; i++) {
    console.log("i : "+i);
}

const s = "Hello JavaScript";

 for (let i = 0; i < s.length; i++) {
    if(s[i] === 'S'){
        console.log("Found in : "+i);
        break;
    }
} 

// while do
 let i =0;
while (i < s.length) {
    if (s[i]==='p'){
        console.log("Found in : "+i);
    }
    i++;
} 

// do while
let i =0; 
do {
    if (s[i]==='p'){
        console.log("Found in : "+i);
    }
    i++;
} while (i < s.length);