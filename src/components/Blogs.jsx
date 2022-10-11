import React from "react";

const Blogs = () => {
  return (
    <div className="m-4">
      <h1 className="text-4xl text-center font-bold">React Blogs</h1>
      <div className="card md:w-2/4 mx-auto bg-base-100 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title">
            Question 1: What is the purpose of a react router?
          </h2>
          <p>
            Routing is a process in which a user is directed to different pages
            based on their action or request. ReactJS Router is mainly used for
            developing Single Page Web Applications. React Router is used to
            define multiple routes in the application. When a user types a
            specific URL into the browser, and if this URL path matches any
            'route' inside the router file, the user will be redirected to that
            particular route.
          </p>
        </div>
      </div>
      <div className="card md:w-2/4 mx-auto bg-base-100 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title">
            Question 2: How does context api works?
          </h2>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on.React.createContext() is all you need. It
            returns a consumer and a provider. Provider is a component that as
            it's names suggests provides the state to its children. It will hold
            the "store" and be the parent of all the components that might need
            that store.
          </p>
        </div>
      </div>
      <div className="card md:w-2/4 mx-auto bg-base-100 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title">Question 3: Works of useRef hook?</h2>
          <p>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.The
            useRef returns a mutable ref object. This object has a property
            called .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object. The .current property could be initialized to the
            passed argument initialValue e.g. useRef(initialValue). The object
            can persist a value for a full lifetime of the component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
