'use client';

import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function SignUpPage() {

  const [list, setList] = useState("")

  return (
    <Container Width={300} height={500} sx={{display: "flex", justifyContent: "center", alignItems: 'center', backgroundColor: "#FFF", color: "#FFF", marginTop: '20px', borderRadius: '10px', boxShadow: '0 0 6px rgba(51, 51, 51, 0.5)'}}>
          <Box md={12}>
            <h1 style={{padding: '20px', fontSize: '30px', fontWeight: 900, color: '#000' }}>TODO LIST</h1>
          </Box>
          <Box style={{padding: '20px'}} md={12}>
            <input style={{padding: '10px 20px', color: "#333", boxShadow: '0 0 6px rgba(51, 51, 51, 0.5)'}} placeholder='New todolist' value={list} onChange={(e) => {setList(e.target.value)}}/>
            <Button style={{background: 'green', padding: '10px 20px', color: '#FFF', marginLeft: '10px'}}>Add</Button>
          </Box>
          <Box>
            <ul>
              <li style={{color: '#333'}}>
                {list}
              </li>
            </ul>
          </Box>
    </Container>
  );
}

export default SignUpPage;
