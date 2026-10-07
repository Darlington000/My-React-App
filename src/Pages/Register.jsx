import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
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

const courses = ["Fullstack Development", "UI/UX Design", "Graphics Design"];
const perks = [
  "Hands-on, project-based classes",
  "Small groups with quick feedback",
  "A portfolio to show employers",
];

const initial = {
  name: "",
  email: "",
  phone: "",
  course: "",
  password: "",
  confirm: "",
  agree: false,
};

export default function Register() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      e.email = "Enter a valid email address";
    if (!values.phone.trim()) e.phone = "Enter your phone number";
    if (!values.course) e.course = "Choose a program";
    if (values.password.length < 8) e.password = "Use at least 8 characters";
    if (values.confirm !== values.password)
      e.confirm = "Passwords do not match";
    if (!values.agree) e.agree = "You need to accept the terms";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    // TODO: send to your register API (never log passwords in production)
    const { password, confirm, ...safe } = values;
    console.log("Register:", safe);
  };

  const eye = (
    <InputAdornment position="end">
      <IconButton
        aria-label={show ? "Hide password" : "Show password"}
        onClick={() => setShow(!show)}
        edge="end"
      >
        {show ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

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
          Start learning digital skills today
        </Typography>
        <Typography
          sx={{
            opacity: 0.9,
            mb: 4,
            fontSize: "1.1rem",
            maxWidth: 440,
            lineHeight: 1.7,
          }}
        >
          Create your account to enrol at Our Digital Skills Academy.
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
          sx={{ width: "100%", maxWidth: 460 }}
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
            Create account
          </Typography>
          <Typography sx={{ color: C.muted, mb: 4 }}>
            It takes about a minute.
          </Typography>

          <Stack spacing={2.5}>
            <TextField
              label="Full name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
            />

            <Box
              sx={{
                display: "grid",
                gap: 2.5,
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              }}
            >
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
                label="Phone"
                name="phone"
                autoComplete="tel"
                value={values.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                fullWidth
              />
            </Box>

            <TextField
              select
              label="Program"
              name="course"
              value={values.course}
              onChange={handleChange}
              error={!!errors.course}
              helperText={errors.course}
              fullWidth
            >
              {courses.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </TextField>

            <Box
              sx={{
                display: "grid",
                gap: 2.5,
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              }}
            >
              <TextField
                label="Password"
                name="password"
                type={show ? "text" : "password"}
                autoComplete="new-password"
                value={values.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
                InputProps={{ endAdornment: eye }}
              />
              <TextField
                label="Confirm password"
                name="confirm"
                type={show ? "text" : "password"}
                autoComplete="new-password"
                value={values.confirm}
                onChange={handleChange}
                error={!!errors.confirm}
                helperText={errors.confirm}
                fullWidth
              />
            </Box>

            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agree"
                    checked={values.agree}
                    onChange={handleChange}
                  />
                }
                label="I agree to the terms and privacy policy"
              />
              {errors.agree && (
                <FormHelperText error sx={{ ml: 2 }}>
                  {errors.agree}
                </FormHelperText>
              )}
            </Box>

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
              Create account
            </Button>

            <Typography
              variant="body2"
              sx={{ textAlign: "center", color: C.muted }}
            >
              Already have an account?{" "}
              <Link href="/login" underline="hover" sx={{ fontWeight: 600 }}>
                Log in
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
