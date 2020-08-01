import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import PokeContainer from '../PokeContainer/PokeContainer';

import Store, {RootStore} from '../../redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {getAllPokemon} from '../../redux/actions/PokemonActions';

export default function HomeScrollable() {
  const pokemon = useSelector((state: RootStore) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemon());
  }, []);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.pokeTitleImg}
          source={require('../../assets/Images/pokemon-title.png')}
        />
      </View>
      <PokeContainer allPokemon={pokemon.allPokemons} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  pokeTitleImg: {
    marginTop: 50,
    width: '90%',
    height: '50%',
    resizeMode: 'stretch',
  },
});
