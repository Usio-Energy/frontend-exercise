import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('App', () => {
  let app;

  beforeAll(() => {
    app = shallow(<App />);

    app.setState({
      items: [
        {
          id: 1,
          value: 'Item 1',
          isComplete: false,
        },
        {
          id: 2,
          value: 'Item 2',
          isComplete: false,
        }
      ]
    })
  });

  describe('Render', () => {
    it('should render correctly', () => {
      expect(app.getElement()).toMatchSnapshot();
    });
  })

  describe('Tasks', () => {
    it('should render items from state', () => {
      expect(app.find('Item')).toHaveLength(app.state().items.length);
    });

    it('should mark an item as complete when it\'s checkbox is checked', () => {
      app.instance().onStatusChange(2, true);

      expect(app.state().items[1].isComplete).toEqual(true);
    });

    it('should pass `onStatusChanged` as prop to all <Item /> components', () => {
      app.find('Item').forEach((item) => {
        expect(item.props().onStatusChange).toEqual(app.instance().onStatusChange);
      });
    });
  });

  describe('Status copy', () => {
    beforeAll(() => {
      app.setState({
        items: [
          {
            id: 1,
            value: 'Item 1',
            isComplete: false,
          },
          {
            id: 2,
            value: 'Item 2',
            isComplete: true,
          },
          {
            id: 2,
            value: 'Item 2',
            isComplete: false,
          }
        ]
      })
    });

    it('should render updated copy for how many items are complete', () => {
      expect(app.find('.status').text()).toEqual('1 out of 3 tasks completed');
    });
  });

  describe('Task input', () => {
    it('should have two-way binding with a state property', () => {
      const inputField = app.find('#add-input');

      inputField.simulate('change', {
        target: {
          value: 'asdf'
        }
      });

      expect(app.state().newItemField).toEqual('asdf');
    });
  });

  describe('Adding items', () => {
    it('should add item to the state with the correct ID', ()=> {
      app.setState({
        newItemField: 'New item'
      });

      app.find('form').simulate('submit', {
        preventDefault: () => {}
      });

      expect(app.state().items.pop()).toEqual({
        id: app.state().items.length + 1,
        value: 'New item',
        isComplete: false
      });
    });

    it('should clear input when item is added', () => {
      app.setState({
        newItemField: 'New item'
      });

      app.find('form').simulate('submit', {
        preventDefault: () => {}
      });

      expect(app.state().newItemField).toEqual('');
    });
  });

  describe('Removing items', () => {
    beforeAll(() => {
      app.setState({
        items: [
          {
            id: 1,
            value: 'Item 1',
            isComplete: false,
          },
          {
            id: 2,
            value: 'Item 2',
            isComplete: false,
          }
        ]
      });
    })

    it('should remove item by ID', () => {
      app.instance().onRemove(1);

      expect(app.state().items).toHaveLength(1);
      expect(app.state().items[0].id).toEqual(2);
    });

    it('should pass remove method to each <Item /> component', () => {
      app.find('Item').forEach((itemComponent) => {
        expect(itemComponent.props().onRemove).toEqual(app.instance().onRemove);
      });
    });
  });
});
