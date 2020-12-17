import * as React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import {setUsersAction} from '../Reducers/UserDataActions'
import './Form.css'
import {relocationOptions, educationOptions, developerOptions} from './options'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      },
  },
}));

const Form = ({users, setUsers}) => {
    const classes = useStyles();
    const [lastName, setLastName] = React.useState('Last Name')
    const [firstName, setFirstName] = React.useState('First Name')
    const [email, setEmail] = React.useState('Email')
    const [phoneNumber, setPhoneNumber] = React.useState('Phone Number')
    const [relocation, setRelocation] = React.useState('')
    const [education, setEducation] = React.useState('')
    const [developer, setDeveloper] = React.useState('')
    const [question, setQuestion] = React.useState('Where do you see yourself in 5 years... Please give a few sentences')
    const [resume, setResume] = React.useState('')
    

    React.useEffect(() => {
      //setData(users);
      console.log(users)
    }, [users]);
    const handlefirstName = (event) => {
      setFirstName(event.target.value);
    };
    const handleLastName = (event) => {
      setLastName(event.target.value);
    };
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };
    const handlePhoneNumber = (event) => {
      setPhoneNumber(event.target.value);
    };

const handleRelocation = (event) => {
    setRelocation(event.target.value);
  };
  const handleEducation = (event) => {
    setEducation(event.target.value);
  };
  const handleDeveloper = (event) => {
    setDeveloper(event.target.value);
  };
  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };
  const handleResume = (event) => {
    setResume(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const newApp = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber, 
      developerType: developer,
      education: education, 
      relocate: relocation, 
      question: question, 
      Resumé: resume
    };
    setUsers(users.concat(newApp))
    }

    const handleClear = (event) => {
    event.preventDefault();
    alert('Are you sure you want to Clear all Fields?')
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('');
    setQuestion('')
  }


  return (
    <div className="App">
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
     <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="First Name"
          value={firstName}
          onChange={handlefirstName}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Last Name"
          variant="outlined"
          value={lastName}
          onChange={handleLastName}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Email"
          variant="outlined"
          value={email}
          onChange={handleEmail}
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />
        <br />
         <TextField
          id="outlined-select-currency-native"
          select
          label="Developer Type"
          value={developer}
          onChange={handleDeveloper}
          SelectProps={{
            native: true,
          }}
          helperText="Please select Highest level of Education"
          variant="outlined"
        >
          {developerOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
         <TextField
          id="outlined-select-currency-native"
          select
          label="Education Level"
          value={education}
          onChange={handleEducation}
          SelectProps={{
            native: true,
          }}
          helperText="Please select Highest level of Education"
          variant="outlined"
        >
          {educationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      
         <TextField
          id="outlined-select-currency-native"
          select
          label="Able to Relocate"
          value={relocation}
          onChange={handleRelocation}
          SelectProps={{
            native: true,
          }}
          helperText="Please select Yes or No"
          variant="outlined"
        >
          {relocationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <br />
        
         <TextField
          id="outlined-multiline-static"
          label="Multi-line answer"
          multiline
          rows={4}
          defaultValue="Where do you see yourself in 5 years..."
          variant="outlined"
          style={{width: '75ch'}}
          helperText='Where do you see yourself in 5 years? Please give brief description'
          onChange={handleQuestion}
          value={question}
          
        />
        <br/>
      <TextField
          name='upload-file'
          id="outlined-required"
          variant="outlined"
          type="file"
          style={{width: '40ch'}}
          helperText="Please upload resume"
          onChange={handleResume}
          value={resume}
        />
       </div>
      <Button variant="contained" onClick={handleClear}>Clear</Button>
     <Button variant="contained" color="primary" type="submit">
       Submit
     </Button>
     </form>
     </div>
   )}

const mapStateToProps = (state) => ({
    users: state.users.users,
  });

  const mapDispatchToProps = {
    setUsers: setUsersAction,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Form);