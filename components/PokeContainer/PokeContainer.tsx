import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AllPokemonItem} from 'Interfaces/PokemonTypes';
import SvgUri from 'react-native-svg-uri';

interface IPokeContainerProps {
  allPokemon?: AllPokemonItem[] | undefined;
}

export default function PokeContainer(props: IPokeContainerProps) {
  const arr: number[] = [];
  for (let i: number = 0; i < 100; i++) {
    arr.push(i);
  }

  const {allPokemon} = props;

  return (
    <View style={styles.pokeContainer}>
      <View style={styles.pokeScrollContainer}>
        <View>
          <View style={styles.pokeItemContainer}>
            {allPokemon ? (
              allPokemon.map((item, index) => {
                return (
                  <View style={styles.pokeItem} key={index}>
                    <View style={styles.homePokemon}>
                      <View style={styles.imgContainer}>
                        {/* <Image
                          style={styles.pokeImage}
                          source={{uri: item.imgUrl}}
                        /> */}

                        <SvgUri
                          width="150"
                          height="150"
                          source={{uri: item.imgUrl}}
                        />
                      </View>
                      <View style={styles.nameContainer}>
                        <Text>{item.name}</Text>
                      </View>
                    </View>
                  </View>
                );
              })
            ) : (
              <View>
                <Text>Loading...</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pokeContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  pokeScrollContainer: {
    width: '100%',
    marginTop: 80,
  },
  pokeItemContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokeItem: {
    width: '50%',
    height: 200,
    backgroundColor: '#eaeaea',
    padding: 10,
  },
  homePokemon: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  imgContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokeImage: {
    marginTop: 20,
    width: 150,
    height: 150,
  },

  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
