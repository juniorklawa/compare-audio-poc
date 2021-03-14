import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import useAudio from '../hooks/useAudio';

// import { Container } from './styles';

const VocabPlay = ({audioUrl, title}) => {
  const {
    handlePlayAudio,
    isLoadingAudioUrl,
    isPlayingUrlAudio,
    playedAudioOnce,
  } = useAudio();

  const getButtonText = () => {
    if (isLoadingAudioUrl) {
      return 'Carregando';
    }

    if (isPlayingUrlAudio) {
      return 'Tocando';
    }

    if (playedAudioOnce) {
      return 'Ja tocou';
    }

    return title;
  };

  const getButtonColor = () => {
    if (isLoadingAudioUrl) {
      return 'blue';
    }

    if (isPlayingUrlAudio) {
      return 'green';
    }

    if (playedAudioOnce) {
      return 'purple';
    }

    return 'red';
  };

  const styles = StyleSheet.create({
    button: {
      height: 120,
      width: 120,
      margin: 16,
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: getButtonColor(),
    },
  });

  return (
    <TouchableOpacity
      onPress={() => handlePlayAudio(audioUrl)}
      style={styles.button}>
      <Text>{getButtonText()}</Text>
    </TouchableOpacity>
  );
};

export default VocabPlay;
