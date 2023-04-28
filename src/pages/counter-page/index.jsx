import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../storageRTK/counter/reducer';

function CounterPage() {
    const dispatch = useDispatch();
    const counterStore = useSelector(state => state.counter)


    console.log(counterStore);

    return (<div className="block">
        <h1>Счетчик: {counterStore.value}</h1>
        <div className="btns">
            <button onClick={() => { dispatch(increment(5)) }}>Добавить</button>
            <button onClick={() => { dispatch(decrement(2)) }}>Убавить</button>
        </div>
    </div>);
}

export default CounterPage;