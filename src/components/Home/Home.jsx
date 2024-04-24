import styled from "styled-components";
import { motion } from "framer-motion";

const HomeContainer = styled(motion.div)`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`;

const Home = () => {
 return (
  <HomeContainer
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
  >
   <h1>Welcome to My Portfolio</h1>
  </HomeContainer>
 );
};

export default Home;
