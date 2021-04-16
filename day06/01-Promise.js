const mypromise = new Promise(()=>{
    console.log("bayar bulan depan");
});

mypromise;

// promise butuh resolve agar task asyn dapat di excute
const promise2 = new Promise((resolve)=>{
    resolve(18)
})

console.log(promise2);

// promise with then
const promise3 = new Promise((resolve)=>{
    resolve(20);
}).then((value)=>{
    console.log(value);
});

// immediatelly promise
const promise4 = Promise.resolve(10)
console.log(promise4);

// reject promise
const rejectPromised = Promise.reject(new Error("Reject"));

rejectPromised.catch((error)=>{
    console.log(error);
});