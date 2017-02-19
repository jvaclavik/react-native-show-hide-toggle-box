# react-native-show-hide-toggle-box
React Native Toggle Box for showing/hiding content with sliding effect. Should looks like classical [slideToggle()](http://api.jquery.com/slidetoggle/) from jQuery. 

* `ToggleBox` must be surrounded with `ScrollView` (not as the closest parent)
* PRs welcome

## Demo

![Showtime](react-native-show-hide-toggle-box.gif?raw=true "Showtime")

## Installation

```bash
npm i react-native-show-hide-toggle-box --save
```

or

```bash
yarn add react-native-show-hide-toggle-box --save
```

## Use

```javascript
import ToggleBox from 'react-native-show-hide-toggle-box'

...

<ScrollView style={styles.container}>
  <ToggleBox label='Show me something' value='asd' style={{backgroundColor: '#ddd', borderBottomWidth: 1}}>
    <View style={{height: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee'}}>
      <Text>Hello, how are you?</Text>
    </View>
  </ToggleBox>
</ScrollView>
```

## Props

|Prop name | Default prop | Required | Note
| --- | --- | --- | --- |
| `arrowColor` | `rgb(178, 178, 178)` | - | - |
| `arrowSize` | `30` | - | - |
| `arrowDownType` | `'keyboard-arrow-down'` | - | Icon name from`react-native-vector-icons/MaterialIcons` |
| `arrowUpType` | `'keyboard-arrow-up'` | - | Icon name from`react-native-vector-icons/MaterialIcons` |
| `children` | - | Yes | Element which you want to show inside of the box | 
| `expanded` | `false` | - | Boolean if box should be expanded or not |
| `label` | - | Yes | Left label on the left of title |
| `style` | `{}` | - | Custom styles |
| `value` | `null` | - | Value on the right title | 
