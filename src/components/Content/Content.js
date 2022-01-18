import Input from '../Input/Input';

function Content() {
  return (
    <div>
      <h1 className="pl-10 py-10 text-3xl font-poppins font-bold">
        Inputs
      </h1>
      <div className='flex row flex-wrap'>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input />`}</p>
          <Input />
        </div>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input error/>`}</p>
          <Input error />
        </div>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input disabled />`}</p>
          <Input disabled />
        </div>
      </div>
      <div className='flex row'>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input helperText='Some interesting text' />`}</p>
          <Input helperText='Some interesting text' />
        </div>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input helperText='Some interesting text' error/>`}</p>
          <Input helperText='Some interesting text' error />
        </div>
      </div>
      <div className='flex row flex-wrap'>
        <div className='m-5'>
        <p className='font-ubuntuMono'>{`<Input startIcon />`}</p>
        <Input startIcon />
        </div>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input startIcon icon='schedule' />`}</p>
          <Input startIcon icon='schedule'/>
        </div>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input startIcon icon='key' />`}</p>
          <Input startIcon icon='key' />
        </div>
      </div>
      <div className='flex row flex-wrap'>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input endIcon />`}</p>
          <Input endIcon />
        </div>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input endIcon  icon='verified_user' />`}</p>
          <Input endIcon  icon='verified_user'/>
        </div>
      </div>
      <div className='m-5'>
        <p className='font-ubuntuMono'>{`<Input value='text' />`}</p>
        <Input value='text' />
      </div>
      <div className='flex row flex-wrap'>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input size='sm' />`}</p>
          <Input size='sm' />
        </div>
        <div className='m-5'>
          <p className='font-ubuntuMono'>{`<Input size='md' />`}</p>
          <Input size='md' />
        </div>
      </div>
      <div className='m-5'>
        <p className='font-ubuntuMono'>{`<Input fullWidth />`}</p>
        <Input fullWidth />
      </div>
      <div className='m-5'>
        <p className='font-ubuntuMono'>{`<Input multiline row='4' />`}</p>
        <Input multiline row='4' />
      </div>
      <footer className='mt-8 font-montserrat text-center text-[#A9A9A9]'>created by <b>
          <a
            href="https://github.com/eggwaffle"
            target="_blank"
            rel="noopener noreferrer"
          >
            eggwaffle
          </a>
        </b> - devChallenges.io
      </footer>
    </div>
  );
}

export default Content;

