/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Select } from '@shopify/polaris';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Taxonomy() {
  var data = [];
  const [data1 , setData1]=useState([])
  const [options , setOptions]=useState([])
  const [selected , setSelected]=useState([])
  const handleSelectChange=(value , ind)=>{
       let temp =[];
          data1.map((item)=>{
            item.map((subItem , index)=>{
             if(subItem===value){
              if(!temp.includes(item[index + 1])){
                if(item[index+1]!==undefined){
                  temp.push(item[index + 1])
                }
               }  
             }
            })
          })
          if(temp.length>0){
            setSelected([...selected,value])
            setOptions(prev=>[...prev ,temp])
          }
          if(temp.length===0){
            setSelected([...selected,value])
          }
          if(options.length===selected.length){
            let temp = [...selected];
            temp[ind]=value;
            setSelected(temp)
          }
          if(ind<options.length-1){
            let tempOptions = [...options];
            let tempSelected = [...selected];
           tempOptions = tempOptions.slice(0 , ind)
           tempSelected = tempSelected.slice(0 , ind-1)
            setOptions(tempOptions)
            setSelected(tempSelected)
          }
  }
  useEffect(()=>{
    fetch('./file.txt')
    .then((response)=>response.text())
    .then((response)=>{
     response.split('\n').map((item)=>{
       data.push(item.split(' > '))
      })
    })
    setData1(data)
  },[])
  const findBtn=()=>{
    let temp=[];
    data1.map((item)=>{
      if(temp.includes(item[0])===false){
        temp.push(item[0])
      }
    })
    setOptions(prev=>[...prev ,temp])
  }  
  return (
    <div>
      <button onClick={findBtn}>Find</button>
      {options && options.map((item , index)=>{
        return (
        <Select
          placeholder="Select"
          key = {uuidv4()}
          options={options[index]}
          onChange={(value)=>handleSelectChange(value , index)}
          value={selected[index]}
        />
        )
      })}
    </div>
  )
}
