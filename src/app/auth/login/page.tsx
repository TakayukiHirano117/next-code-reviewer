"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../../../lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onsubmit: SubmitHandler<Inputs> = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // const user = userCredential.user;
        router.push("/");
        // ...
      })
      .catch((error) => {
        // const Code = error.code;
        const Message = error.message;
        setErrorMessage(Message);
      });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="gray.50">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log in to your account</Heading>
        </Stack>
        <Box rounded={"lg"} bg="white" boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <form action="" onSubmit={handleSubmit(onsubmit)}>
              <FormControl id="email" onSubmit={handleSubmit(onsubmit)}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                      message: "This email is invalid.",
                    },
                  })}
                />
                {errors.email && (
                  <Text color="red.400">{errors.email.message}</Text>
                )}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 8,
                      message: "8文字以上入力して下さい",
                    },
                  })}
                />
                {errors.password && (
                  <Text color="red.400">{errors.password.message}</Text>
                )}
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  {/* <Checkbox>Remember me</Checkbox> */}
                  {/* <Text color={"blue.400"}>Forgot password?</Text> */}
                  <Text color={"blue.400"}>
                    Do you wanna register new account? &nbsp;
                    <Link href="/auth/register" className="underline">
                      Go register page.
                    </Link>
                  </Text>
                </Stack>
                {errorMessage && <Text color="red.400">{errorMessage}</Text>}
                <Button type="submit" colorScheme="teal" color={"white"}>
                  Log in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
