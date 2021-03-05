import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import axios from 'axios';
import { Grid, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 487,
    flexWrap: 'wrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  paper : {
    margin: "30px auto",
    padding: 20,
},
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function VoteParty() {
  const classes = useStyles();

  const [ partyList, setPartyList] = useState([])

  useEffect(() => {
    refreshPartyList();
}, [])
debugger;
  const partyAPI = (url = 'http://localhost:5000/api/party/') => {
      return {
          fetchAll: () => axios.get(url),
          update: (id, updatedRecord) => axios.put(url + id, updatedRecord)
      }
  }
debugger;
  const refreshPartyList = () => {
      partyAPI().fetchAll()
      .then(res => setPartyList(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={1.0}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {partyList.map((tile) => (
            <GridListTile key={tile.logo}>
                <Grid item xs = {2}>
                    <img src={tile.logoSrc} alt={tile.candidateNo} />
                </Grid>
                <Grid item >
                    <div>
                    {tile.partyName}    
                    </div>
                    <GridListTileBar
                    title={tile.partyName}
                    subtitle={<span>by: {tile.color}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${tile.partyName}`} className={classes.icon}>
                        <InfoIcon />
                        </IconButton>
                    }
                    />
                </Grid>
            </GridListTile>
        ))}
      </GridList>
    </div>

    // <Container>
    //     <Paper className={classes.paper} elevation={3} >
    //         <Grid container spacing={4}>
    //             {partyList.map((tile) => (
    //                 <GridListTile>
    //                     <div>
    //                         <img src={tile.logoSrc} alt={tile.candidateNo} />
    //                         <div>
    //                         {tile.partyName}
    //                         </div>
    //                     </div>
    //                 </GridListTile>
    //             ))}
    //         </Grid>
    //     </Paper>
    // </Container>
  );
}