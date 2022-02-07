import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ComponentFoundation from './pages/ComponentFoundation';
import NoMatch from './pages/NoMatch';
import Lifecycle from './pages/Lifecycle';
import Mounting from './pages/Lifecycle/Mounting';
import Updating from './pages/Lifecycle/Updating';
import ImprovePerformance from './pages/ImprovePerformance';
import PureAndMemoComponent from './pages/ImprovePerformance/PureAndMemoComponent';
import Ref from './pages/Ref'
import ShareFunctionality from './pages/ShareFunctionality';
import HigherOrderComponent from './pages/ShareFunctionality/HigherOrderComponent';
import RenderProps from './pages/ShareFunctionality/RenderProps';
import CustomHook from './pages/ShareFunctionality/CustomHook';
import UseDocumentTitle from './pages/ShareFunctionality/CustomHook/UseDocumentTitle';
import UseCounter from './pages/ShareFunctionality/CustomHook/UseCounter';
import UseInput from './pages/ShareFunctionality/CustomHook/UseInput';
import ClassVsFunctional from './pages/Lifecycle/ClassVSFunctional';
import ClassComp from './pages/Lifecycle/ClassVSFunctional/ClassComponent';
import FunctionalComp from './pages/Lifecycle/ClassVSFunctional/FunctionalComponent';
import FetchData from './pages/FetchData';
import FetchClassComponent from './pages/FetchData/ClassComponent'
import FetchFunctionalComponent from './pages/FetchData/FunctionalComponent';
import ContextAndReducer from './pages/ContextAndReducer';
import BasicContext from './pages/ContextAndReducer/BasicContext';
import BasicReducer from './pages/ContextAndReducer/BasicReducer';
import HandleGlobalState from './pages/ContextAndReducer/HandleGlobalState';
import UseCallbackAndUseMemo from './pages/ImprovePerformance/UseCallbackAndUseMemo';

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
          <Route path="class-vs-functional" element={<ClassVsFunctional />}>
            <Route index element={<ClassComp />} />
            <Route path="class-component" element={<ClassComp />} />
            <Route path="functional-component" element={<FunctionalComp />} />
          </Route>
        </Route>
        <Route path="improve-performance" element={<ImprovePerformance />}>
          <Route index element={<PureAndMemoComponent />} />
          <Route path="pure-and-memo-component" element={<PureAndMemoComponent />} />
          <Route path="usecallback-and-usememo" element={<UseCallbackAndUseMemo />} />
        </Route>
        <Route path="ref" element={<Ref />} />
        <Route path="share-functionality" element={<ShareFunctionality />}>
          <Route index element={<HigherOrderComponent />} />
          <Route path="higher-order-component" element={<HigherOrderComponent />} />
          <Route path="render-props" element={<RenderProps />} />
          <Route path="custom-hook" element={<CustomHook />}>
          <Route index element={<UseDocumentTitle />} />
            <Route path="use-document-title" element={<UseDocumentTitle />} />
            <Route path="use-counter" element={<UseCounter />} />
            <Route path="use-input" element={<UseInput />} />
          </Route>
        </Route>
        <Route path="fetch-data" element={<FetchData />}>
          <Route index element={<FetchClassComponent />} />
          <Route path="class-component" element={<FetchClassComponent />} />
          <Route path="functional-component" element={<FetchFunctionalComponent />} />
        </Route>
        <Route path="context" element={<ContextAndReducer />}>
          <Route index element={<BasicContext />} />
          <Route path="basic-context" element={<BasicContext />} />
          <Route path="basic-reducer" element={<BasicReducer />} />
          <Route path="handle-global-state" element={<HandleGlobalState />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
