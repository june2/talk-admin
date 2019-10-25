import React, { Component } from 'react';
import { Responsive } from 'react-admin';

import MonthlyRevenue from './MonthlyRevenue';
import NewCustomers from './NewCustomers';

const styles = {
  flex: { display: 'flex' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  leftCol: { flex: 1, marginRight: '1em' },
  rightCol: { flex: 1, marginLeft: '1em' },
  singleCol: { marginTop: '2em', marginBottom: '2em' },
};

class Dashboard extends Component {
  state = {};

  componentDidMount() {

  }

  render() {
    const {
      nbNewCustomers,
      newCustomers,
      revenue,
    } = this.state;
    return (
      <Responsive
        medium={
          <div style={styles.flex}>
            <div style={styles.leftCol}>
              <div style={styles.flex}>
                <MonthlyRevenue value={revenue} />
              </div>
            </div>
            <div style={styles.rightCol}>
              <div style={styles.flex}>
                <NewCustomers
                  nb={nbNewCustomers}
                  visitors={newCustomers}
                />
              </div>
            </div>
          </div>
        }
      />
    );
  }
}

export default Dashboard;
