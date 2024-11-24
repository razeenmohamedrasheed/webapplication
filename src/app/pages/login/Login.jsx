import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import chefimage from '../../assets/images/ChefImage.jpeg'
import { Box, Tab, Tabs, TextField } from '@mui/material';
import { useState } from 'react';

export default function Login() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newIndex) => {
      setTabIndex(newIndex);
    };
    return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 800,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {/* Side Image */}
          <Box
            sx={{
              width: "40%",
              backgroundImage: `url(${chefimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
  
          {/* Form Section */}
          <Box
            sx={{
              width: "60%",
              padding: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Tabs for Login and Signup */}
            <Tabs value={tabIndex} onChange={handleTabChange} centered>
              <Tab label="Login" color='secondary'/>
              <Tab label="Signup" color='secondary'/>
            </Tabs>
  
            {/* Dynamic Form */}
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {tabIndex === 0 ? (
                /* Login Form */
                <>
                  <Typography variant="h5" component="div" gutterBottom>
                    Login
                  </Typography>
                  <TextField label="Email" type="email" color='secondary' fullWidth margin="normal" />
                  <TextField label="Password" type="password" color='secondary' fullWidth margin="normal" />
                  <Button variant="contained" color='secondary' fullWidth sx={{ marginTop: 2 }}>
                    Login
                  </Button>
                  <Button size="small" sx={{ marginTop: 1 }}>
                    Forgot Password?
                  </Button>
                </>
              ) : (
                /* Signup Form */
                <>
                  <Typography variant="h5" component="div" gutterBottom>
                    Signup
                  </Typography>
                  <TextField label="Name" type="text" color='secondary' fullWidth margin="normal" />
                  <TextField label="Email" type="email" color='secondary' fullWidth margin="normal" />
                  <TextField label="Password" type="password" color='secondary' fullWidth margin="normal" />
                  <TextField label="Confirm Password" type="password" color='secondary' fullWidth margin="normal" />
                  <Button variant="contained" color='secondary' fullWidth sx={{ marginTop: 2 }}>
                    Signup
                  </Button>
                </>
              )}
            </CardContent>
          </Box>
        </Card>
      </Box>
    )
}
