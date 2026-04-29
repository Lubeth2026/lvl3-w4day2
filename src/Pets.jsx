
import React, { useEffect, useState } from 'react'
import {supabase} from './utils/supabase'

export default function Pets() {
    const [pets, setPets] = useState([]);
//Second Function Call//
    const [products, setProducts] = useState([]);

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

//Second Function Call//
        async function getProducts() {
           try {
             const { data, error } = await supabase.from("products").select("*");
             if (error) {
               throw new Error(error.message);
             }
             setProducts(data);
           } catch (error) {
             console.error(error);
           }
         }
         getProducts();
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
        {console.log(products)}
    </div>
  )
}
