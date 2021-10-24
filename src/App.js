import './App.css';
import logo from './assets/netflix.svg';
import clipart from './assets/clipart.svg';

const App = () => {
  return (
    <div className="app">
      <header className="bg-green-400">
        <div className="container grid grid-cols-8 mx-auto p-1">
          <p className="text-4xl leading-10 font-extrabold text-white justify-self-start">A.Ryzhuk</p>
          <span className="col-span-4"></span>
          <a className="text-md leading-10 text-white my-auto cursor-pointer justify-self-end">Portfolio</a>
          <a className="text-md leading-10 text-white my-auto cursor-pointer justify-self-end">Contact</a>
          <a className="text-md leading-10 text-white my-auto cursor-pointer justify-self-end">About me</a>
        </div>
      </header>
      <main className="bg-primary pt-48">
        <div className="container mx-auto grid lg:grid-cols-2 gap-x-24 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div className="self-center">
            <p className="block text-7xl text-black font-semibold mb-10">I build awesome experiences</p>
            <p className="block text-2xl text-gray-800 font-regular mb-10">I am fullstack .NET / React web developer</p>
            <a className="block w-1/3 text-center shadow-inner bg-red-400 text-white text-lg py-2 rounded-lg cursor-pointer hover:bg-red-600 transition duration-500">Check out my works</a>
          </div>
          <img src={clipart} alt="" className="block self-center" />
        </div>
      </main>
    </div>
  );
}

export default App;
