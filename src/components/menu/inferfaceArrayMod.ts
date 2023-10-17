import React, {useState} from "react";


// interface arrayConditions{
//     index:{
//         start: number;
//         count: number;
//     }
// }

export function ArrayModFunction( array: [{nome: string, link:string, acao?: ()=>{}, icone: string  }], start: number, count: number, addIndexes: number){

    // const Localarray=[] = array;
    // const Localcount = count;
    // const Localstart = start;
    let i = 0;
    
        while( i<addIndexes){

            array.splice(start, count, {nome: '', link:'' , acao: console.log(' ') as any , icone: 'string'})
            start++;
        }

        return array
    
}

export default ArrayModFunction;