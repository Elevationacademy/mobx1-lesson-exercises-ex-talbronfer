
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../src/stores/groceryStore'
import { ShoppingList, Item } from '../../src/stores/groceryStore';

configure({ adapter: new Adapter() });

let shoppingList;

describe("exercise1", () => {
    it ('store should have an addItem function that adds a new Item to the stores list property', () => {
        const addItem = store.addItem
        expect(store.addItem, "").toBeDefined();
        
        addItem("test")
        const test = shoppingList.list.find(i => i.name === "test")
        expect(test, `The item wasn't correctly added to the state. Make sure that it works. Supposed to be: ${oneVar}, was: ${other}`).toBeTruthy()
    })



    it ('addItem function should be a MobX action', () => {
        const addItem = store.addItem
        expect(addItem.isMobxActionm, "addItem is not a MobX function. Make sure it has the decorator syntax").toBeTruthy()
    })
    
})