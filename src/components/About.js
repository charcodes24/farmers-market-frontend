

export default function About() {
    return (
      <div className="row text-center">
        <div className="col-8 justify-content-center p-5">
          <h1 className="pt-5">Welcome to the Farmer's Market!</h1>
          <p >
            A safe, social-distancing alternative to help you still get your
            favorite products from your favorite local vendors. Happy Shopping!
          </p>
        </div>
            <div className="col-4">
                <img className="w-100 h-100 inline-block" src="https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="fresh produce"/>
        </div>
      </div>
    );
}