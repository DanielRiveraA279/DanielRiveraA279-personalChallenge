import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'react-native-testing-library';
import { HomeScreen } from '../src/screens/HomeScreen';

//incorporacion de ejemplo del TDD

describe('HomeScreen', () => {
    let wrapper;

    //setea configuraciones antes de aplicar casos de pruebas
    beforeEach(() => {
        wrapper = shallow(<HomeScreen />);
    });

    it('Render <HomeScreen/>', async () => {

        const renderScreen = render(
            <HomeScreen />
        );
        expect(renderScreen).toBeTruthy();
    })

    it('Testing Components', () => {
        //Verificamos que esten renderizando estas view
        expect(wrapper.find('PickerSearch')).toHaveLength(1); //buscamos los picker que existan
        expect(wrapper.find('Text')).toHaveLength(1);
        expect(wrapper.find('View')).toHaveLength(1);
    });
});