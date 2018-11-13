import React from "react";
import { shallow } from "enzyme";
import List from "./component";
import Item from "../Item";

const newsMock = [
    {
        by: "djhous",
        score: 333,
        id: 8863,
        time: 11757142340,
        title: "First news that is very cool",
        type: "story",
        url: "http://www.verycoolnews.com"
    },
    {
        by: "dhouston",
        score: 111,
        id: 8864,
        time: 1175714200,
        title: "My YC app: Dropbox - Throw away your USB drive",
        type: "story",
        url: "http://www.getdropbox.com/u/2/screencast.html"
    }
];

describe("Item", () => {
    test("should render correctly", () => {
        const component = shallow(<List news={newsMock} />);

        expect(component.find(Item).length).toBe(2);
    });
});
