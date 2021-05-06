import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="dt w-100 border-box pt3 ph5-ns" >
          <p class="link dim black f3 dib mr3 mr4-ns pointer fw-6">Numerology</p>
          {
          /*
          <div class="dtc v-mid w-75 tr"> 
              <p class="link dim black f3 dib mr3 mr4-ns underline pointer">Contribute</p>
              <p class="link dim black f3 dib mr3 mr4-ns underline pointer">Contact</p>
          </div>
          */
          }
      </nav>
      <div className="w-80 center flex flex-wrap">
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center grow shadow-5 bg-white-50 ">
          <img src="https://www.yourtango.com/sites/default/files/image_blog/life-path-number-3.jpg" className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
          <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">Life Path</h1>
              </div>
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray">
              Click here to know your Life Path. We will calculate the life path number and based on the number
              you will get the information on what is the purpose of your life
            </p>
          </div>
        </article>
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center grow shadow-5 bg-white-50">
          <img src="https://i1.wp.com/www.healinglight.co.za/wp-content/uploads/2019/02/9-year-cycles-main-1.jpg?resize=600%2C375&ssl=1" className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
          <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">Current Cycle</h1>
              </div>
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray">
              Click here to know the current cycle you are in the Cycle of 9. This helps you in knowing what you need to focus on in this year and get most benefits from it.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
