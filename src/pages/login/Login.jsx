import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { database } from "../../utils/firebase";

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const validateForm = () => {
    if (!email || !password) {
      setError("All fields are required");
      return false;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        database,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);

      console.log(user);

      navigate("/");
    } catch (error) {
      setError("Please Enter Valid Credentials.");
      console.error("SignIN error:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4" sx={{ color: "white" }}>
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 6 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                backgroundColor: "white",
                borderRadius: "39px",
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                backgroundColor: "white", 
                borderRadius: "39px",
              }}
            />
            {error && (
              <Typography
                variant="body2"
                color="error"
                sx={{ mt: 1, color: "red" }}
              >
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 12,
                mb: 4,
                backgroundColor: "red",
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "darkred",
                },
              }}
            >
              Log In
            </Button>

            <Box sx={{ display:"flex",justifyContent:"center" }}>
            <Typography sx={{ color: 'white', cursor: 'pointer' }} onClick={()=>navigate('/signup')}>
            Don't have an account? Sign Up
              </Typography>

            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
