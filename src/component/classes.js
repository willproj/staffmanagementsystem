import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    loginCard:{
        display: 'flex',
        justifyContent:'center',
        flexDirection:'column',
        width:500,
        height:450,
        margin:'auto',
        marginTop:150
    },

    regCard:{
        display: 'flex',
        justifyContent:'center',
        flexDirection:'column',
        width:500,
        height:550,
        margin:'auto',
        marginTop:150
    },

    title:{
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:40,
    },

    input:{
        width:400,
        height:50,
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:40,
    },

    bt:{
        width:200,
        height:50,
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:10,
    },

    link:{
        marginLeft:'auto',
        marginRight:'auto',
    }
  });

export default useStyles;