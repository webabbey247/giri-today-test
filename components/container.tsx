import { SafeAreaView } from 'react-native-safe-area-context';
export const Container = ({ children }: {children : React.ReactNode}) => {
  return (
    <SafeAreaView
      className={customStyles.container}
      edges={['left', 'right']}>
      {children}
    </SafeAreaView>
  );
};

const customStyles = {
  container: 'flex-1 z-10 h-screen bg-white',
};
