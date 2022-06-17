import {createStore} from "redux";

const initialState = {
    name: '',
    temperature: 0,
    feelsLike: 0,
    weatherDescription: '',
    sunriseTime: '',
    sunsetTime: '',
    icon: ''
}

export const reducer = (state = initialState, action) => {
    console.log('reducer >', action);

    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'UPDATE_WEATHER_INFO':
            return action.weatherInfo

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
