 //const s = "hello senpai";

 function reverse(s){
     let reverse = "";
     for (let i = s.length - 1; i >= 0; i--){
         reverse += s[i];
     }
     return reverse
 }

 console.log(reverse('hello senpai'))