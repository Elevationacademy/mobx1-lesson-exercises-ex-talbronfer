
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../src/stores/groceryStore'
import { ShoppingList, Item } from '../../src/stores/groceryStore';

configure({ adapter: new Adapter() });

let shoppingList;

describe("exercise1", () => {
    beforeAll(() => {
        shoppingList = new ShoppingList();
        let potatoes = new Item();
        shoppingList.push(potatoes);
    });
    it ('store should have an addItem function that adds a new Item to the stores list property', () => {
        const addItem = shoppingList.addItem
        addItem("test")
        const test = shoppingList.list.find(i => i.name === "test")
        expect(test).toBeTruthy()
    })
    it ('addItem function should be a MobX action', () => {
        const addItem = shoppingList.addItem
        expect(addItem.isMobxAction).toBeTruthy()
    })
})