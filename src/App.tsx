import {
  ChakraProvider
} from '@chakra-ui/react'
import { LoginCard } from './components/Card/Card';

function App() {
  return (
    <ChakraProvider>
      <LoginCard />
    </ChakraProvider>
  );
}

export default App;