import React from 'react';
import 'typeface-roboto';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0097a7',
      light: '#9CF7EB',
      dark: '#359389'
    },
    secondary: {
      main: '#B6BFB6',
      light: '#868F86',
      darl: '#E8F2E8',
    },
  },
});


class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
     
    };

    
  }

 

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={3}>
            <Card raised style={{width: '400px'}}>
              <CardContent style={{padding: '40px'}}>
                <form noValidate>
                  <TextField
                    variant="filled"
                    margin="normal"
                    
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    style={{marginBottom: '10px'}}
                  />
                  <TextField
                    variant="filled"
                    margin="normal"
                    
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    style={{marginBottom: '10px'}}
                  />
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ marginTop: '6%', marginBottom: '6%'}}>
                    <Grid xs={6}>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Recordarme"
                      />
                    </Grid>
                    <Grid xs={6}>
                      <Link>
                        Olvide mi contraseña
                      </Link>
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>   
        </Grid> 
            
      </ThemeProvider> 
    )
  }
}

export default withRouter(Login);