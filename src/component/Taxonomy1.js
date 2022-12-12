/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect} from 'react'

export default function Taxonomy1() {
    
    let data=[];
    useEffect(()=>{
        fetch('./file.txt')
        .then((response)=>response.text())
        .then((response)=>{
        response.split('\n').map(item=> data.push(item.split(' > ')))
        })
      },[])

      const findBtn=(data)=>{
        let temp=[];
        let tempObj={};
        for(let i = 0 ;i<data.length;i++){
            for(let j=0 ; j<data[i].length;j++){
                 if(temp.includes(data[i][j])===false){
                     temp.push(data[i][j])
                           
                 }
                 if(temp.includes(data[i][j])===true){
                    continue;
                 }
            }
        }
        // data.map(item=>{
        //     item.map(subItem=>{
        //         if(!(temp.includes(subItem))){
        //              temp.push(subItem)
        //              if(subItem in tempObj){
        //              }
        //              else{
        //                 tempObj.subItem = findBtn(data)
        //              }
        //         }
        //     })
        // })
        //  console.log(data)
      }
  return (
    <div>
        <button onClick={()=>findBtn(data)}>Find</button>
    </div>
  )
}
