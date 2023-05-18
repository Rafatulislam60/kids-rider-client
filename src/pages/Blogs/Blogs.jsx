const Blogs = () => {
  return (
    <div className="text-center my-10 w-full md:px-20 lg:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-4 py-5">
      <h2 className="text-3xl font-semibold mb-3">
        1. What is an access token and refresh token? How do they work and where
        should we store them on the client-side?.
      </h2>
      <h4 className="text-xl font-semibold mb-5">
        An access token is a credential that is issued to a client application
        after successful authentication. It is used to perform tasks on behalf
        of users or to access particular resources. Access tokens are normally
        temporary and have an expiration date. <br />A refresh token, on the
        other hand, is granted as part of the authentication process and is used
        to receive a new access token when the existing one expires. Refresh
        tokens are more durable. <br /> Access and refresh tokens should be
        stored securely on the client-side, such as using HTTP-only cookies, Web
        Storage APIs, or secure keychains. Refresh tokens should be stored in
        even more secure locations, such as server-side sessions or encrypted
        storage mechanisms. Proper storage is essential to ensure the security
        of the authentication system.
      </h4>
      <h2 className="text-3xl font-semibold mb-3">
        2. Compare SQL and NoSQL databases?
      </h2>
      <h4 className="text-xl font-semibold mb-5">
        SQL databases are relational and structured, applying tables with
        predetermined schemas, allowing for complicated queries while
        maintaining data integrity. NoSQL databases are schema-free and
        non-relational, allowing for flexible data structures, horizontal
        scalability, and high performance. SQL databases are best suited for
        organized data and sophisticated transactions, but NoSQL databases excel
        at handling massive amounts of unstructured or semi-structured data and
        offer agility and scalability for modern applications.
      </h4>
      <h2 className="text-3xl font-semibold mb-3">
        3. What is express js? What is Nest JS?
      </h2>
      <h4 className="text-xl font-semibold mb-5">
        Express.js is a minimalist web application framework for Node.js,
        providing a flexible approach to handling HTTP requests, routing,
        middleware integration, and template rendering. It is widely used due to
        its simplicity, scalability, and ecosystem of middleware and plugins.{" "}
        <br /> Nest.js is a TypeScript-based framework for building efficient
        and scalable server-side applications. It is built on top of Express.js
        and adds features inspired by Angular, such as dependency injection,
        module-based architecture, decorators, and TypeScript support.
      </h4>
      <h2 className="text-3xl font-semibold mb-3">
        4. What is MongoDB aggregate and how does it work?
      </h2>
      <h4 className="text-xl font-semibold mb-5">
        MongoDB's aggregate method is a powerful data aggregation and processing
        method. It enables the execution of complicated data transformations and
        collection computations. Aggregation pipelines are made up of several
        stages that process and transform data. Each stage does distinct tasks
        such as filtering, grouping, sorting, and applying mathematical
        functions. The output of one stage becomes the input for the next,
        allowing the development of sophisticated data processing pipelines that
        provide advanced analytics and reporting capabilities in MongoDB.
      </h4>
    </div>
  );
};

export default Blogs;
