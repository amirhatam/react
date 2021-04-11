import { Drawer, List, ListItem } from '@material-ui/core'
import React from 'react'

function SideDrawer(props) {
    const {open, onClose} = props
    return (
       <Drawer anchor="left" open={open} onClose={()=> onClose(false)}>
           <List component="nav">
               <ListItem button onClick={() => console.log("Featured")}>
                   Times Left
               </ListItem>
               <ListItem button onClick={() => console.log("Venue NFO")}>
                   Consert Info
               </ListItem>
               <ListItem button onClick={() => console.log("Highlights")}>
                   Prices
               </ListItem>
               <ListItem button onClick={() => console.log("Location")}>
                   Address
               </ListItem>
           </List>
       </Drawer>
    )
}

export default SideDrawer
