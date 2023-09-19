import { Route, Routes } from "react-router-dom";
import Template from "views/template/Template";

function App() {
    return (
        <Routes>
            <Route path="" element={<Template />} />
        </Routes>
    );
}

export default App;
