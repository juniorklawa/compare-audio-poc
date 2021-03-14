import {useState} from 'react';
import SoundPlayer from 'react-native-sound-player';

const useAudio = () => {
  const [isLoadingAudioUrl, setIsLoadingAudioUrl] = useState(false);
  const [isPlayingUrlAudio, setIsPlayingUrlAudio] = useState(false);
  const [isLoadingLocalAudio, setIsLoadingLocalAudio] = useState(false);
  const [isPlayingLocalAudio, setIsPlayingLocalAudio] = useState(false);
  const [playedAudioOnce, setPlayedAudioOnce] = useState(false);

  const handleCompare = async (audioUrl, localAudio) => {
    try {
      setIsLoadingAudioUrl(true);
      SoundPlayer.loadUrl(audioUrl);

      let _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
        'FinishedLoadingURL',
        ({success, sucessUrl}) => {
          if (success) {
            setIsLoadingAudioUrl(false);
            setIsPlayingUrlAudio(true);
            console.log('[PLAYING]');
            SoundPlayer.play(sucessUrl);
          }
        },
      );

      let _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
        'FinishedPlaying',
        () => {
          setIsPlayingUrlAudio(false);
          setPlayedAudioOnce(true);
          console.log('[FINISEHD PLAYING]');

          handlePlayLocalAudio(localAudio);
          _onFinishedPlayingSubscription.remove();
          _onFinishedLoadingURLSubscription.remove();
        },
      );
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  };

  const handlePlayLocalAudio = async localAudio => {
    try {
      setIsLoadingLocalAudio(true);

      SoundPlayer.loadSoundFile(localAudio, 'mp3');

      let _onFinishedLoadingLocalAudioSubscription = SoundPlayer.addEventListener(
        'FinishedLoadingFile',
        ({success, successAudio}) => {
          if (success) {
            setIsLoadingLocalAudio(false);
            setIsPlayingLocalAudio(true);
            console.log('[PLAYING LOCAL AUDIO]');
            SoundPlayer.play(successAudio);
          }
        },
      );

      let _onFinishedPlayingLocalAudioSubscription = SoundPlayer.addEventListener(
        'FinishedPlaying',
        ({success}) => {
          setIsPlayingLocalAudio(false);
          setPlayedAudioOnce(true);
          console.log('[FINISEHD PLAYING LOCAL AUDIO]');
          _onFinishedPlayingLocalAudioSubscription.remove();
          _onFinishedLoadingLocalAudioSubscription.remove();
        },
      );
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  };

  const handlePlayAudio = async url => {
    try {
      setIsLoadingAudioUrl(true);
      SoundPlayer.loadUrl(url);

      let _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
        'FinishedLoadingURL',
        ({success, sucessUrl}) => {
          if (success) {
            setIsLoadingAudioUrl(false);
            setIsPlayingUrlAudio(true);
            console.log('[PLAYING]');
            SoundPlayer.play(sucessUrl);
          }
        },
      );

      let _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
        'FinishedPlaying',
        ({success}) => {
          setIsPlayingUrlAudio(false);
          setPlayedAudioOnce(true);
          console.log('[FINISEHD PLAYING]');
          _onFinishedPlayingSubscription.remove();
          _onFinishedLoadingURLSubscription.remove();
        },
      );
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  };

  return {
    handlePlayAudio,
    handlePlayLocalAudio,
    isLoadingAudioUrl,
    isPlayingUrlAudio,
    isLoadingLocalAudio,
    isPlayingLocalAudio,
    playedAudioOnce,
    handleCompare,
  };
};

export default useAudio;
