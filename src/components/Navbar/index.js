import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import React from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { ThemeProvider, useTheme } from "styled-components";
import { Bio } from "../../data/constants";
import { darkTheme, lightTheme } from "../../utils/Themes";
import {
  ButtonContainer,
  LinkedInButton,
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  Span,
} from "./NavbarStyledComponent";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Navbar = ({ toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const [darkMode] = React.useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                marginBottom: "20;",
                cursor: "pointer",
              }}
            >
              <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
            </a>
          </NavLogo>
          <MobileIcon>
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </MobileIcon>
          <NavItems>
            <NavLink href="#about">AboutMe</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavItems>
          {/* <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer> */}
          <ButtonContainer>
            <LinkedInButton href={Bio.linkedin} target="_blank">
              LinkedIn Profile
            </LinkedInButton>
          </ButtonContainer>
          <ButtonContainer>
            <FormControlLabel
              // control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked  />}
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  checked={theme === darkTheme}
                  onChange={toggleDarkMode}
                />
              }
            />
          </ButtonContainer>
          {isOpen && (
            <MobileMenu isOpen={isOpen}>
              <MobileLink
                href="#about"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                About
              </MobileLink>
              <MobileLink
                href="#skills"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Skills
              </MobileLink>
              <MobileLink
                href="#experience"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Experience
              </MobileLink>
              <MobileLink
                href="#projects"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Projects
              </MobileLink>
              <MobileLink
                href="#education"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Education
              </MobileLink>
              <MobileLink
                href="#contact"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Contact
              </MobileLink>
              {/* <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton> */}
              <LinkedInButton
                style={{
                  padding: "10px 16px",
                  background: `${theme.primary_blue}`,
                  color: "white",
                  width: "max-content",
                }}
                href={Bio.linkedin}
                target="_blank"
              >
                LinkedIn Profile
              </LinkedInButton>
              <FormControlLabel
                // control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked  />}
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    checked={theme === darkTheme}
                    onChange={toggleDarkMode}
                  />
                }
              />
            </MobileMenu>
          )}
        </NavbarContainer>
      </Nav>
    </ThemeProvider>
  );
};

export default Navbar;
