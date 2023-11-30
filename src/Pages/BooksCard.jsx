import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Button,
  Text,
  Heading,
  SimpleGrid,
  Flex,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BooksCard = ({ item }) => {
  const history = useNavigate();

  const deleteHandler = async () => {
    try {
      await axios
        .delete(`http://localhost:1000/api/v1/deleteBook/${item._id}`)
        .then((res) => {
          alert(res.data.message);
        })
        .then(() => history("/books"));
      window.location.reload();
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete book.");
    }
  };
  // style={{ minHeight: "117vh" }}
  console.log(item);
  return (
    <div className="cardbook" > 
      {/* {Data &&
        Data.map((item, index) => (
          
        ))} */}
      {/* <div className="cards">
            {item.bookname}
            </div> */}
      <Card
        maxW="sm"
        bgColor={"#232323"}
        h={300}
        borderRadius={8}
        color={"white"}
        borderColor={"white"}
        pl={8}
        pr={5}
        pb={14}
        m={50}
      >
        <CardBody>
          <Image
            src={item.image}
            objectFit={"cover"}
            borderRadius="8"
            w={210}
            ml={4}
            mt={8}
          />
          <Stack mt="6" spacing="1">
            <Heading pl={14} fontSize={18}>
              {item.bookname}
            </Heading>
            <Text pl={17} w={260}>
              <Box color={"green"}>Description:</Box>
              {item.description}
            </Text>
            <Flex pl={14}>
              <Heading fontSize={18} color="green">
                Author:{" "}
              </Heading>{" "}
              {item.author}
            </Flex>
            <Text color="green" ml={5} fontSize="2xl">
              ${item.price}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to={`/updateBook/${item._id}`}>
              <Button
                variant="solid"
                bg={"green"}
                w={140}
                h={30}
                borderRadius={7}
                fontSize={16}
              >
                UPDATE
              </Button>
            </Link>
            <Button
              variant="solid"
              bg={"green"}
              w={140}
              h={30}
              borderRadius={7}
              fontSize={16}
              onClick={deleteHandler}
            >
              DELETE
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BooksCard;

//   <SimpleGrid spacing={4} display={"flex"} width={1100} flexDirection={"row"} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
// </SimpleGrid>
