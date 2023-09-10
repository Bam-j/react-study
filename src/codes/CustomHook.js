import useToggle from './useToggle';

const CustomHook = () => {
  const [flag, setFlag] = useToggle(true);

  return (
    <div style={{marginLeft: 30}}>
      <h2>{flag + ''}</h2>
      <button onClick={setFlag}>toggle</button>
    </div>
  );
};

export default CustomHook;