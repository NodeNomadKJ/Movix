import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { database } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const defaultTheme = createTheme();

export default function Account() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
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
            Account
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 30,
              mb: 4,
              backgroundColor: "red",
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: "darkred",
              },
            }}
            onClick={() => logout()}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
