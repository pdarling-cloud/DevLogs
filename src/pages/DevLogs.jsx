import LogCard from '../components/LogCard'

function DevLogs() {
  return (
    <div className="container">
      <main className="main-content">
        <h2>DevLogs - Penelope Becomes a Star!</h2>
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
  )
}

export default DevLogs
