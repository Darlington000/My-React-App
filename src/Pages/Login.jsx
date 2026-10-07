import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const C = {
  navy: "#0b1f4d",
  blue: "#1565c0",
  ink: "#1b2333",
  muted: "#5b6577",
  page: "#f5f7fb",
};

const perks = [
  "Continue your courses",
  "Track your progress",
  "Access class materials",
];

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = {};
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      found.email = "Enter a valid email address";
    if (!values.password) found.password = "Enter your password";
    setErrors(found);
    if (Object.keys(found).length) return;

    // TODO: call your login API here, then redirect (e.g. navigate("/dashboard"))
    console.log("Login:", { email: values.email, remember: values.remember });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        bgcolor: C.page,
      }}
    >
      {/* Left panel */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          p: 8,
          color: "#fff",
          background: `linear-gradient(135deg, ${C.navy} 0%, ${C.blue} 100%)`,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2 }}
        >
          Welcome back
        </Typography>
        <Typography
          sx={{
            opacity: 0.9,
            mb: 4,
            fontSize: "1.1rem",
            maxWidth: 420,
            lineHeight: 1.7,
          }}
        >
          Log in to Our Digital Skills Academy and pick up where you stopped.
        </Typography>
        <Stack spacing={2}>
          {perks.map((p) => (
            <Stack key={p} direction="row" spacing={1.5} alignItems="center">
              <CheckCircleIcon sx={{ color: "#81d4fa" }} />
              <Typography>{p}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      {/* Form */}
      <Box sx={{ display: "grid", placeItems: "center", p: { xs: 3, sm: 6 } }}>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ width: "100%", maxWidth: 420 }}
        >
          <Link
            href="/"
            underline="hover"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              mb: 3,
              color: "text.secondary",
            }}
          >
            <ArrowBackIcon fontSize="small" /> Back to home
          </Link>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: 700, color: C.navy, mb: 1 }}
          >
            Log in
          </Typography>
          <Typography sx={{ color: C.muted, mb: 4 }}>
            Enter your details to continue.
          </Typography>

          <Stack spacing={2.5}>
            <TextField
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type={show ? "text" : "password"}
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={show ? "Hide password" : "Show password"}
                      onClick={() => setShow(!show)}
                      edge="end"
                    >
                      {show ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    checked={values.remember}
                    onChange={handleChange}
                  />
                }
                label="Remember me"
              />
              <Link href="/forgot-password" underline="hover" variant="body2">
                Forgot password?
              </Link>
            </Stack>

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                bgcolor: C.blue,
                borderRadius: 10,
                py: 1.4,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Log in
            </Button>

            <Typography
              variant="body2"
              sx={{ textAlign: "center", color: C.muted }}
            >
              New here?{" "}
              <Link href="/register" underline="hover" sx={{ fontWeight: 600 }}>
                Create an account
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
