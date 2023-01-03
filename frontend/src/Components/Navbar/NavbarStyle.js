import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
     backgroundColor: '#393E46',
     border: '1px solid red',
    //  color: 'blue'
  },
  heading:{
    fontWeight: 'bold',
    padding: '0.2rem 0.4rem'
  }
}));

export default useStyles;
