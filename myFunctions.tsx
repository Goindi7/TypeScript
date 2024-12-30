function addTwo(num: number): number{
// function addTwo(num){
    // nums.toUpperCase;
    return num +2;
}

function getUpper(val: String){
    return val.toUpperCase();

}

function signUpUser(name: String, email: String, isPaid: boolean){
}

let loginUser = (name: String, email: String, isPaid: boolean = false) => {}

loginUser("Manpreet", "man@gmail.com");
signUpUser("Manpreet", "man@gmail.com", false)
addTwo(5);
getUpper("Manpreet");


function getvalue(myVal: number){
    if(myVal > 5){
        return true;
    }
    return "200 OK"
}


const getHello = (s:string): string =>{
    return "Hello";
}

// const heros = ['thor', 'spiderman','ironman']
const heros = [1, 2, 3] 
heros.map((hero) : string=> {
    return `hero is ${hero}`
    // return 2
})


function consoleError(errmsg: string): void {
    console.log(errmsg);

}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
    
}
export{}