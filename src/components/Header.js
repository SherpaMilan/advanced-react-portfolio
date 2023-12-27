// Header.js
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import ProjectsSection from "./ProjectsSection";
import LandingSection from "./ContactMeSection";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const boxRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos;

    if (isVisible !== visible) {
      setVisible(isVisible);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const boxStyle = {
    transition: "transform 300ms ease-in-out",
    transform: visible ? "translateY(0)" : "translateY(-200px)",
  };

  const handleClick = (anchor) => () => {
    const element = document.getElementById(anchor);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Router>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              {/* Add social media links based on the `socials` data */}
              <HStack spacing={4}>
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                ))}
              </HStack>
            </nav>

            <nav>
              <HStack spacing={8}>
                {/* Add links to Projects and Contact me section */}
                <a
                  href="#projects-section"
                  onClick={handleClick("projects-section")}
                >
                  Projects
                </a>
                <a
                  href="#contactme-section"
                  onClick={handleClick("contactme-section")}
                >
                  Contact Me
                </a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>

      <Routes>
        <Route path="/projects-section" element={<ProjectsSection />} />
        <Route path="/contactme-section" element={<LandingSection />} />
      </Routes>
    </Router>
  );
};

export default Header;
