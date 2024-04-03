import Header from "../components/Header"
import { Container, Heading, Box, Text, Link } from '@chakra-ui/react'
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import LineChart from '../components/LineChart';
import { data } from '../data/stats_for_Denmark';

export default function Home() {
  return (
    <>
      <Header />
      <Box height='100vh' bg="#242730">
        <Container maxW='8xl' height='85vh' mt="4rem" >
          <ParentSize>{({ width, height }) => <LineChart data={data} width={width} height={height} />}</ParentSize>
        </Container>
      </Box>
    </>
  )
}
