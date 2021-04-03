import { StyleSheet} from 'react-native'
import { Colors } from '../../constants/Theme';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  viewImg: {
    width: 120,
    height: 120,
    borderRadius: 80,
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 10,
    alignSelf: 'center',
    borderColor: '#FFE685',
    borderWidth: 3,
  },
  heading1: {
    marginTop: 20,
    marginBottom: 21,
    fontSize: 20,
    color: Colors.fontLight,
  },
  inputsTopTow: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: 270,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  inputsBottomTwo: {
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    width: 270,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  payment_container: {
      backgroundColor:'#fff',
      padding:16,
      borderRadius:10,
      width:320,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2.45,
  
      elevation: 1,
  },
  payments: {
    flexDirection:'row', 
    justifyContent:'space-between',
    borderBottomColor:'#f1f1f1',
    borderBottomWidth:1,
    paddingBottom:10,
    marginBottom:20
  },
  lastpayment:{
        flexDirection:'row', 
        justifyContent:'space-between'
  }
});

  export default styles