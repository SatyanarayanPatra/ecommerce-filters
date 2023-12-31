import './App.css';
import Navigation from './navigation/nAV.JSX';
import Products from './products/Products';
import Recommended from './recomended/Recommended';
import SideBar from './sidebar/SideBar';

function App() {
	return (
		<>
			<SideBar />
			<Navigation />
			<Recommended />
			<Products />
		</>
	);
}

export default App;
