import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from "react-dom";

import MediaInfo from '../mediainfo';

describe("MediaInfo", () => {
   let container = null;
   beforeEach(() => {
   // setup a DOM element as a render target
   container = document.createElement("div");
   document.body.appendChild(container);
   render(<MediaInfo media={media}/>);
   });

   afterEach(() => {
   // cleanup on exiting
   unmountComponentAtNode(container);
   container.remove();
   container = null;
   });

   let media = {
      title: "Mock Title",
      date: "00-00-0000",
      explanation: "Mock explanation."
   }

   describe("it should contain article with className container-media-info", () => {
       test("renders article", () => {
         const art=screen.queryByTestId("mediaInfoContainer");
         expect(art).toBeInTheDocument();   
       })
       test("renders h2 with title", () => {
          const title=screen.queryByTestId("title");
          const mockTitle=screen.queryByText("Mock Title")
          expect(title).toBeInTheDocument();
          expect(mockTitle).toBeInTheDocument();
       })
       test("renders LikeButton", () => {
          const like=screen.queryByTestId("button");
          expect(like).toBeInTheDocument();
       })
       test("onclick calls hello", () => {
          act(() => {
            fireEvent.click(screen.getByTestId("testHello"))
          } )
       })
   })
});