import React from "react";

const Blog = () => {
  return (
    <>
      <section>
        <div className="bg-gray-100">
          <div>
            <h1 className="text-4xl font-bold text-center py-16 text-indigo-500">
              Blogs For You{" "}
            </h1>
          </div>
        </div>

        <div className="my-container my-20">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between gap-8 p-10 items-center border-box rounded-md bg-gray-50 ">
              <div className="object-fit rounded-md">
                <img
                  src="https://www.loginradius.com/blog/static/157af7ff069ab273224b4718433d9790/03979/title-image.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-bold">
                  When should you use context API?
                </h4>
                <p className="text-xl font-semibold text-gray-600">
                  Context API in React should be used when you need to pass data
                  or functions down the component tree to a child component or
                  multiple child components, without having to pass them down
                  through multiple levels of intermediate components.
                </p>
              </div>
            </div>
            <div className="flex justify-between border-box gap-8 items-center p-10 rounded-md bg-gray-50 ">
              <div className="object-fit">
                <img
                  src="https://res.cloudinary.com/huyphamcloud/image/upload/v1647853221/hukidev/q6udgln1ru4h1c9cmk13.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-bold">What is a custom hook?</h4>
                <p className="text-xl font-semibold text-gray-600">
                  In React, a custom hook is a function that allows you to
                  extract reusable logic from a component and share it between
                  multiple components. Custom hooks are a powerful feature of
                  React, as they enable you to encapsulate complex logic and
                  state management in a single location, making your code more
                  modular, easier to read, and easier to maintain.
                </p>
              </div>
            </div>
            <div className="flex justify-between border-box gap-8 p-10 items-center rounded-md bg-gray-50 ">
              <div className="object-fit">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--5u-MHaMy--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/l7ci1s4hjn2yrmovjh0s.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-bold">What is useRef?</h4>
                <p className="text-xl font-semibold text-gray-600">
                  In React, useRef is a hook that returns a mutable ref object,
                  which can be used to persist a value across renders. The
                  useRef hook is often used to reference a DOM element or store
                  mutable values that don't trigger a re-render when they
                  change.The useRef hook works by returning an object with a
                  current property that can be set to any value, similar to an
                  instance variable in a class.
                </p>
              </div>
            </div>
            <div className="flex justify-between border-box gap-8 p-10 items-center rounded-md bg-gray-50 ">
              <div className="object-fit ">
                <img src="https://everyday.codes/wp-content/uploads/2020/02/a.jpg" alt="" />
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-bold">What is useMemo?</h4>
                <p className="text-xl font-semibold text-gray-600">
                  In React, useMemo is a hook that allows you to memoize
                  expensive computations and avoid unnecessary re-renders.
                  useMemo takes two arguments: a function that computes a value,
                  and an array of dependencies. The hook will recompute the
                  value only when one or more dependencies have changed. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
