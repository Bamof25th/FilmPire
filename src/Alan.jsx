import React, { useContext, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { ColorModeContext } from './utils/ToggleColorMode';

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
      key: '077fd9270a0d0e7f3289fb9a093f0c4d2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode }) => {
        if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        }
      },
    });
  }, []);
};

export default useAlan;
