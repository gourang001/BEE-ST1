import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });
  const id = useParams().id;
  console.log("id" + id);

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1000/api/v1/getBooks/${id}`
        );
        // console.log(response);
        setData(response.data.book); // Assuming response.data contains the book information
        console.log(response.data); // Check the fetched data in the console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHandler();
  }, [id]);

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:1000/api/v1/updateBook/${id}`, Data)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      });
    setData({
      bookname: "",
      author: "",
      description: "",
      price: "",
      image: "",
    });
  };
  return (
    <div style={{ minHeight: "97.5vh" }}>
      <div>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
        >
          <FormControl m={140} mb={30}>
            <FormLabel mb={6} ml={5} fontSize={25}>
              Book Name:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              borderRadius={6}
              fontSize={17}
              mb={10}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Book Name:"
              type="text"
              name="bookname"
              value={Data.bookname}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25}>
              Author Name:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Author Name:"
              type="text"
              name="author"
              value={Data.author}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25}>
              Description:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Description:"
              type="text"
              name="description"
              value={Data.description}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25}>
              Image:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Image Url:"
              type="Url"
              name="image"
              value={Data.image}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25}>
              Price:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              borderRadius={6}
              fontSize={17}
              w={550}
              h={45}
              p={10}
              placeholder="Enter Price:"
              type="number"
              name="price"
              value={Data.price}
              onChange={change}
            />
          </FormControl>
          <Button
            bgColor={"green"}
            borderRadius={8}
            borderColor={"white"}
            fontSize={23}
            w={150}
            h={50}
            variant="solid"
            onClick={submit}
          >
            Update Book
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default BookDetail;
