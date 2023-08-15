export async function  calculation(a : number,b : number,c:string){
    let result:number
if(c==="+") {
    result = (a+b);
    return result;
}else if(c==="-"){
    result=(a-b);
}else if(c==="*") {
    result = (a*b);
    return result;
}else if(c==="/") {
    result = (a/b);
    return result;
    
    }

}
