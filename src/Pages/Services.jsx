import React from "react";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

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

const grid = (md) => ({
  display: "grid",
  gap: 3,
  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md },
});

const programs = [
  {
    icon: <CodeIcon />,
    title: "Fullstack Development",
    text: "Build complete web apps, from the screen your users see to the database behind it.",
    duration: "4 months",
    level: "Beginner friendly",
    topics: ["HTML & CSS", "JavaScript", "React", "Node.js", "Databases"],
  },
  {
    icon: <DesignServicesIcon />,
    title: "UI/UX Design",
    text: "Learn to research users, plan screens and design products people find easy to use.",
    duration: "3 months",
    level: "Beginner friendly",
    topics: ["User research", "Wireframes", "Figma", "Prototyping"],
  },
  {
    icon: <BrushIcon />,
    title: "Graphics Design",
    text: "Create logos, social media graphics and print designs that clients will pay for.",
    duration: "3 months",
    level: "Beginner friendly",
    topics: ["Branding", "Logo design", "Social media", "Print"],
  },
];

const extras = [
  {
    icon: <SchoolIcon />,
    title: "One-on-one mentoring",
    text: "Get personal guidance on your projects and career path.",
  },
  {
    icon: <LaptopMacIcon />,
    title: "Website design for businesses",
    text: "We build simple, professional websites for small businesses.",
  },
  {
    icon: <BusinessCenterIcon />,
    title: "Corporate training",
    text: "Custom digital skills training for your team or organisation.",
  },
];

function IconBadge({ children }) {
  return (
    <Box
      sx={{
        width: 52,
        height: 52,
        borderRadius: 2,
        display: "grid",
        placeItems: "center",
        bgcolor: C.pale,
        color: C.blue,
        mb: 2,
      }}
    >
      {children}
    </Box>
  );
}

export default function Services() {
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
            Our Services
          </Typography>
          <Typography
            sx={{ fontSize: "1.1rem", opacity: 0.9, lineHeight: 1.7 }}
          >
            Practical training and digital services for students, businesses and
            teams.
          </Typography>
        </Container>
      </Box>

      {/* Programs */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 700, color: C.navy, mb: 1 }}
        >
          Training programs
        </Typography>
        <Typography
          sx={{ color: C.muted, mb: 5, maxWidth: 560, lineHeight: 1.7 }}
        >
          Each program is hands-on and ends with projects you can add to your
          portfolio.
        </Typography>

        <Box sx={grid("repeat(3, 1fr)")}>
          {programs.map((p) => (
            <Box
              key={p.title}
              sx={{
                bgcolor: "#fff",
                border: "1px solid #e3e9f3",
                borderRadius: 3,
                p: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <IconBadge>{p.icon}</IconBadge>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {p.title}
              </Typography>
              <Typography sx={{ color: C.muted, lineHeight: 1.7, mb: 2 }}>
                {p.text}
              </Typography>

              <Stack spacing={1} sx={{ mb: 2, color: C.muted }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <ScheduleIcon fontSize="small" />{" "}
                  <Typography variant="body2">{p.duration}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <SignalCellularAltIcon fontSize="small" />{" "}
                  <Typography variant="body2">{p.level}</Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                flexWrap="wrap"
                useFlexGap
                spacing={1}
                sx={{ mb: 3, flexGrow: 1, alignContent: "flex-start" }}
              >
                {p.topics.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{ bgcolor: C.pale, color: C.blue, fontWeight: 600 }}
                  />
                ))}
              </Stack>

              <Button
                href="/register"
                variant="contained"
                sx={{
                  bgcolor: C.blue,
                  borderRadius: 10,
                  py: 1.2,
                  textTransform: "none",
                }}
              >
                Enroll now
              </Button>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Extra services */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, color: C.navy, mb: 5 }}
          >
            More ways we can help
          </Typography>
          <Box sx={grid("repeat(3, 1fr)")}>
            {extras.map((e) => (
              <Box key={e.title}>
                <IconBadge>{e.icon}</IconBadge>
                <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                  {e.title}
                </Typography>
                <Typography sx={{ color: C.muted, lineHeight: 1.7 }}>
                  {e.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{ bgcolor: "#4aa9f8", color: "#fff", py: 8, textAlign: "center" }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            Not sure which program fits you?
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Talk to us and we will help you choose.
          </Typography>
          <Button
            href="/contact"
            variant="contained"
            sx={{
              bgcolor: "#000",
              borderRadius: 10,
              px: 4,
              py: 1.2,
              textTransform: "none",
              "&:hover": { bgcolor: "#222" },
            }}
          >
            Contact us
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
