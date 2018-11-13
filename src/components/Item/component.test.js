import React from "react";
import { shallow } from "enzyme";
import Item from "./component";
import Spinner from "../Spinner";

const newsMock = 8863;

const storedMock = {
    8863: {
        by: "dhouston",
        descendants: 71,
        id: 8863,
        kids: [8894, 8878, 8870, 8980, 8934, 8876],
        score: 111,
        time: 1175714200,
        title: "My YC app: Dropbox - Throw away your USB drive",
        type: "story",
        url: "http://www.getdropbox.com/u/2/screencast.html"
    }
};

describe("Item", () => {
    test("should render spinner if it can't find the info", () => {
        const mockDataNoStored = {
            news: newsMock,
            stored: {},
            onGetNewsById: jest.fn()
        };
        const component = shallow(<Item {...mockDataNoStored} />);

        expect(component.find(Spinner).length).toBe(1);
        expect(mockDataNoStored.onGetNewsById).toHaveBeenCalled();
    });
    test("should render correctly if the info is there", () => {
        const mockDataNoStored = {
            news: newsMock,
            stored: storedMock,
            onGetNewsById: jest.fn()
        };
        const component = shallow(<Item {...mockDataNoStored} />);

        expect(component.find(".title").length).toBe(1);
        expect(mockDataNoStored.onGetNewsById).not.toHaveBeenCalled();
    });
});
