import React, { useState } from "react";
import { Box, Card, CardContent, Typography, TextField, Button, Tabs, Tab } from "@mui/material";

export default function AuthCard() {
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
            backgroundImage: `url("https://via.placeholder.com/300")`, // Replace with your image URL
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
            <Tab label="Login" />
            <Tab label="Signup" />
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
                <TextField label="Email" type="email" fullWidth margin="normal" />
                <TextField label="Password" type="password" fullWidth margin="normal" />
                <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
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
                <TextField label="Name" type="text" fullWidth margin="normal" />
                <TextField label="Email" type="email" fullWidth margin="normal" />
                <TextField label="Password" type="password" fullWidth margin="normal" />
                <TextField label="Confirm Password" type="password" fullWidth margin="normal" />
                <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
                  Signup
                </Button>
              </>
            )}
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
