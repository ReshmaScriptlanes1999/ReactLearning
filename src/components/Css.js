import './Css.css'
import style from './Css.module.css'
import Button from 'react-bootstrap/Button';
function Css(){
    return(
        <div>
            <div className="primary">this is 1st type of css</div>
            <div style={{color:'red', backgroundColor:'gold'}}>this is 2nd type of css</div>
            <div className={style.ternary}>this is 3rd type of css</div>
            <Button>Click Me</Button>
        </div>
    )
}
export default Css