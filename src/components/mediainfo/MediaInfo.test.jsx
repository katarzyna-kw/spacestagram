import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import MediaInfo from '../mediainfo';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders media data", async () => {

   const mockMedia = {
      title: "",
      date: "",
      explanation: ""
   };
   jest.spyOn(global, "fetch").mockImplementation(() =>  
      Promise.resolve({
         json: () => Promise.resolve(mockMedia)
      })
   );

   await act(async () => {
      render (<MediaInfo media/>, container);
   });

   expect(container.querySelector(".title").textContent).toBe(mockMedia.title);
   
   global.fetch.mockRestore()
});