import Input from '../Input/Input';
import Button from '../Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold hover:text-violet-600">
        Hello world!
      </h1>
      <Input />
      <Button
        backgroundColor="green"
        handleClick={() => {}}
        label="Press Me"
        size="md"
      />
      <Input disabled />
    </div>
  );
}

export default App;

