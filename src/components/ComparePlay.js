import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import useAudio from '../hooks/useAudio';

const CompareButton = ({audioName, title}) => {
  const audioUrl =
    'https://online.wiseup.com/storage/media/answers-feedback-audio/AIR_PT_1.4_01.mp3';

  const localAudio = 'whistle';

  const {
    handleCompare,
    isLoadingAudioUrl,
    isPlayingUrlAudio,
    isLoadingLocalAudio,
    isPlayingLocalAudio,
    playedAudioOnce,
  } = useAudio();

  const getButtonText = () => {
    if (isLoadingAudioUrl) {
      return 'Carregando URL';
    }

    if (isPlayingUrlAudio) {
      return 'Tocando URL';
    }

    if (isLoadingLocalAudio) {
      return 'Carregando Local';
    }

    if (isPlayingLocalAudio) {
      return 'Tocando Local';
    }

    if (
      playedAudioOnce &&
      !isPlayingLocalAudio &&
      !isPlayingUrlAudio &&
      !isLoadingAudioUrl &&
      !isLoadingLocalAudio
    ) {
      return 'Ja comparou';
    }

    return title;
  };

  const getButtonColor = () => {
    if (isLoadingAudioUrl || isLoadingLocalAudio) {
      return 'blue';
    }

    if (isPlayingUrlAudio || isPlayingLocalAudio) {
      return 'green';
    }

    if (
      playedAudioOnce &&
      !isPlayingLocalAudio &&
      !isPlayingUrlAudio &&
      !isLoadingAudioUrl &&
      !isLoadingLocalAudio
    ) {
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
      onPress={() => handleCompare(audioUrl, localAudio)}
      style={styles.button}>
      <Text>{getButtonText()}</Text>
    </TouchableOpacity>
  );
};

export default CompareButton;
