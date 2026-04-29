
import React, { useEffect, useState } from 'react'
import {supabase} from './utils/supabase'

export default function Pets() {
    const [pets, setPets] = useState([]);

    useEffect(()=>{
        async function getPets() {
           try {
            const {data, error} = await supabase.from("pets").select("*");
            if(error){
                throw new Error(error.message);}
            setPets(data)
           } catch (error) {
            console.error(error)
           } 
        }
        getPets();
    }, [])

  return (
    <div>
        <h2>Pets SQL DEMO</h2>
        {pets.map(pet=>(
            <div key={pet.id}>
              <p>Name: {pet.name}</p>
              <p>Type: {pet.type}</p>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
              <img src={pet.image} alt={pet.description} />
              <p>Description: {pet.description}</p>
            </div>
        ))}
    </div>
  )
}
