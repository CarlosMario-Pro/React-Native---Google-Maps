import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    overflow: 'hidden',
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 38,
    color: '#0B646B',
    fontWeight: 'bold',
  },
  text: {
    color: '#527273',    
    fontSize: 36,
  },
  imagePerfil: {
    height: 50,
    width: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#457b9d',
    marginRight: 20,
  },
  avatar: {
    height: 50,
    width: 50,
  }
//   circle: {
//     height: 50,
//     width: 50,
//     backgroundColor: 'black',
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   circleText: {
//     color: '#00BCC9',
//     fontSize: 25,
//     fontWeight: 600,
//   },
//   text: {
//     fontSize: 25,
//     color: '#2A2B4B',
//     fontWeight: 700,
//   },
//   container2: {
//     marginLeft: 18,
//     marginBottom: 20,
//   },
//   text2: {
//     color: '#3C6072',
//     fontSize: 38,
//   },
//   text3: {
//     color: '#00BCC9',
//     fontSize: 38,
//     fontWeight: 700,
//   },
//   textLorem: {
//     color: '#3C6072',
//     marginLeft: 20,
//   },
//   draw: {
//     height: 350,
//     width: 350,
//     backgroundColor: '#00BCC9',
//     borderRadius: 175,
//     position: 'absolute',
//     bottom: 80,
//     right: -140,
//   },
//   draw2: {
//     height: 350,
//     width: 350,
//     backgroundColor: '#E99265',
//     borderRadius: 175,
//     position: 'absolute',
//     bottom: -145,
//     right: 140,
//   },
//   traveler: {
//     position: 'relative',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 350,
//     height: 480,
//     resizeMode: 'cover',
//   },
//   containerButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     position: 'absolute',
//     bottom: 50,
//     left: 150,
//     zIndex: 1,
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderTopWidth: 3,
//     borderWidth: 2,
//     borderBottomWidth: 0,
//     borderColor: '#00BCC9'
//   },
//   button: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#00BCC9',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },  
//   textButton: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 500,
//   },
});

export default styles;