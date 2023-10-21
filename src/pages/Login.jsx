import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/authSlice";

function Login() {
  /* Utils */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* Handler */
  const handleLogin = () => {
    // if correct credentials, set user
    dispatch(setUser({ user: "51345" }));
    navigate("/");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
      <Box
        border="1px solid"
        borderColor="blackAlpha.400"
        padding="3rem 5rem"
        display="flex"
        flexDir="column"
        alignItems="center"
        gap="1rem"
        boxShadow="lg"
        w="20rem"
      >
        <Text textAlign="center" fontWeight="bold" fontSize="sm">
          App Name
        </Text>

        <Input type="password" w="18rem" autoFocus />
        <Button colorScheme="blue" w="8rem" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
