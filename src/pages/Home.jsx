import LogCard from '../components/LogCard'
import '../App.css'

function Home() {
  return (
    <div className="container">
      <aside className="sidebar">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGeIWm_jqymhQ/profile-displayphoto-crop_800_800/B56Zrqmif5LIAI-/0/1764872567793?e=1767225600&v=beta&t=u1vW6-SjFTUusOFzH390DIA7k_lHheJU6GGct3o4YHI"
          alt="My Headshot!"
          height={200}
          width={200}
          className="profile-img"
        />

        <section>
          <h2>About Me</h2>
          <p>
            I just completed Cycle 58 of i.c.stars and am in the next phase of my tech journey. I enjoy creating business solutions for organizations.
          </p>
        </section>
      </aside>

      <main className="main-content">
           
      </main>
    </div>
  )
}

export default Home
