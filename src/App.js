import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ComponentFoundation from './pages/ComponentFoundation';
import NoMatch from './pages/NoMatch';
import Lifecycle from './pages/Lifecycle';
import Mounting from './pages/Lifecycle/Mounting';
import Updating from './pages/Lifecycle/Updating';
import PureComponent from './pages/PureComponent';
import Ref from './pages/Ref'
import HigherOrderComponent from './pages/HigherOrderComponent';
import RenderProps from './pages/RenderProps';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<ComponentFoundation />} />
        <Route path='component-foundation' element={<ComponentFoundation />}></Route>
        <Route path="lifecycle" element={<Lifecycle />}>
          <Route index element={<Mounting />} />
          <Route path="mounting" element={<Mounting />} />
          <Route path="updating" element={<Updating />} />
        </Route>
        <Route path="pure-component" element={<PureComponent />} />
        <Route path="ref" element={<Ref />} />
        <Route path="higher-order-component" element={<HigherOrderComponent />} />
        <Route path="render-props" element={<RenderProps />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
