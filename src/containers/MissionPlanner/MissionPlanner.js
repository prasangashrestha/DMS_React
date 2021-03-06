import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getUsers } from '../../store/actions/users'
import { Route, Switch, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MissionLists from '../../components/MissionPlanner/MissionLists';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#E7E7E7',
    
  }
}));

const MissionPlanner = () => {

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} >
        <Switch>
          {/* <Route path="/admin/mission planner/list-users" render={(props) => <ListUsers {...props} users1={users1} users2={users2}/>}/> */}
          {/* <Route exact path="/admin/missionplanner/create-user" component={CreateUser} /> */}
          <Route exact path="/admin/missionplanner/missionLists" component={MissionLists} />
          <Redirect from="/admin/missionplanner" to="/admin/missionplanner/missionLists" />
        </Switch>
      </Grid>

    </div>
  )
}


const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, { getUsers })(MissionPlanner);
