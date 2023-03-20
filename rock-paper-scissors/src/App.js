import logo from './logo.svg';
import Box from './component/Box';
import './App.css'

// 객체는 key : value 형태로 작성한다.
// value로 여러개의 프로퍼티를 가질 수 있다.
// 프로퍼티 : key : value 쌍
const choics = {
  scissors: {
    name: "Scissors",
    img: "https://t1.daumcdn.net/tistoryfile/fs12/3_tistory_2009_01_12_07_49_496a778f3d93a?original"
  },
  rock: {
    name: "Rock",
    img: "http://health.chosun.com/site/data/img_dir/2019/12/10/2019121001214_0.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://src.hidoc.co.kr/image/lib/2020/3/27/1585295218513_0.jpg"
  }
}

function App() {
  return (
    <div className="App">
      <div class="Box-list">
        <Box title="You"></Box>
        <Box title="Computer"></Box>
      </div>
      <div className='btn-list'>
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  );
}

export default App;
