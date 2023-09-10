import {useState} from 'react';

const useToggle = initialState => {
  const [flag, setFlag] = useState(initialState);

  const handleFlagToggle = () => setFlag(!flag);

  return [flag, handleFlagToggle];
};

export default useToggle;