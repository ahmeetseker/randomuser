'use client'
import React, {  useState } from 'react'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Label } from "@/components/ui/label"

  import { Button } from "@/components/ui/button"




const CardRandom = () => {


  
  const [userData, setUserData] = useState(null);




  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error('Error fetching random user data:', error);
    }
  };




console.log(userData)

  return (

    <div className='flex justify-center items-center '>

      <div className='h-full flex-col flex justify-center'>

    


      <Card className="w-[350px]  mt-5">
            <CardHeader>
              <CardTitle className='text-2xl'>Random User Generator</CardTitle>

            </CardHeader>
            <CardContent>
              
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">

                    {userData && (
                      <>

                      <div className='flex  items-center  justify-center  mb-2'>
                
                            <img  className='rounded-lg ' src={userData.picture.large}></img>

                          </div>


                         
                          <div className='flex  items-center'>
                            <Label> Name :</Label>
                            <p className='ml-2'>{userData.name.first}</p>

                          </div>
               

                          <div className='flex items-center'>
                          <Label> Lastname :</Label>
                            <p className='ml-2'>{userData.name.last}</p>

                          </div>

                          <div className='flex  items-center'>
                          <Label> Location :</Label>
                            <p className='ml-2'>{userData.location.country}</p>

                          </div>

                          <div className='flex  items-center'>
                          <Label> Phone :</Label>
                            <p className='ml-2'>{userData.phone}</p>

                          </div>
                          <div className='flex  items-center'>
                          <Label>Email :</Label>
                            <p className='ml-2'>{userData.email}</p>

                          </div>


                        </>

                      

                    )}
                
                  
                  </div>
                  <div className="flex flex-col space-y-1.5">
                  
              
                  </div>
                </div>
              
            </CardContent>
            <CardFooter className="flex justify-between">
                    <Button onClick={fetchRandomUser} >Generate Person</Button>
            </CardFooter>
          </Card>

  




      </div>



    </div>
    





  )
}

export default CardRandom