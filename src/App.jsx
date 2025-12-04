import LogCard from './components/LogCard'
import './App.css'

function App() {
  return (
    <>
      <div className="hero" style={{ backgroundColor: 'violet' }}>
        Penelope Darling | Quality Assurance Tester
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/penelope-darling" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <aside className="sidebar">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGEtt9UW4mSnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1681406054073?e=2147483647&v=beta&t=xBNSEX6pKC-G_MB2BCz5bW4cXztuBePFUXzIFy0rZ7E"
            alt="My Headshot!"
            height={200}
            width={200}
            className="profile-img"
          />

          <section>
            <h2>About Me</h2>
            <p>
              I am Quality Assurance Tester. I enjoy creating business solutions for organizations.
            </p>
          </section>
        </aside>

        <main className="main-content">
          <h2 id="main-title">Penelope Becomes a Star!</h2>
          <LogCard
            logtitle="Week One: Team Week"
            content={
              <>
                <p>
                  Introductions. Vision Church. The Power of Acknowledgement. Leave it at the Door. 
                  Culture of Belonging. Find Someone In the Room. User Orientation. Give Me Twenty. 
                  Fallout Shelter.
                </p>
                <p>
                  Defining Self. Learning Preferences. Applications Review. Common Ground Community. 
                  People Watching.
                </p>
                <p>
                  Problem-Solving Consultants. Culture and the Individual. Take Someone to Lunch. 
                  Tools and Processes. Independent, Codependent, Interdependent. Common Ground: 
                  Community Roles.
                </p>
                <p>
                  Problem-Solving Consultants. Trust Walk. Whistlestop. Productivity Tools. 
                  Tasks (Structure). Transformation + Tech.
                </p>
                <p>
                  Team Week Transformation. Brand Strategy. Welcome to Interstellar - Sharepoint. 
                  Team Reveal + Storytelling 4s. Company Launch: Values, Mission, Vision, Logo.
                </p>
              </>
            }
            timestamp="2025-09-13 10:00 AM"
          />
          <LogCard
            logtitle="Week Two"
            content={
              <p>
                Added login and registration functionality with JWT.
              </p>
            }
            timestamp="2024-06-02 02:30 PM"
          />
          <LogCard
            logtitle="Week Three"
            content={
              <p>
                Resolved issue with API calls not returning expected data.
              </p>
            }
            timestamp="2024-06-03 11:15 AM"
          />    
        </main>
      </div>
    </>
  )
}

export default App
