// whatever action are in the applicions differnt functions which are included in the reducer will be mensioned here

export const incNumber =()=>{
    return{
// this "type" is a property of action object which is taken by reducer 
        type:"INCREMENT"
    }
}
export const decNumber =()=>{
    return{
        // use capital letters to differentiate
        type:"DECREMENT"
    }
}