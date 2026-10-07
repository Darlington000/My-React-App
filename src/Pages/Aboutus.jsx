import React from "react";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import Navbar from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ownerImg from "../assets/pro.jpg";
const OWNER_IMG = ownerImg;

const C = {
  navy: "#0b1f4d",
  blue: "#1565c0",
  sky: "#29b6f6",
  pale: "#eaf3fd",
  ink: "#1b2333",
  muted: "#5b6577",
  page: "#f5f7fb",
};

const grid = (cols) => ({
  display: "grid",
  gap: 3,
  gridTemplateColumns: { xs: "1fr", sm: cols.sm, md: cols.md },
});

const card = {
  bgcolor: "#fff",
  borderRadius: 3,
  p: 4,
  border: "1px solid #e3e9f3",
};

const stats = [
  { value: "500+", label: "Students trained" },
  { value: "3", label: "Core programs" },
  { value: "5+", label: "Years of teaching" },
];

const programs = [
  {
    icon: <CodeIcon />,
    title: "Fullstack Development",
    text: "Build complete web apps from the screen to the database.",
    topics: ["HTML & CSS", "JavaScript", "React", "Node.js"],
  },
  {
    icon: <DesignServicesIcon />,
    title: "UI/UX Design",
    text: "Design products that are clear, usable and good to look at.",
    topics: ["User research", "Wireframes", "Figma", "Prototyping"],
  },
  {
    icon: <BrushIcon />,
    title: "Graphics Design",
    text: "Create brand and marketing visuals clients will pay for.",
    topics: ["Branding", "Logos", "Social media", "Print"],
  },
];

const steps = [
  { title: "Pick a program", text: "Choose the skill that fits your goal." },
  { title: "Learn live", text: "Join small, instructor-led classes." },
  { title: "Build real projects", text: "Practice on work you can show." },
  { title: "Get work-ready", text: "Finish with a portfolio and guidance." },
];

const reasons = [
  {
    icon: <LaptopMacIcon />,
    title: "Hands-on classes",
    text: "Most of every session is spent building, not listening.",
  },
  {
    icon: <GroupsIcon />,
    title: "Small groups",
    text: "Each student gets attention and quick feedback.",
  },
  {
    icon: <WorkspacePremiumIcon />,
    title: "Portfolio included",
    text: "You leave with projects to show clients and employers.",
  },
  {
    icon: <SupportAgentIcon />,
    title: "Ongoing support",
    text: "Ask questions after class and keep learning with us.",
  },
];

function SectionTitle({ title, subtitle, center }) {
  return (
    <Box
      sx={{
        mb: 5,
        textAlign: center ? "center" : "left",
        maxWidth: 640,
        mx: center ? "auto" : 0,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: 700, color: C.navy, mb: 1 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ color: C.muted, lineHeight: 1.7 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

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

export default function AboutUs() {
  return (
    <Box sx={{ bgcolor: C.page, color: C.ink }}>
      <Navbar />

      {/* 1. HERO */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${C.navy} 0%, ${C.blue} 100%)`,
          color: "#fff",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gap: 6,
              alignItems: "center",
              gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" },
            }}
          >
            <Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.2rem", md: "3.2rem" },
                  lineHeight: 1.15,
                  mb: 2,
                }}
              >
                We teach digital skills that lead to real work
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  opacity: 0.9,
                  maxWidth: 520,
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                Our Digital Skills Academy in Owerri trains students in
                fullstack development, UI/UX and graphics design.
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#fff",
                    color: C.navy,
                    borderRadius: 10,
                    px: 4,
                    py: 1.3,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { bgcolor: C.pale },
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,.6)",
                    borderRadius: 10,
                    px: 4,
                    py: 1.3,
                    textTransform: "none",
                    "&:hover": { borderColor: "#fff" },
                  }}
                >
                  Contact us
                </Button>
              </Stack>
            </Box>

            <Box sx={{ display: "grid", gap: 2 }}>
              {stats.map((s) => (
                <Box
                  key={s.label}
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 2,
                    bgcolor: "rgba(255,255,255,.1)",
                    border: "1px solid rgba(255,255,255,.2)",
                    borderRadius: 3,
                    px: 3,
                    py: 2,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "2rem", fontWeight: 700, minWidth: 90 }}
                  >
                    {s.value}
                  </Typography>
                  <Typography sx={{ opacity: 0.9 }}>{s.label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. MISSION AND VISION */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <SectionTitle
          title="Why we exist"
          subtitle="Too many students finish school without the digital skills employers and clients look for. We close that gap."
        />
        <Box sx={grid({ sm: "1fr", md: "1fr 1fr" })}>
          <Box sx={card}>
            <IconBadge>
              <FlagIcon />
            </IconBadge>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Our mission
            </Typography>
            <Typography sx={{ color: C.muted, lineHeight: 1.8 }}>
              To give students practical digital skills they can use to earn,
              build and grow, wherever they start from.
            </Typography>
          </Box>
          <Box sx={card}>
            <IconBadge>
              <VisibilityIcon />
            </IconBadge>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Our vision
            </Typography>
            <Typography sx={{ color: C.muted, lineHeight: 1.8 }}>
              A community where every learner in Owerri and beyond can compete
              in the digital economy.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* 3. PROGRAMS */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionTitle
            center
            title="What you can learn"
            subtitle="Three programs, each built around projects you can add to your portfolio."
          />
          <Box sx={grid({ sm: "1fr", md: "repeat(3, 1fr)" })}>
            {programs.map((p) => (
              <Box
                key={p.title}
                sx={{
                  ...card,
                  bgcolor: C.page,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <IconBadge>{p.icon}</IconBadge>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {p.title}
                </Typography>
                <Typography
                  sx={{ color: C.muted, lineHeight: 1.7, mb: 2, flexGrow: 1 }}
                >
                  {p.text}
                </Typography>
                <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
                  {p.topics.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{ bgcolor: C.pale, color: C.blue, fontWeight: 600 }}
                    />
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 4. HOW IT WORKS (a real sequence, so numbered) */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <SectionTitle
          center
          title="How learning works"
          subtitle="From your first class to your first project."
        />
        <Box sx={grid({ sm: "1fr 1fr", md: "repeat(4, 1fr)" })}>
          {steps.map((s, i) => (
            <Box key={s.title} sx={{ ...card, p: 3 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: C.blue,
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {i + 1}
              </Box>
              <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                {s.title}
              </Typography>
              <Typography sx={{ color: C.muted, lineHeight: 1.6 }}>
                {s.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* 5. WHY CHOOSE US */}
      <Box sx={{ bgcolor: C.pale, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionTitle title="Why students choose us" />
          <Box sx={grid({ sm: "1fr 1fr", md: "repeat(4, 1fr)" })}>
            {reasons.map((r) => (
              <Box key={r.title}>
                <IconBadge>{r.icon}</IconBadge>
                <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                  {r.title}
                </Typography>
                <Typography sx={{ color: C.muted, lineHeight: 1.6 }}>
                  {r.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 6. OWNER */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gap: 6,
            alignItems: "center",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                width: { xs: 240, md: 300 },
                height: { xs: 320, md: 400 },
                borderRadius: "50%",
                overflow: "hidden",
                background: `linear-gradient(135deg, ${C.blue}, ${C.sky})`,
                boxShadow: "0 12px 32px rgba(21,101,192,.25)",
              }}
            >
              {OWNER_IMG && (
                <Box
                  component="img"
                  src={OWNER_IMG}
                  alt="Founder"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 700, color: C.navy, mb: 2 }}
            >
              Meet the founder
            </Typography>
            <Typography
              sx={{
                color: C.muted,
                lineHeight: 1.9,
                mb: 3,
                fontSize: "1.05rem",
              }}
            >
              Write two or three sentences here about who you are, why you
              started the academy, and what students can expect when they learn
              with you.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: C.blue,
                borderRadius: 10,
                px: 4,
                py: 1.2,
                textTransform: "none",
              }}
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Container>

      {/* 7. CALL TO ACTION */}
      <Box
        sx={{ bgcolor: "#4aa9f8", color: "#fff", py: 8, textAlign: "center" }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            Ready to start your learning journey?
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Join us today and learn practical digital skills that can transform
            your future.
          </Typography>
          <Button
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
            Get Started
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
