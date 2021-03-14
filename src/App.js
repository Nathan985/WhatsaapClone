import GlobalStyles from "./Styles/GlobalStyles";
import Index from './Pages/Index'
import {ChatProvider} from './Context/ChatProvider';
function App() {
  return (
    <ChatProvider>
      <div>
        <GlobalStyles />
        <Index />
      </div>
    </ChatProvider>
  );
}

export default App;
