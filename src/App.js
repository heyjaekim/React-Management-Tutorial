import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'},
  {'id': 2,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김재원',
  'birthday': '930427',
  'gender': '남자',
  'job': '개발자'},
  {'id': 3,
  'image': 'https://placeimg.com/64/64/2',
  'name': '제니',
  'birthday': '921230',
  'gender': '남자',
  'job': '디자이너'}
]

class App extends Component{
  render() {
    return (
      <div>
        {customers.map(c => {return (<Customer id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
      </div>
    );
  }
}

export default App;
