import React from 'react'
import { shallow } from 'enzyme'

import TodoItem from './TodoItem'

it('renders without crashing', () => {
    shallow(<TodoItem />)
})

it('renders a checkbox field', () => {
    const wrapper = shallow(<TodoItem />)
    expect(wrapper.find('input[type="checkbox"]').length).toEqual(1)
})
