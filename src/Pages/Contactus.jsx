import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

import Navbar from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const C = {
  navy: "#0b1f4d",
  blue: "#1565c0",
  pale: "#eaf3fd",
  ink: "#1b2333",
  muted: "#5b6577",
  page: "#f5f7fb",
};

const details = [
  { icon: <EmailIcon />, label: "Email", value: "darlingben@gmail.com" },
  { icon: <PhoneIcon />, label: "Phone", value: "+234 813 817 7632" },
  { icon: <LocationOnIcon />, label: "Location", value: "Owerri, Imo State" },
];

const empty = { name: "", email: "", phone: "", message: "" };

export default function Contactus() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSent(false);
  };

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Enter your name";
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      e.email = "Enter a valid email address";
    if (values.message.trim().length < 10)
      e.message = "Write at least 10 characters";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    // TODO: send `values` to your backend or an email service (e.g. EmailJS)
    console.log("Contact form:", values);
    setSent(true);
    setValues(empty);
  };

  return (
    <Box sx={{ bgcolor: C.page, color: C.ink }}>
      <Navbar />

      {/* Banner */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${C.navy} 0%, ${C.blue} 100%)`,
          color: "#fff",
          py: { xs: 8, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
            }}
          >
            Contact us
          </Typography>
          <Typography
            sx={{ fontSize: "1.1rem", opacity: 0.9, lineHeight: 1.7 }}
          >
            Questions about a program or enrolment? Send us a message.
          </Typography>
        </Container>
      </Box>

      {/* Details + form */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.5fr" },
            alignItems: "start",
          }}
        >
          {/* Left: details */}
          <Stack spacing={2}>
            {details.map((d) => (
              <Box
                key={d.label}
                sx={{
                  bgcolor: "#fff",
                  border: "1px solid #e3e9f3",
                  borderRadius: 3,
                  p: 3,
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: C.pale,
                    color: C.blue,
                    flexShrink: 0,
                  }}
                >
                  {d.icon}
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="body2" sx={{ color: C.muted }}>
                    {d.label}
                  </Typography>
                  <Typography sx={{ fontWeight: 600, wordBreak: "break-word" }}>
                    {d.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>

          {/* Right: form */}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              bgcolor: "#fff",
              border: "1px solid #e3e9f3",
              borderRadius: 3,
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, color: C.navy, mb: 3 }}
            >
              Send us a message
            </Typography>

            {sent && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Message sent. We will reply as soon as we can.
              </Alert>
            )}

            <Stack spacing={2.5}>
              <Box
                sx={{
                  display: "grid",
                  gap: 2.5,
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                }}
              >
                <TextField
                  label="Full name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  fullWidth
                />
              </Box>
              <TextField
                label="Phone (optional)"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                multiline
                rows={5}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  bgcolor: C.blue,
                  borderRadius: 10,
                  py: 1.3,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Send message
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
