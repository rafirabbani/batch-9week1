const arr = [1,2,3,4,5,6];
arr.map(x => x * 2);

const arr2 = arr.map(x => x * 2);
console.log(arr2);

arr.forEach(element =>{
    console.log(element * 2);
});

const kota = ["Jakarta","Bandung","Semarang","Bogor","Cirebon","Surabaya"]

const filterKota =(cities,prefix) => cities.filter(city => city.startsWith(prefix))


console.log(filterKota(kota,"S"));