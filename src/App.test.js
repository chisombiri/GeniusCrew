import App from './Containers/App';
import renderer from "react-test-renderer"

//Describing the particular test for snapshot
//Renders end screen and creates snapshot
//Run npm test to create snapshot with snapshot folder
describe("It renders Sucessfully", () => {
      test("Displays the game board", () => {
      const tree = renderer.create(<App />);
      //create a snapshot for the component
      expect(tree.toJSON()).toMatchSnapshot();
    });
});
