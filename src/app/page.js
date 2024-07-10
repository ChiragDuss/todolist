'use client';

import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import moment from 'moment';

function SignUpPage() {

  const [addText, setAddText] = useState("");
  const [list, setList] = useState([]);

  function addTextButton() {

      setList((list) => {
        const updateText = [...list, addText]
        console.log("ssdsd", updateText);
        setAddText('')
        return updateText
      })
    }

    function removeList(i){
      const updateList = list.filter((elem, id) => {
        return i != id
      })
      setList(updateList)
    }

  return (

    <Grid md={12}
      width={1000}
      m="10px auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={4}
      p={2}
      sx={{ background: 'black', color: '#FFF' }}
    >
      <Box>
        <h1 style={{padding: '20px', fontSize: '50px', fontWeight: 900, color: '#FFF', textAlign: 'center' }}>TODO LIST</h1>
        <Box style={{padding: '20px'}} md={12}>
          <input style={{padding: '10px 20px', color: "#333", boxShadow: '0 0 6px rgba(51, 51, 51, 0.5)'}} placeholder='New todolist' value={addText} onChange={(e) => {setAddText(e.target.value)}}/>
          <Button style={{background: 'green', padding: '10px 20px', color: '#FFF', marginLeft: '10px'}} onClick={addTextButton}>Add</Button>
        </Box>
        <Box>
            {list!=[] && list.map((data, i) => {
              return(
                <>
                <p key={i} style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{background: '#c7c7c7', borderRadius: '10px', padding: '20px 20px', color: '#333', margin: '10px', width: '300px'}}>
                        {data} - ({moment().format('LLL')})
                  </div>
                  <Button style={{background: 'red', padding: '10px 20px', color: '#FFF', marginLeft: '10px'}} onClick={() => removeList(i)}>Remove</Button>
                </p>
                </>
              )
            })}
            {list.length>=1 &&
              <Button style={{background: 'red', padding: '10px 20px', color: '#FFF', margin: '10px'}} onClick={()=>{
                setList([])
              }}>Remove All</Button>     
            }
          </Box>
      </Box>
    </Grid>

    // <Grid sx={{display: "flex", justifyContent: "center", alignItems: 'center', backgroundColor: "#FFF", color: "#FFF", marginTop: '20px', borderRadius: '10px', boxShadow: '0 0 6px rgba(51, 51, 51, 0.5)'}}>
    //       <Grid md={12}>
    //         
    //         <Box style={{padding: '20px'}} md={12}>
    //           <input style={{padding: '10px 20px', color: "#333", boxShadow: '0 0 6px rgba(51, 51, 51, 0.5)'}} placeholder='New todolist' value={addText} onChange={(e) => {setAddText(e.target.value)}}/>
    //           <Button style={{background: 'green', padding: '10px 20px', color: '#FFF', marginLeft: '10px'}} onClick={addTextButton}>Add</Button>
    //         </Box>
    //         <Box>
    //           {list!=[] && list.map((data, i) => {
    //             return(
    //               <>
    //               <p key={i} style={{display: 'flex', alignItems: 'center'}}>
    //                 <div style={{background: '#c7c7c7', borderRadius: '10px', padding: '20px 20px', color: '#333', margin: '10px', width: '300px'}}>
    //                       {data}
    //                 </div>
    //                 <Button style={{background: 'red', padding: '10px 20px', color: '#FFF', marginLeft: '10px'}} onClick={() => removeList(i)}>Remove</Button>
    //               </p>
    //               </>
    //             )
    //           })}
    //           {list.length>=1 &&
    //             <Button style={{background: 'red', padding: '10px 20px', color: '#FFF', margin: '10px'}} onClick={()=>{
    //               setList([])
    //             }}>Remove All</Button>     
    //           }
    //         </Box>
    //       </Grid>
    // </Grid>
  );
}

export default SignUpPage;
