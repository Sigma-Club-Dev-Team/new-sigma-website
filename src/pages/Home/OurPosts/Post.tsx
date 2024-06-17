import React from "react";
import { LuChevronsRight } from "react-icons/lu";
import { Box, Button, Icon, Link, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { SigmaLogoJPG } from "constants/image_assets";
import { IMediaPost } from "constants/media-posts";

export default function Post({ post }: { post: IMediaPost }) {
  return (
    <Box
      width={{ base: "100%", md: "22rem", lg: "29.875rem" }}
      minWidth={{ base: "100%", md: "22rem", lg: "29rem" }}
      borderRadius=".5rem"
      boxShadow="7px 7px 20px 0px #00000040"
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <Box position="relative" height={{ base: "14rem", md: "17rem" }}>
        <Image
          src={post.imageUrl ?? SigmaLogoJPG}
          alt="Post Image"
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
        />
      </Box>
      <Box p="1rem" display="flex" flexDirection="column" gap=".75rem">
        <Text
          noOfLines={2}
          fontSize="0.8rem"
          lineHeight="1rem"
          fontWeight="600"
        >
          {post.source}
        </Text>
        <Text
          noOfLines={2}
          fontSize="1.125rem"
          lineHeight="1.6875rem"
          fontWeight="500"
        >
          {post.title}
        </Text>
        <Box>
          <Link href={post.link ?? "/posts"}>
            <Button
              variant="link"
              rightIcon={<Icon as={LuChevronsRight} w={4} h={4} />}
              fontSize="1rem"
              fontWeight="400"
            >
              View
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
