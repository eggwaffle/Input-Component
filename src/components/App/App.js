import Input from '../Input/Input';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold hover:text-violet-600 active:text-yellow-400">
        Inputs
      </h1>
      <Input />
      <Input error />
      <Input disabled />
      <Input helperText='Some interesting text' />
      <Input helperText='Some interesting text' error />
      <Input startIcon />
      <Input endIcon />
      <Input value='text' />
      <Input size='sm' />
      <Input size='md' />
      <Input fullWidth />
      <Input multiline row='4' />
    </div>
  );
}

export default App;

