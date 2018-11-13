import React from "react";
import { shallow } from "enzyme";
import Item from "./component";

const newsMock = {
    by: "dhouston",
    descendants: 71,
    id: 8863,
    kids: [8894, 8878, 8870, 8980, 8934, 8876],
    score: 111,
    time: 1175714200,
    title: "My YC app: Dropbox - Throw away your USB drive",
    type: "story",
    url: "http://www.getdropbox.com/u/2/screencast.html"
};

describe("Item", () => {
    test("should render correctly", () => {
        const component = shallow(<Item news={newsMock} />);

        expect(
            component.contains(
                <p className="title is-4">
                    <a href={newsMock.url} className="link">
                        {newsMock.title}
                    </a>
                </p>
            )
        ).toBe(true);
    });
});
