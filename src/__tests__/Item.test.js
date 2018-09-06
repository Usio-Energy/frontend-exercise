import React from 'react';
import { shallow } from 'enzyme';

import Item from '../components/Item';

describe('Item', () => {
  let component;
  let itemId = 45;

  beforeAll(() => {
    component = shallow(
      <Item
        value="Task label"
        isComplete={ false }
        id={ itemId }
        onRemove={ jest.fn() }
        onStatusChange={ jest.fn() }
      />
    );
  });

  it('should render correctly', () => {
    expect(component.getElement()).toMatchSnapshot();
  });

  it('should call `onRemove` prop and pass the item\'s ID when `Remove` button is clicked', () => {
    const removeBtn = component.find('#remove-btn');

    removeBtn.simulate('click');

    expect(component.instance().props.onRemove).toHaveBeenCalledWith(itemId);
  });

  it('should call `onStatusChange` prop and pass the item\'s ID when the checkbox is checked/unchecked', () => {
    const checkbox = component.find('input');

    checkbox.simulate('change', {
      target: {
        checked: true
      }
    });

    expect(component.instance().props.onStatusChange).toHaveBeenCalledWith(itemId, true);
  });
});
