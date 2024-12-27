import { Flex, Text } from "@mantine/core";

const PoweredBy = () => {
  return <Flex align={"center"} justify={"center"} gap={4}>
    <Text fz={12} fw={500} c={"foreground1"}>Powered by</Text>
    <a href={"https://butterswap.io"} target="_blank">
      <Text fz={12} fw={500} c={"foreground"}>ButterSwap</Text>
    </a>
  </Flex>
}

export default PoweredBy;