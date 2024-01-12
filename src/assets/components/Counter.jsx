import operation from "../js/operation";
import reset from "../js/reset";

const Counter = (props) => {
  const { ind, tab, setTab } = props;
  const num = tab[ind].num;
  return (
    <div className="counter-div">
      <div>
        {/* "-" button */}
        <div className="op-button-div">
          {num > 0 && (
            <button
              onClick={() => {
                operation(ind, tab, setTab, "-");
              }}
            >
              -
            </button>
          )}
        </div>
        {/* Number display */}
        <div className="num-display-div">
          <span>{num}</span>
        </div>
        {/* "+" button */}
        <div className="op-button-div">
          <span>
            {num < 10 && (
              <button
                onClick={() => {
                  operation(ind, tab, setTab, "+");
                }}
              >
                +
              </button>
            )}
          </span>
        </div>
      </div>
      <div>
        {/* Reset button */}
        <button
          className="reset-button"
          onClick={() => {
            reset(ind, tab, setTab);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
