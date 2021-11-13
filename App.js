import React,{useState} from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity,text} from 'react-native';
//import AssetExample from './components/AssetExample';

const App= () =>{
  const[result,setResult]=useState(" ");
  const[random,setRandom]=useState(Math.round(Math.random() * 9, 0) + 1);
  const[counter,setCounter]=useState(0);
  const[points,setPoints]=useState(50);
  
  const onClick=(str) =>{
       if (str === "Guess"){
         setPoints(points-10);
      if (counter < 4) {
        onGuess();
        setCounter(counter + 1);
      } else {
        setCounter(counter + 1);
        setResult("You Lost :( .Start a new game!");
      }}
    else if (str === "New Game") {
      newGame();
    } else if (str === "Hint") {
      setResult("Number is less than 10");
      settime();}
      else if (str === "Stats") {
      setResult("Number of tries:"+counter+". "+"Points: "+points);
    } else
      setResult(result + str);
  }
  const onGuess=() =>{
    if (random == result) {
      setResult("You Won :). Start a new game");
    } else {
      setResult("Sorry try again!");
      settime();
    }
  }
  const settime = () => {
    setTimeout(() => {
      setResult("");
    }, 1000);
  }
   const newGame = () => {
    setResult("New Game");
    settime();
    setPoints(50);
    setCounter(0);
    setRandom(Math.round(Math.random() * 9, 0) + 1);
  }

  return (
    <View style={styles.section}>
      <Text style={{fontSize:30}}>
        
      </Text>
      <View style={styles.output}>
      <Text style={styles.outputtext}>{result}</Text>
      </View>

      <View style={styles.numbers}>
      <View style={styles.row}>
      <TouchableOpacity style={styles.numbers1} onPress={onClick.bind(this,"1")}>
      <Text style={styles.numberbtn}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.numbers1} onPress={onClick.bind(this,"2")}>
      <Text style={styles.numberbtn}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.numbers1} onPress={onClick.bind(this,"3")}>
      <Text style={styles.numberbtn}>3</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.numbers1} onPress={onClick.bind(this,"4")}>
      <Text style={styles.numberbtn}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.numbers1} onPress={onClick.bind(this,"5")}>
      <Text style={styles.numberbtn}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.numbers1} onPress={onClick.bind(this,"6")}>
      <Text style={styles.numberbtn}>6</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.numbers1} onPress={onClick.bind(this,"7")}>
      <Text style={styles.numberbtn}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.numbers1} onPress={onClick.bind(this,"8")}>
      <Text style={styles.numberbtn}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.numbers1} onPress={onClick.bind(this,"9")}>
      <Text style={styles.numberbtn}>9</Text>
      </TouchableOpacity>
      </View>
      </View>

      <View style={styles.buttons}>
      <View style={styles.rowfeature}>
      <TouchableOpacity style={styles.btnfeature} onPress={onClick.bind(this,"Guess")}>
      <Text style={styles.numberbtn}>Guess</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.rowfeature}>
      <TouchableOpacity style={styles.btnfeature} onPress={onClick.bind(this,"New Game")}>
      <Text style={styles.numberbtn}>New Game</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.rowfeature}>
      <TouchableOpacity style={styles.btnfeature} onPress={onClick.bind(this,"Hint")}>
      <Text style={styles.numberbtn}>Hint</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.rowfeature}>
      <TouchableOpacity style={styles.btnfeature} onPress={onClick.bind(this,"Stats")}>
      <Text style={styles.numberbtn}>Stats</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  numbers1: {
    flex: 3,
    backgroundColor: "#45b6fe",
    alignItems: "center",
    justifyContent: "center",
    //alignSelf: 'stretch',
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 12
  },
  rowfeature: {
    flexDirection:"row",
    fontSize: 30,
    flex:4
  },
  btnfeature: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "#ff781f",
    justifyContent: "center",
    //alignself: "stretch",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 12
  },
  outputtext: {
    color: "white",
    fontSize: 30
  },
  numberbtn: {
    fontSize: 30,
    
  },
  row: {
    flexDirection:"row",
    fontSize: 30,
    flex:2
  },
  section: {
    flex:1
  },
  output:{
    flex: 1,
    backgroundColor: 'black',
    color: "white"
  },
  numbers: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    //alignself: "stretch"
  },
  buttons:{
    flex:2,
  }

});
export default App;