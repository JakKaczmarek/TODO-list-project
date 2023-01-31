import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { makeStyles } from "tss-react/mui";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     customTextField: {
//       "&.Mui-focused": {
//         border: "2px solid grey",
//       },
//     },
//   })
// );

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "abc@example.com" &&
      e.target.password.value === "secret"
    ) {
      navigate("/home");
    } else {
      alert("Wrong email or password combination");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://placedog.net/640/480?random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "grey" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldSet": {
                      borderColor: "gray",
                    },
                  },
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
                autoComplete="current-password"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldSet": {
                      borderColor: "gray",
                    },
                  },
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "black" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ color: "black", textDecorationColor: "grey" }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ color: "black", textDecorationColor: "grey" }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// OLD LOGIN FORM - SIMPLE ONE

// dodac login page z obsluga zlego inputu.  DONE?
// Bootstrap / materialUI  DONE

//   function onSubmit(e) {
//     e.preventDefault();

//     console.log(e.target.email.value);

//     if (!e.target.email.value) {
//       alert("Email is required");
//     } else if (!e.target.password.value) {
//       alert("Password is required");
//     } else if (
//       e.target.email.value === "abc@example.com" &&
//       e.target.password.value === "secret"
//     ) {
//       navigate("/home");
//     } else {
//       alert("Wrong email or password combination");
//     }
//   }

//   return (
//     <form onSubmit={onSubmit}>
//       <label>email</label>
//       <input type="email" name="email" placeholder="nome@email.com.br" />
//       <label>password</label>
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// }
