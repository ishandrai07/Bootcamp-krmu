import Counter from './Components/Counter';
import Toggle from './Components/Toggle';
import InputField from './Components/InputField';
import PasswordToggle from './Components/PasswordToggle';
import FormHandling from './Components/FormHandling';


function App() {
  return (
    <div>
      <h1>useState Examples</h1>

      <Counter />
      <hr />

      <Toggle />
      <hr />

      <InputField />
      <hr />

      <PasswordToggle />
      <hr />

      <FormHandling/>
      
    </div>
  );
}

export default App;