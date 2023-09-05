import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Components/Nav';


const GstServices = () => {
    const navigate=useNavigate();

    

    let getdata=async()=>{
      
    const clientId = '69c1bad7-c5d9-4174-b18b-18dfb71f24cc';
    const clientSecret = '0b8a76fc-18c8-4525-bc38-56e8deb60ee5';

        try{
         const headers = {
             'Content-Type': 'application/json',
             'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
           };
           const requestOptions = {
             method: 'GET',
             headers: headers,
           };
         let res=await fetch(`https://api.mastergst.com/public/search?email=shailezb7@gmail.com&gstin=33AAGCC7144L6ZE`,requestOptions);
         let jdata=await res.json();
         console.log(jdata);}
         catch(err){
             console.log(err.message);
         }
     }



  return (
    <Box>
        <Nav/>

    <Box  m={'20px'} p={'20px 0px'} >

        <Heading size={'lg'} color={'rgb(5,21,71)'} p={'10px'}>Search Taxpayer</Heading>
        <Text size={'md'} p={'10px'}>GSTIN/UIN of the Taxpayer</Text>
        <Input placeholder='Enter GST Number' p={'20px'} width={'600px'}/> <br />
        <Button mt={'18px'} colorScheme='green' onClick={()=>{
            navigate('/details');
        }}>Submit</Button>

    </Box>

    </Box>
  )
}

export default GstServices