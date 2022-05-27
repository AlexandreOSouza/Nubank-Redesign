import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Footer } from './components/footer';

import { Header } from './components/header';
import List from './components/listItem';
import { PersonalCard } from './components/personalCard';

const HEADER_HEIGHT = 240

export default function App() {

  const [headerHeight, setHeaderHeight] = useState(HEADER_HEIGHT);
  const [foldHeader, setFoldHeader] = useState(false);

  const RenderForeground = useMemo(() => {
      return <PersonalCard height={headerHeight} foldHeader={foldHeader} />
  }, [headerHeight, foldHeader])

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        {RenderForeground}
        <List setHeaderHeight={setHeaderHeight} setFoldHeader={setFoldHeader}/>
        <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#9c44dc',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'column',
  }
});
