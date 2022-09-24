import logoImage from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.0.153:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((err) => console.log(err));
  }, []);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImage} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que desejar jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
