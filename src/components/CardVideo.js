import {
  Box,
  Badge,
  AspectRatio,
  SimpleGrid,
  Center,
  Image,
  Button,
} from "@chakra-ui/react";
import CardMedia from '@material-ui/core/CardMedia';

import { StarIcon } from "@chakra-ui/icons";

export default function Card() {
  const propertys = [
    {
      videoUrl: "https://www.youtube.com/embed/QhBnZ6NPOY0",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      videoUrl: "https://www.youtube.com/embed/QhBnZ6NPOY0",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },{
      videoUrl: "https://www.youtube.com/embed/QhBnZ6NPOY0",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    }, {
      videoUrl: "https://www.youtube.com/embed/QhBnZ6NPOY0",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      videoUrl: "https://www.youtube.com/embed/QhBnZ6NPOY0",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },{
      videoUrl: "https://www.youtube.com/embed/QhBnZ6NPOY0",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    }
  ];
  return (
    <>
  
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
    <CardMedia
    component="iframe"
    title="Your Title"
    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
    allowfullscreen="allowfullscreen"
/>
<CardMedia
         component="iframe"
         title="Your Title"
         src="https://www.youtube.com/embed/QhBnZ6NPOY0"
         allowfullscreen="allowfullscreen"
        />
      {propertys.map((item, index) => (
        <Box
          key={index}
          maxW="360px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <AspectRatio maxW="360px" ratio={1}>
            <iframe title="naruto" src={item.videoUrl} allowFullScreen />
          </AspectRatio>

          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {item.title}
            </Box>

            <Box>
              {item.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      </SimpleGrid>

    </>
  );
}
