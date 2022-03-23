import React from "react";
import renderer from "react-test-renderer"
import EndScreen from "../Components/EndScreen";

//Unit test
//Describing the particular test for snapshot
//Renders end screen and creates snapshot
//Run npm test to create snapshot with snapshot folder
describe("It renders Sucessfully", () => {
    test("EndScreen displays at the end of game", () => {
      const tree = renderer.create(<EndScreen />);

      //create a snapshot for the component
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });