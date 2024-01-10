import React from 'react'


export const Home = () => {
  return (
    <>

    
      <header>
        <div>
          <h1>Matthew Guptill Music</h1>
          <h2>Songwriter, Composer, Lover of all things music</h2>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rem commodi unde ipsa temporibus illum minus quas beatae, velit a laudantium modi fugit facere in maiores molestiae dicta, repudiandae cumque?</p>
        </div>
          
        <img src="src\assets\main-image.jpg" alt="Matt at a river" className="main-photo" />
      </header>


      <body>
        <article className="porfolio">

        </article>
        <article className="genres">
           
        </article>
        <article className="links">

        </article>

      </body>

      <style jsx>{`
        header {
          overflow: hidden;
          height: 100vh;
          background-color: #86A789;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 1rem;
        }

        header div {
          width: 45%;
          text-align: center;
        }

        header h1 {
          font-weight: 700;
          font-size: 6rem;
          line-height: 5rem
        }
        
        header h2 {
          font-weight: 600;
        }
        
        .main-photo {
          border-radius: 100%;
          height: 600px;
          width: auto;
          border: 5px solid #4F6F52;
        }

        .porfolio {
          height: 100vh;
          display: flex;
          justify-content: center;
        }
        
        `}</style>
    </>
  )
}
