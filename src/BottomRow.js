import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);

  const [ballOn, setBallOn] = useState(20);
  const [toGo, setToGo] = useState(5);

  if(down >= 4) {

  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <div>
        <div className="quarterButton">
          <button className="" onClick={ () => setQuarter(quarter + 1)}>Quarter</button>
        </div>
        <div className="downButton">
          <button className="" onClick={ () => setDown(down + 1)}>Down</button>
        </div>
        <div className="ballOnButton">
          Ball On: <input type='text' value={ballOn} onChange={ e => setBallOn(e.target.value)}></input>
        </div>
        <div className="toGoButton">
          To Go: <input type='text' value={toGo} onChange={ e => setToGo(e.target.value)}></input>
        </div>
      </div>
    </div>

  );
};

export default BottomRow;
