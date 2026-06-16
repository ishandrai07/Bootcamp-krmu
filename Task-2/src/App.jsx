import Counter from './components/Counter';
import Toggle from './components/Toggle';
import InputField from './components/InputField';
import PasswordToggle from './components/PasswordToggle';
import FormHandling from './components/FormHandling';


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