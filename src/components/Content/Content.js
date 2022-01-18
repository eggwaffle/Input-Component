import Input from '../Input/Input';

function Content() {
  return (
    <div className="Content">
      <h1 className="text-3xl font-bold">
        Inputs
      </h1>
      <p>{`<Input />`}</p>
      <Input />
      <p>{`<Input error/>`}</p>
      <Input error />
      <p>{`<Input disabled />`}</p>
      <Input disabled />
      <p>{`<Input helperText='Some interesting text' />`}</p>
      <Input helperText='Some interesting text' />
      <p>{`<Input helperText='Some interesting text' error/>`}</p>
      <Input helperText='Some interesting text' error />
      <p>{`<Input startIcon />`}</p>
      <Input startIcon />
      <p>{`<Input startIcon icon='schedule' />`}</p>
      <Input startIcon icon='schedule'/>
      <p>{`<Input startIcon icon='key' />`}</p>
      <Input startIcon icon='key' />
      <p>{`<Input endIcon />`}</p>
      <Input endIcon />
      <p>{`<Input endIcon  icon='verified_user' />`}</p>
      <Input endIcon  icon='verified_user'/>
      <p>{`<Input value='text' />`}</p>
      <Input value='text' />
      <p>{`<Input size='sm' />`}</p>
      <Input size='sm' />
      <p>{`<Input size='md' />`}</p>
      <Input size='md' />
      <p>{`<Input fullWidth />`}</p>
      <Input fullWidth />
      <p>{`<Input multiline row='4' />`}</p>
      <Input multiline row='4' />
    </div>
  );
}

export default Content;

