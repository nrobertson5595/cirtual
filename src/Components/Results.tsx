import { connect } from "react-redux";
import { Column, Table} from 'react-virtualized';
import 'react-virtualized/styles.css';
import {setUsersAction} from '../Reducers/UserDataActions'
import './Form.css'

const Results = ({users, setUsers}) => { 
          return (
        <div className='App'>
           
   <Table
    width={1200}
    height={300}
    headerHeight={20}
    rowHeight={30}
    rowCount={users.length}
    rowGetter={({index}) => users[index]}>
    <Column label="firstName" dataKey="firstName" width={200} />
    <Column label="lastName" dataKey="lastName" width={200} />
    <Column label="email" dataKey="email" width={200} />
    <Column label="phoneNumber" dataKey="phoneNumber" width={300} />
    <Column label="developerType" dataKey="developerType" width={300} />
    <Column label="education" dataKey="education" width={300} />
    <Column label="relocate" dataKey="relocate" width={200} />
    <Column label="question" dataKey="question" width={200} />
    <Column label="resume" dataKey="resume" width={200} />

  </Table>
 
        </div>
    );
};

const mapStateToProps = (state) => ({
    users: state.users.users,
  });

  const mapDispatchToProps = {
    setUsers: setUsersAction,
    
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Results);