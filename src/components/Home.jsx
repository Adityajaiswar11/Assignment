import { Grid, ListItem, ListItemAvatar} from '@mui/material'
import React from 'react'
import UserForm from './UserForm'
import ListUser from './ListUser'

const Home = () => {
  return (
          <Grid container spacing={2}>
          <Grid item xs={12} md={5} >
            <ListItem><UserForm/></ListItem>
          </Grid>
          <Grid item xs={12} md={7}>
            <ListItemAvatar><ListUser></ListUser></ListItemAvatar>
          </Grid>
          
          
        </Grid>
  )
}

export default Home